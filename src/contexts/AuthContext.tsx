
import React, { createContext, useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

export const AuthContext = createContext({
  keycloak: null,
  authenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const keycloak = useRef<Keycloak | null>(null);

  // Only initialize these if they're needed in your component
  const navigate = useNavigate();
  const location = useLocation();

  // Ensure all environment variables are prefixed with VITE_
  const keycloakConfig = {
    url: import.meta.env.VITE_KEYCLOAK_URL || '',
    realm: import.meta.env.VITE_KEYCLOAK_REALM || '',
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || '',
    "public-client": true,
    "ssl-required": import.meta.env.VITE_KEYCLOAK_SSL_REQUIRED || 'none',
    "verify-token-audience": import.meta.env.VITE_KEYCLOAK_VERIFY_TOKEN_AUDIENCE === "true",
    "use-resource-role-mappings": import.meta.env.VITE_KEYCLOAK_USE_RESOURCE_ROLE_MAPPINGS === "true",
    "confidential-port": parseInt(import.meta.env.VITE_KEYCLOAK_CONFIDENTIAL_PORT || "0"),
  };

  useEffect(() => {
    if (!keycloakConfig.url || !keycloakConfig.realm || !keycloakConfig.clientId) {
      console.error('Required Keycloak configuration is missing');
      return;
    }

    if (!keycloak.current) {
      console.info("Initializing Keycloak...");
      keycloak.current = new Keycloak(keycloakConfig);

      keycloak.current.init({ 
        pkceMethod: 'S256', 
        onLoad: 'login-required',
      }).then(authenticated => {
        setAuthenticated(authenticated);
        if (authenticated && keycloak.current?.token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${keycloak.current.token}`;
        }
        console.info("Keycloak initialized:", authenticated);
      }).catch(error => {
        console.error("Failed to initialize Keycloak:", error);
      });
    }
  }, []);

  useEffect(() => {
    if (!keycloak.current) return;

    keycloak.current.onAuthSuccess = () => {
      console.info("Authentication successful");
      setAuthenticated(true);
    };

    keycloak.current.onAuthError = () => {
      console.error("Authentication error");
      setAuthenticated(false);
    };

    keycloak.current.onAuthLogout = () => {
      console.info("Logged out");
      setAuthenticated(false);
    };

    keycloak.current.onTokenExpired = () => {
      console.info('Token expired, refreshing...');
      keycloak.current
        ?.updateToken(70)
        .then((refreshed) => {
          if (refreshed && keycloak.current?.token) {
            console.info('Token refreshed');
            axios.defaults.headers.common['Authorization'] = `Bearer ${keycloak.current.token}`;
          } else {
            console.info('Token not refreshed, redirecting to login');
            keycloak.current?.login();
          }
        })
        .catch(() => {
          console.error('Failed to refresh token, redirecting to login');
          keycloak.current?.login();
        });
    };
  }, []);

  const login = () => {
    if (keycloak.current) {
      console.info("Redirecting to Keycloak login...");
      keycloak.current.login();
    }
  };

  const logout = () => {
    if (keycloak.current) {
      console.info("Logging out from Keycloak...");
      keycloak.current.logout();
    }
  };

  return (
    <AuthContext.Provider value={{ keycloak: keycloak.current, authenticated, login, logout }}>
      {keycloak.current && children}
    </AuthContext.Provider>
  );
};

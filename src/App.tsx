import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LogoAnimationProvider } from "./contexts/LogoAnimationContext";
import { Toaster } from "sonner";
import Index from "./pages/Index";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LogoAnimationProvider>
        <Router>
          <Toaster position="top-right" richColors />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </Router>
      </LogoAnimationProvider>
    </ThemeProvider>
  );
}

export default App;

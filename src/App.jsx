import React, { useEffect, useState } from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import Routes from "./routes/routes";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';
import Entrada from './pages/SignIn/index';
export default function App() {

  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes />
      </ThemeProvider>
    </Router>
    

  );
  ReactDOM.render(
    <AuthProvider>
      <Router>
        <Entrada />
      </Router>
    </AuthProvider>,
    document.getElementById('root')
  );
}


import React, { useEffect, useState } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import Routes from "./routes"
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {

  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes />
      </ThemeProvider>
    </Router>

  );
}


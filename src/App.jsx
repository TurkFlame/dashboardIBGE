import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes />
        <Navbar></Navbar>
      </ThemeProvider>
    </Router>
  );
}

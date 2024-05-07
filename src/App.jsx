import React, { useEffect, useState } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import Routes from "./Router"
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  {/* Precisa de um lugar para o usuário poder colocar para filtrar o tipo de pesquisa que ele quer, exemplo: pibPerCapita, pibTotal, filtrar os paises e filtragem por data*/ }
  {/*console.log("oi")
  const [totalPib, setTotalPib] = useState(null);
  const [pibPerCapita, setPibPerCapita] = useState(null);

  useEffect(() => {
    const api = new Api(new Filter(['BR', 'EUA', 'AR', 'ZA', 'DE', 'IN']));
    api.getTotalPIB().then(data => setTotalPib(data));
    api.getPIBPerCapita().then(data => setPibPerCapita(data));
  }, []);*/}

  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes />
      </ThemeProvider>
    </Router>

  );
}


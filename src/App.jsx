import React, { useEffect, useState } from 'react';
import Api from './model/api.jsx';
import Filter from './model/filter.jsx';

function App() {
  console.log("oi")
  const [totalPib, setTotalPib] = useState(null);
  const [pibPerCapita, setPibPerCapita] = useState(null);

  useEffect(() => {
    const api = new Api(new Filter(['BR', 'EUA', 'AR', 'ZA', 'DE', 'IN']));
    api.getTotalPIB().then(data => setTotalPib(data));
    api.getPIBPerCapita().then(data => setPibPerCapita(data));
  }, []);

  {/* Precisa de um lugar para o usuário poder colocar para filtrar o tipo de pesquisa que ele quer, exemplo: pibPerCapita, pibTotal, filtrar os paises e filtragem por data*/}
  return (
    <div id='Infos'>
      {/* Aqui vai ir os dados para construção do dashboard */}
    </div>
  );
}

export default App;

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

  return (
    <div id='Infos'>
      <h1>Dashboard</h1>
      <p>Total PIB:</p>
      <pre>{JSON.stringify(totalPib, null, 2)}</pre>
      <p>PIB per Capita:</p>
      <pre>{JSON.stringify(pibPerCapita, null, 2)}</pre>
    </div>
  );
}

export default App;

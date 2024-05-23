import React, { useEffect, useRef, useState } from 'react';
import Api from '@/services/api';
import Navbar from '@/components/navbar';
import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faMoneyBillWave, faVenusMars, faSeedling, faBurger, faFaucetDrip, faEarthAmerica, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

export default function PageSearch() {
  const [newData, setNewDataList] = useState([]);
  const [pecuariaCount, setPecuariaCount] = useState(0);
  const [financasCount, setFinancasCount] = useState(0);
  const [generoCount, setGeneroCount] = useState(0);
  const [agricolaCount, setAgricolaCount] = useState(0);
  const [morbidadeCount, setMorbidadeCount] = useState(0);
  const [SaneamentoCount, setSaneamentoCount] = useState(0);
  const [pesquisasCount, setPesquisasCount] = useState(0);
  const lineChartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = new Api();
        const response = await api.getPesquisas();
        setNewDataList(response);
        setPesquisasCount(response.length);

        const pecuariaResponse = await api.getPesquisasPecuaria();
        setPecuariaCount(pecuariaResponse.periodos.length);

        const financasResponse = await api.getFinancasPublicas();
        setFinancasCount(financasResponse.periodos.length);

        const generoResponse = await api.getPesquisasGenero();
        setGeneroCount(generoResponse.periodos.length);

        const agricolaResponse = await api.getPesquisasAgricola();
        setAgricolaCount(agricolaResponse.periodos.length);

        const morbidadeResponse = await api.getPesquisasMorbidade();
        setMorbidadeCount(morbidadeResponse.periodos.length);

        const saneamentoResponse = await api.getPesquisasSaneamento();
        setSaneamentoCount(saneamentoResponse.periodos.length);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const renderLineChart = (data) => {
    const chartData = formatChartData(data);

    if (lineChartRef.current) {
      lineChartRef.current.destroy();
    }

    const lineCtx = document.getElementById('lineChart') as HTMLCanvasElement;
    lineChartRef.current = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: chartData.labels,
        datasets: [{
          label: 'Quantidade de setores atingidos pelo IBGE no Brasil',
          data: chartData.dataValues,
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  const formatChartData = (data) => {
    const yearCounts = data.reduce((acc, curr) => {
      curr.periodos.forEach(periodo => {
        const year = parseInt(periodo.periodo, 10);
        if (year >= 1940 && year <= 2024) {
          if (!acc[year]) {
            acc[year] = 0;
          }
          acc[year]++;
        }
      });
      return acc;
    }, {});

    const labels = Object.keys(yearCounts).sort((a, b) => parseInt(a) - parseInt(b)); // Garante a ordenação numérica
    const dataValues = Object.values(yearCounts);
    return { labels, dataValues };
  };

  useEffect(() => {
    if (newData.length > 0) {
      renderLineChart(newData);
    }
  }, [newData]);

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>

          <div className='col-md-12'>
            <div className='card-label'>
              <div className="sector-header">
                <p><b>Total de Pesquisas Realizadas Pelo IBGE</b></p>
                <FontAwesomeIcon icon={faEarthAmerica} className="icon" />
              </div>
              <div className="sector-info">
                <h2><b>3.863.364.031</b></h2>
              </div>
            </div>
          </div>


          <div className='col-md-6'>
            <div className='card-line'>
              <canvas id="lineChart"></canvas>
            </div>
          </div>


        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='card-label'>
              <div className="sector-header">
                <p><b>Quantidade de Anos em que o IBGE conduziu pesquisas</b></p>
                <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
              </div>
              <div className="sector-info">
                <h2><b>{pesquisasCount}</b></h2>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='card-sector mb-3'>
              <div className="sector-header">
                <p><b>Setor Pecuário</b></p>
                <FontAwesomeIcon icon={faCow} className="icon" />
              </div>
              <div className="sector-info">
                <h2><b>{pecuariaCount}</b></h2>
              </div>
            </div>

            <div className='card-sector mb-3'>
              <div className="sector-header">
                <p><b>Morbidade</b></p>
                <FontAwesomeIcon icon={faBurger} className="icon" />
              </div>
              <div className="sector-info">
                <h2><b>{morbidadeCount}</b></h2>
              </div>
            </div>

            <div className='card-sector mb-3'>
              <div className="sector-header">
                <p><b>Gêneros</b></p>
                <FontAwesomeIcon icon={faVenusMars} className="icon" />
              </div>
              <div className="sector-info">
                <h2><b>{generoCount}</b></h2>
              </div>
            </div>

          </div>
          <div className='col-md-6'>
            <div className='card-sector mb-3'>
              <div className="sector-header">
                <p><b>Agrícola</b></p>
                <FontAwesomeIcon icon={faSeedling} className="icon" />
              </div>
              <div className="sector-info">
                <h2><b>{agricolaCount}</b></h2>
              </div>
            </div>

            <div className='card-sector mb-3'>
              <div className="sector-header">
                <p><b>Finanças Públicas</b></p>
                <FontAwesomeIcon icon={faMoneyBillWave} className="icon" />
              </div>
              <div className="sector-info">
                <h2><b>{financasCount}</b></h2>
              </div>
            </div>


            <div className='card-sector mb-3'>
              <div className="sector-header">
                <p><b>Saneamento Básico</b></p>
                <FontAwesomeIcon icon={faFaucetDrip} className="icon" />
              </div>
              <div className="sector-info">
                <h2><b>{SaneamentoCount}</b></h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

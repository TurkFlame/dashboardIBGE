import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Api from '@/services/api';
import Navbar from './navbar';

function PageName() {
    const [nameData, setNameData] = useState([]);
    const [locationData, setLocationData] = useState([]);
    const [nameFrequencyData, setNameFrequencyData] = useState([]);
    const lineChartRef = useRef(null);
    const radarChartRef = useRef(null);
    let nome = 'Maria';

    useEffect(() => {
        const api = new Api();

        const fetchData = async () => {
            try {
                const nameDataResponse = await api.getNameRanking();
                setNameData(nameDataResponse);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        const fetchDataLocation = async () => {
            try {
                const locationDataResponse = await api.getNameFrequencyRegion('4109401');
                setLocationData(locationDataResponse);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        const fetchNameFrequency = async (name) => {
            try {
                const frequencyName = await api.getNameFrequency(name);
                setNameFrequencyData(frequencyName);
            } catch (error) {
                console.error('Erro ao buscar dados da API de frequência de nomes:', error);
            }
        };

        fetchData();
        fetchDataLocation();
        fetchNameFrequency(nome);
    }, []);

    useEffect(() => {
        if (nameData.length > 0 && locationData.length > 0) {
            const formatChartData = () => {
                const entries = nameData[0].res.slice(0, 20);
                const labels = entries.map(entry => entry.nome);
                const data = entries.map(entry => entry.frequencia);
                return { labels, data };
            };

            const formatLocationData = () => {
                const entries = locationData[0].res.slice(0, 10);
                const labels = entries.map(entry => entry.nome);
                const data = entries.map(entry => entry.frequencia);
                return { labels, data };
            };

            const chartData = formatChartData();
            const locationChartData = formatLocationData();

            if (lineChartRef.current) {
                lineChartRef.current.destroy();
            }
            if (radarChartRef.current) {
                radarChartRef.current.destroy();
            }

            // Gráfico de linha
            const lineCtx = document.getElementById('lineChart') as HTMLCanvasElement;
            lineChartRef.current = new Chart(lineCtx, {
                type: 'line',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: 'Nomes populares no Brasil',
                        data: chartData.data,
                        borderColor: 'rgba(255, 99, 132, 1)',
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

            // Gráfico de radar com dados de localização
            const radarCtx = document.getElementById('radarChart') as HTMLCanvasElement;
            radarChartRef.current = new Chart(radarCtx, {
                type: 'radar',
                data: {
                    labels: locationChartData.labels,
                    datasets: [{
                        label: 'Nomes populares em Guarapuava',
                        data: locationChartData.data,
                        borderColor: 'rgba(255, 206, 86, 1)',
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        r: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }, [nameData, locationData]);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card-line mb-3'>
                            <canvas id="lineChart"></canvas>
                        </div>
                        <div className='card-line radar-chart-container'>
                            <canvas id="radarChart" className='radar-chart'></canvas>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card-table'>
                            <table className="table">
                                <caption>
                                    <b>Frequência do nome: </b> {nome}
                                </caption>
                                <thead>
                                    <tr>
                                        <th>Período</th>
                                        <th>Frequência</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {nameFrequencyData.length > 0 && nameFrequencyData[0].res.map((entry, index) => (
                                        <tr key={index}>
                                            <td>{entry.periodo.replace(/\[|\]/g, '')}</td>
                                            <td>{entry.frequencia}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageName;

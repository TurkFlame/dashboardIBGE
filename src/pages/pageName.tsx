import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Api from '@/services/api';

function PageName() {
    const [nameData, setNameData] = useState([]);
    const [nameFrequencyData, setNameFrequencyData] = useState([]);
    const lineChartRef = useRef(null);
    const polarChartRef = useRef(null);
    const label = 'Frequência dos nomes por pessoa';
    const polarLabel = 'Top 10 Ranking de nomes';
    let nome = 'Jose';

    // Função para buscar dados da API de ranking de nomes
    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = new Api();
                const nameDataResponse = await api.getNameRanking();
                setNameData(nameDataResponse);
            } catch (error) {
                console.error('Erro ao buscar dados da API de ranking:', error);
            }
        };

        fetchData();
    }, []);

    // Função para buscar dados da API de frequência de nomes
    useEffect(() => {
        const fetchNameFrequency = async (name) => {
            const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setNameFrequencyData(data);
            } catch (error) {
                console.error('Erro ao buscar dados da API de frequência de nomes:', error);
            }
        };

        fetchNameFrequency(nome);
    }, []);

    // Função para formatar os dados do gráfico
    useEffect(() => {
        if (nameData.length > 0) {
            const formatChartData = () => {
                const entries = nameData[0].res.slice(0, 10); // Pegando apenas os top 10
                const labels = entries.map(entry => entry.nome);
                const data = entries.map(entry => entry.frequencia);
                return { labels, data };
            };

            const chartData = formatChartData();

            if (lineChartRef.current) {
                lineChartRef.current.destroy();
            }
            if (polarChartRef.current) {
                polarChartRef.current.destroy();
            }

            // Gráfico de linha
            const lineCtx = document.getElementById('lineChart') as HTMLCanvasElement;
            lineChartRef.current = new Chart(lineCtx, {
                type: 'line',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: label,
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

            // Novo gráfico polar
            const polarCtx = document.getElementById('polarChart') as HTMLCanvasElement;
            polarChartRef.current = new Chart(polarCtx, {
                type: 'polarArea',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: polarLabel,
                        data: chartData.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 159, 64, 0.5)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
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
    }, [nameData]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card-line mb-3'>
                        <canvas id="lineChart"></canvas>
                    </div>
                    <div className='card-line'>
                        <canvas id="polarChart"></canvas>
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
    );
}

export default PageName;

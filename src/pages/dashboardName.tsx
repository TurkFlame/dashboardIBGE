import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Api from '@/services/api'

function DashBoardName() {
    const [nameData, setNameData] = useState([]);
    const chartRef = useRef(null);
    const lineChartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = new Api();
                const nameDataResponse = await api.getNameRanking();
                console.log('Dados recebidos da API:', nameDataResponse);
                setNameData(nameDataResponse);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        if (nameData.length > 0) {
            const formatChartData = () => {
                const entries = nameData[0].res;
                const labels = entries.map(entry => entry.nome).reverse();
                const data = entries.map(entry => entry.frequencia).reverse();
                return { labels, data };
            };

            const chartData = formatChartData();

            if (chartRef.current || lineChartRef.current) {
                chartRef.current.destroy();
                lineChartRef.current.destroy();
            }

            const label = 'Frequência dos nomes por pessoa';

            // Gráfico de barra
            const ctx = document.getElementById('nameChart') as HTMLCanvasElement;
            chartRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: label,
                        data: chartData.data,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
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

            // Gráfico de linha
            const lineCtx = document.getElementById('lineChart') as HTMLCanvasElement;
            lineChartRef.current = new Chart(lineCtx, {
                type: 'line',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: label,
                        data: chartData.data, // Usando os mesmos dados
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
        }
    }, [nameData]);


    return (
        <div>
            <div className='card'>
                <canvas id="nameChart"></canvas>
            </div>
            <div className='card'>
                <canvas id="lineChart"></canvas>
            </div>
        </div>
    );
}

export default DashBoardName;

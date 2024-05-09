import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

function DashBoardName() {
    const [nameData, setNameData] = useState([]);
    const chartRef = useRef(null);
    const pieChartRef = useRef(null); // Referência para o gráfico de pizza

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes/bryan|elisa');
                const data = await response.json();
                setNameData(data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const formatChartData = () => {
            const labels = nameData[0].res.map(entry => entry.periodo);
            const data = nameData[0].res.map(entry => entry.frequencia);
            return { labels, data };
        };

        if (nameData.length > 0) {
            const chartData = formatChartData();

            // Gráfico de barra
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            const ctx = document.getElementById('nameChart') as HTMLCanvasElement;
            chartRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: 'Frequência do nome Bryan por período',
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

            // Gráfico de pizza em 3D
            if (pieChartRef.current) {
                pieChartRef.current.destroy();
            }

            const pieCtx = document.getElementById('pieChart') as HTMLCanvasElement;
            pieChartRef.current = new Chart(pieCtx, {
                type: 'pie',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: 'Frequência do nome Bryan por período',
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
                    plugins: {
                        legend: {
                            position: 'right'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed !== null) {
                                        const value = chartData.data[context.dataIndex];
                                        const percentage = ((value / chartData.data.reduce((a, b) => a + b, 0)) * 100).toFixed(2);
                                        label += value + ' (' + percentage + '%)';
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    layout: {
                        padding: 10
                    },
                    rotation: -0.5 * Math.PI,
                    animation: {
                        animateRotate: true,
                        animateScale: true
                    }
                }
            });
        }
    }, [nameData]);

    return (
        <div>
            <canvas id="nameChart" width="400" height="400"></canvas>
            <canvas id="pieChart" width="400" height="400"></canvas> {/* Adiciona um canvas para o gráfico de pizza */}
        </div>
    );
}

export default DashBoardName;

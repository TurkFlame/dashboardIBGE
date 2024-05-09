import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

function DashBoardName() {
    const [nameData, setNameData] = useState([]);
    const chartRef = useRef(null);
    const lineChartRef = useRef(null); // Referência para o gráfico de linha
    const scatterChartRef = useRef(null); // Referência para o gráfico de dispersão
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

            // Gráfico de linha
            if (lineChartRef.current) {
                lineChartRef.current.destroy();
            }

            const lineCtx = document.getElementById('lineChart') as HTMLCanvasElement;
            lineChartRef.current = new Chart(lineCtx, {
                type: 'line',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: 'Frequência do nome Bryan por período',
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

            // Gráfico de dispersão
            if (scatterChartRef.current) {
                scatterChartRef.current.destroy();
            }

            const scatterCtx = document.getElementById('scatterChart') as HTMLCanvasElement;
            scatterChartRef.current = new Chart(scatterCtx, {
                type: 'scatter',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: 'Frequência do nome Bryan por período',
                        data: chartData.data.map((value, index) => ({ x: index, y: value })),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        pointRadius: 5,
                        pointHoverRadius: 8
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom'
                        },
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
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <canvas id="nameChart" width="300" height="300" style={{ margin: '10px' }}></canvas>
            <canvas id="lineChart" width="300" height="300" style={{ margin: '10px' }}></canvas> {/* Adiciona um canvas para o gráfico de linha */}
            <canvas id="scatterChart" width="300" height="300" style={{ margin: '10px' }}></canvas> {/* Adiciona um canvas para o gráfico de dispersão */}
            <canvas id="pieChart" width="300" height="300" style={{ margin: '10px' }}></canvas> {/* Adiciona um canvas para o gráfico de pizza */}
        </div>
    );
}

export default DashBoardName;

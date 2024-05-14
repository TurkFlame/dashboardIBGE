import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Api from '@/services/api'

function DashBoardName() {
    let [nameData, setNameData] = useState([]);
    let chartRef = useRef(null);
    let lineChartRef = useRef(null);
    let scatterChartRef = useRef(null);
    let pieChartRef = useRef(null);
    let radarRef = useRef(null);
    let areaChart = useRef(null);
    let doughnutChart = useRef(null);
    let polarChart = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = new Api();
                const nameDataResponse = await api.getNameFrequency('bryan');
                setNameData(nameDataResponse);
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

            if (chartRef.current || lineChartRef.current || scatterChartRef.current || pieChartRef.current || radarRef.current || areaChart.current || doughnutChart.current || polarChart.current) {
                chartRef.current.destroy();
                lineChartRef.current.destroy();
                scatterChartRef.current.destroy();
                pieChartRef.current.destroy();
                radarRef.current.destroy();
                areaChart.current.destroy();
                doughnutChart.current.destroy();
                polarChart.current.destroy();
            }

            const label = 'Frequência do nome Bryan por período'

            //Gráfico de barra
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

            //Gráfico de disperção
            const scatterCtx = document.getElementById('scatterChart') as HTMLCanvasElement;
            scatterChartRef.current = new Chart(scatterCtx, {
                type: 'scatter',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: label,
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

            //Gráfico de pizza
            const pieCtx = document.getElementById('pieChart') as HTMLCanvasElement;
            pieChartRef.current = new Chart(pieCtx, {
                type: 'pie',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: label,
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
                                label: function (context) {
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

            // Novo gráfico de radar
            const radarCtx = document.getElementById('radarChart') as HTMLCanvasElement;
            radarRef.current = new Chart(radarCtx, {
                type: 'radar',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: label,
                        data: chartData.data,
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

            // Novo gráfico de área
            const areaCtx = document.getElementById('areaChart') as HTMLCanvasElement;
            areaChart.current = new Chart(areaCtx, {
                type: 'line',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: label,
                        data: chartData.data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
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

            // Novo gráfico de doughnut
            const doughnutCtx = document.getElementById('doughnutChart') as HTMLCanvasElement;
            doughnutChart.current = new Chart(doughnutCtx, {
                type: 'doughnut',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: label,
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
                        }
                    }
                }
            });

            // Novo gráfico polar
            const polarCtx = document.getElementById('polarChart') as HTMLCanvasElement;
            polarChart.current = new Chart(polarCtx, {
                type: 'polarArea',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: label,
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
        <div style={{ maxWidth: '250px', margin: '0 auto' }}>
            <canvas id="nameChart"></canvas>
            <canvas id="lineChart"></canvas>
            <canvas id="scatterChart"></canvas>
            <canvas id="pieChart"></canvas>
            <canvas id="radarChart"></canvas>
            <canvas id="areaChart"></canvas>
            <canvas id="doughnutChart"></canvas>
            <canvas id="polarChart"></canvas>
        </div>
    );
}

export default DashBoardName;

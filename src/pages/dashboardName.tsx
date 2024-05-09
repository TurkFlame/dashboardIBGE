import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

function DashBoardName() {
    const [nameData, setNameData] = useState([]);
    const chartRef = useRef(null); // Referência para o gráfico

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

            // Verifica se há um gráfico existente e o destrói
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
        }
    }, [nameData]);

    return (
        <div>
            <canvas id="nameChart" width="400" height="400"></canvas>
        </div>
    );
}

export default DashBoardName;

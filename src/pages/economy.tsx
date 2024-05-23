import React, { useEffect, useState, useRef } from "react";
import Api from "../services/api";
import Chart from "chart.js/auto";

export default function Economy() {
  const [totalPib, setTotalPib] = useState(null);
  const [pibPerCapita, setPibPerCapita] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const lineChartRef = useRef(null);

  const fetchData = async () => {
    const api = new Api();

    const pibData = await api.getTotalPIB();
    setTotalPib(pibData);

    const pibPerCapitaData = await api.getPIBPerCapita();
    setPibPerCapita(pibPerCapitaData);

    setIsLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const formatChartData = () => {
          const entries = totalPib[0].series;
          console.log(entries)
        const labels = entries.map((entry) => entry.pais.id);
        const data = entries.map((entry) => entry.serie[entry.serie.length - 1]['2022']);
        return { labels, data };
      };

      const chartData = formatChartData();

      const lineCtx = document.getElementById("lineChart") as HTMLCanvasElement;
      lineChartRef.current = new Chart(lineCtx, {
        type: "line",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: "Pib total",
              data: chartData.data,
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [isLoaded]);

  return (
    <div>
      {isLoaded && (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card-line mb-3">
                  <canvas id="lineChart"></canvas>
                </div>
                <div className="card-line radar-chart-container">
                  <canvas id="radarChart" className="radar-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

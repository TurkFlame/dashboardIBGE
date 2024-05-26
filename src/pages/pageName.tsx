import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import Api from "@/services/api";
import '../index.css';
function PageName() {
  const [nameData, setNameData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [nameFrequencyData, setNameFrequencyData] = useState([]);
  const [locations, setLocations] = useState([]);
  const [currentLocationName, setCurrentLocationName] =
    useState<string>("Guarapuava");
  const [currentName, setCurrentName] = useState<string>("Maria");
  const lineChartRef = useRef(null);
  const radarChartRef = useRef(null);

  const api = new Api();

  const fetchData = async () => {
    try {
      const nameDataResponse = await api.getNameRanking();
      setNameData(nameDataResponse);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  const fetchDataLocation = async ($id = "4109401") => {
    try {
      const locationDataResponse = await api.getNameFrequencyRegion($id);
      setLocationData(locationDataResponse);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  const fetchNameFrequency = async (name = "Maria") => {
    try {
      const frequencyName = await api.getNameFrequency(name);
      setNameFrequencyData(frequencyName);
      setCurrentName(name);
    } catch (error) {
      console.error(
        "Erro ao buscar dados da API de frequência de nomes:",
        error
      );
    }
  };

  const fetchRegions = async () => {
    try {
      if (locations.length < 1) {
        const locations_response = await api.getLocations();
        setLocations(locations_response);
      }
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  useEffect(() => {
    fetchRegions();
    fetchData();
    fetchDataLocation();
    fetchNameFrequency();
  }, []);

  useEffect(() => {
    if (nameData.length > 0) {
      const formatChartData = () => {
        const entries = nameData[0].res.slice(0, 20);
        const labels = entries.map((entry) => entry.nome);
        const data = entries.map((entry) => entry.frequencia);
        return { labels, data };
      };

      const chartData = formatChartData();

      if (lineChartRef.current) {
        lineChartRef.current.destroy();
      }

      const lineCtx = document.getElementById("lineChart") as HTMLCanvasElement;
      lineChartRef.current = new Chart(lineCtx, {
        type: "line",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: "Nomes populares no Brasil",
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
  }, [nameData]);

  useEffect(() => {
    if (locationData.length > 0) {
      const formatLocationData = () => {
        const entries = locationData[0].res.slice(0, 10);
        const labels = entries.map((entry) => entry.nome);
        const data = entries.map((entry) => entry.frequencia);
        return { labels, data };
      };

      const locationChartData = formatLocationData();

      if (radarChartRef.current) {
        radarChartRef.current.destroy();
      }

      const radarCtx = document.getElementById(
        "radarChart"
      ) as HTMLCanvasElement;
      radarChartRef.current = new Chart(radarCtx, {
        type: "radar",
        data: {
          labels: locationChartData.labels,
          datasets: [
            {
              label: `Nomes populares em ${currentLocationName}`,
              data: locationChartData.data,
              borderColor: "rgba(255, 206, 86, 1)",
              backgroundColor: "rgba(255, 206, 86, 0.2)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            r: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [locationData]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card-line mb-3">
            <canvas id="lineChart"></canvas>
          </div>
          <div className="card-line mb-3">
            <label>Escolha uma localidade:</label>
            <select
              defaultValue="Guarapuava"
              onChange={(e) => {
                let currentLocationNameInnerHtml = document.getElementById(
                  e.target.value
                ).innerHTML;
                setCurrentLocationName(currentLocationNameInnerHtml);
                fetchDataLocation(e.target.value);
              }}
              name="locations"
              id="locations_select"
            >
              {locations.map((element, index) => (
                <option
                  key={index}
                  id={element["municipio"]["id"]}
                  value={element["municipio"]["id"]}
                >
                  {element["municipio"]["nome"]}
                </option>
              ))}
            </select>
          </div>

          <div className="card-line radar-chart-container">
            <canvas id="radarChart" className="radar-chart"></canvas>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div>
            <div className="card-line-name mb-3">
              <table>
                <caption>
                  <b>Frequência do nome: </b>
                  <br />
                  <b>{currentName}</b>
                </caption>
              </table>
              <table>
                <thead>
                  <tr>
                    <th>Período</th>
                    <th>Frequência</th>
                  </tr>
                </thead>
                <tbody>
                  {nameFrequencyData.length > 0 &&
                    nameFrequencyData[0].res.map((entry, index) => (
                      <tr key={index}>
                        <td>{entry.periodo.replace(/\[|\]/g, "")}</td>
                        <td>{entry.frequencia}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <label>Escolha um nome:</label>
              <input type="text" id="name-input" />
              <button
                onClick={() =>
                  fetchNameFrequency(
                    (document.getElementById("name-input") as HTMLInputElement)
                      .value
                  )
                }
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default PageName;

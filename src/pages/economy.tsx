import React, { useEffect, useState, useRef } from "react";
import Api from "../services/api";
import Chart from "chart.js/auto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

export default function Economy() {
  const [totalPib, setTotalPib] = useState(null);
  const [pibPerCapita, setPibPerCapita] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedPibPerCapita, setIsLoadedPibPerCapita] = useState(false);
  const [isLoadedPibTotal, setIsLoadedPibTotal] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<string>("Brasil");
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  const countries = {
    AF: "Afeganistão",
    ZA: "Africa do Sul",
    AL: "Albânia",
    DE: "Alemanha",
    AD: "Andorra",
    AO: "Angola",
    AG: "Antígua e Barbuda",
    SA: "Arábia Saudita",
    DZ: "Argélia",
    AR: "Argentina",
    AM: "Armênia",
    AW: "Aruba",
    AU: "Austrália",
    AT: "Áustria",
    AZ: "Azerbaidjão",
    BS: "Bahamas",
    BD: "Bangladesh",
    BB: "Barbados",
    BH: "Bareine",
    BY: "Belarus",
    BE: "Bélgica",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermudas",
    BO: "Bolívia",
    BA: "Bósnia e Herzegóvina",
    BW: "Botswana",
    BR: "Brasil",
    BG: "Bulgária",
    BN: "Brunei Darussalam",
    BF: "Burkina Faso",
    BI: "Burundi",
    BT: "Butão",
    CV: "Cabo Verde",
    CM: "Camarões",
    KH: "Camboja",
    CA: "Canadá",
    QA: "Catar",
    KZ: "Cazaquistão",
    TD: "Chade",
    GW: "Guiné Bissau",
    GQ: "Guine Equatorial",
    HT: "Haiti",
    NL: "Holanda",
    HN: "Honduras",
    HK: "Hong-Kong",
    HU: "Hungria",
    YE: "Iêmen",
    IM: "Ilha do Homem",
    KY: "Ilhas Cayman",
    FO: "Ilhas Faroe",
    MP: "Ilhas Marianas do Norte",
    MH: "Ilhas Marshall",
    SB: "Ilhas Salomão",
    TC: "Ilhas Turks e Caicos",
    VI: "Ilhas Virgens (U.S.)",
    IN: "India",
    ID: "Indonésia",
    IR: "Irã",
    IQ: "Iraque",
    IE: "Irlanda",
    IS: "Islândia",
    IL: "Israel",
    IT: "Itália",
    JM: "Jamaica",
    JP: "Japão",
    PW: "Palau",
    PA: "Panamá",
    PG: "Papua Nova Guiné",
    PK: "Paquistão",
    PY: "Paraguai",
    PE: "Peru",
    PF: "Polinésia Francesa",
    PL: "Polônia",
    PR: "Porto Rico",
    PT: "Portugal",
    KE: "Quênia",
    KG: "Quirguistão",
    GB: "Reino Unido",
    CF: "República Centro Africana",
    KR: "República da Coréia",
    MK: "República da Macedônia",
    MD: "República da Moldova",
    CD: "República Dem. Do Congo",
    DO: "República Dominicana",
    CZ: "República Tcheca",
    TZ: "República Unida da Tanzânia",
    RO: "Romênia",
    RW: "Ruanda",
    AS: "Samoa Americana",
    WS: "Samoa Ocidental",
    LC: "Santa Lúcia",
    SM: "São Marino",
    VC: "São Vicente e Granadinas",
    SL: "Serra Leoa",
    SC: "Seychelles",
    SY: "Síria",
    LK: "Sri Lanka",
    SD: "Sudão",
  };

  const api = new Api();
  async function loadPibTotal() {
    setIsLoadedPibTotal(false);
    const pibData = await api.getTotalPIB();
    setTotalPib(pibData);
    setIsLoadedPibTotal(true);
  }

  async function loadPibPerCapita(sigla) {
    setIsLoadedPibPerCapita(false);
    const pibPerCapitaData = await api.getPIBPerCapita(sigla);
    setPibPerCapita(pibPerCapitaData);
    setIsLoadedPibPerCapita(true);
  }

  useEffect(() => {
    setIsLoaded(false);
    const loadData = async () => {
      setIsLoaded(true);
      await loadPibTotal();
      await loadPibPerCapita("BR");
    };

    loadData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (lineChartRef.current) {
        console.log(lineChartRef.current)
        lineChartRef.current.destroy();
      }
      const formatChartData = () => {
        const entries = totalPib[0].series;
        const labels = entries.map((entry) => entry.pais.id);
        const data = entries.map(
          (entry) => entry.serie[entry.serie.length - 1]["2022"]
        );
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
  }, [isLoadedPibTotal]);

  useEffect(() => {
    if (isLoaded) {
      if (barChartRef.current) {
        console.log(barChartRef.current);
        barChartRef.current.destroy();
      }
      const formatBarChartData = () => {
        const entries = pibPerCapita[0].series;
        const labels = entries[0].serie.map((entry) => Object.keys(entry)[0]);
        const data = entries[0].serie.map((entry) => Object.values(entry)[0]);
        return { labels, data };
      };

      const barChartData = formatBarChartData();
      const barCtx = document.getElementById("barChart") as HTMLCanvasElement;
      barChartRef.current = new Chart(barCtx, {
        type: "bar",
        data: {
          labels: barChartData.labels,
          datasets: [
            {
              label: `Econômia de: ${currentCountry}`,
              data: barChartData.data,
              barPercentage: 0.5,
              barThickness: 6,
              maxBarThickness: 8,
              minBarLength: 2,
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
  }, [isLoadedPibPerCapita]);

  return (
    <div>
      {isLoaded && (
        <>
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-6 mt-5">
                <div className="card-line mb-3 mt-5 sector-header">
                  <h5>PIB per capita por país</h5>
                  <FontAwesomeIcon icon={faMoneyBillTrendUp} className="icon" />
                </div>
                <div className="card-line ">
                  <canvas id="lineChart"></canvas>
                </div>
              </div>

              <div className="col-md-6 mt-5">
                <div className="card-line mb-3 mt-5 sector-header">
                  <h5>País selecionado: </h5>
                  <select
                    defaultValue={currentCountry}
                    onChange={(e) => {
                      let currentLocationName = document.getElementById(
                        e.target.value
                      );
                      setCurrentCountry(currentLocationName.innerHTML);
                      loadPibPerCapita(currentLocationName.id);
                    }}
                    name="locations"
                    id="locations_select"
                  >
                    {Object.keys(countries).map((element) => (
                      <option key={element} id={element} value={element}>
                        {countries[element]}
                      </option>
                    ))}
                  </select>

                  <FontAwesomeIcon icon={faEarthAmerica} className="icon" />

                </div>
                <div className="card-line bar-chart-container">
                  <canvas id="barChart" className="bar-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>

  );
}

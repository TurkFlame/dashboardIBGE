import React, { useEffect, useState, useRef } from "react";
import Api from "../services/api";
import Chart from "chart.js/auto";

export default function Economy() {
  const [totalPib, setTotalPib] = useState(null);
  const [pibPerCapita, setPibPerCapita] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<String>("Brasil");
  const lineChartRef = useRef(null);

  const countries = {
    AF: "Afeganistão",
    ZA: "Africa do Sul",
    AL: "Albânia",
    DE: "Alemanha",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antartica",
    AG: "Antígua e Barbuda",
    AN: "Antilhas Holandesas",
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
    BV: "Ilha Bouvet",
    IM: "Ilha do Homem",
    CX: "Ilha Natal",
    NF: "Ilha Norfalk",
    KY: "Ilhas Cayman",
    CC: "Ilhas Cocos",
    CK: "Ilhas Cook",
    GG: "Ilhas do Canal",
    FO: "Ilhas Faroe",
    HM: "Ilhas Heard e McDonald",
    FK: "Ilhas Malvinas",
    MP: "Ilhas Marianas do Norte",
    MH: "Ilhas Marshall",
    UM: "Ilhas Menores",
    SB: "Ilhas Salomão",
    TC: "Ilhas Turks e Caicos",
    VG: "Ilhas Virgens (Britânicas)",
    VI: "Ilhas Virgens (U.S.)",
    WF: "Ilhas Wallis e Futura",
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
    JE: "Jersey",
    PW: "Palau",
    PA: "Panamá",
    PG: "Papua Nova Guiné",
    PK: "Paquistão",
    PY: "Paraguai",
    PE: "Peru",
    PN: "Pitcairn",
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
    KP: "República Pop. Dem. da Coreia",
    CZ: "República Tcheca",
    TZ: "República Unida da Tanzânia",
    RE: "Reunião",
    RO: "Romênia",
    RW: "Ruanda",
    EH: "Saara Ocidental",
    PM: "Saint Pierre e Miquelon",
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

  const fetchData = async (sigla) => {

    setIsLoaded(false);
    const api = new Api();

    const pibData = await api.getTotalPIB();
    setTotalPib(pibData);

    const pibPerCapitaData = await api.getPIBPerCapita(sigla);
    setPibPerCapita(pibPerCapitaData);

    setIsLoaded(true);
  };

  useEffect(() => {
    fetchData("BR");
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const formatChartData = () => {
        const entries = totalPib[0].series;
        const labels = entries.map((entry) => entry.pais.id);
        const data = entries.map(
          (entry) => entry.serie[entry.serie.length - 1]["2022"]
        );
        return { labels, data };
      };

      const formatBarChartData = () => {
        console.log("pib:", pibPerCapita);
        const entries = pibPerCapita[0].series;
        const labels = entries[0].serie.map((entry) => Object.keys(entry)[0]);
        const data = entries[0].serie.map((entry) => Object.values(entry)[0]);
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

      const barChartData = formatBarChartData();
      const barCtx = document.getElementById("barChart") as HTMLCanvasElement;
      lineChartRef.current = new Chart(barCtx, {
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
                <select
                  onChange={(e) => {
                    let currentLocationName = document.getElementById(
                      e.target.value
                    );
                    setCurrentCountry(currentLocationName.innerHTML);
                    fetchData(currentLocationName.id);
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

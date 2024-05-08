import React, { useEffect, useState } from "react";
import Api from "../services/api";

export default function DashBoard() {
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    const apiInstance = new Api();
    apiInstance.getMeshByCountryId('BR')
  .then((dataSvg) => {
        // Certifique-se de que dataSvg é uma string SVG válida
        setSvg(dataSvg);
      })
  .catch((error) => {
        console.error("Erro = ", error);
      });
  }, []);

  return (
    <>
      {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />}
    </>
  )
}

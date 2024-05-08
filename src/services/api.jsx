export default class Api {
  constructor(filter) {
    this.filter = filter;
  }

  async getTotalPIB() {
    const filters = this.filter;
    const countries = filters.countries;
    const countriesStr = countries.join("|");
    const url = `https://servicodados.ibge.gov.br/api/v1/paises/${countriesStr}/indicadores/77827`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const indicador = data[0].indicador;
      const paises = data[0].series;
      return { indicador, paises };
    } catch (error) {
      console.error("Erro ao buscar dados PIB total:", error);
    }
  }

  async getPIBPerCapita() {
    const filters = this.filter;
    const countries = filters.countries;
    const countriesStr = countries.join("|");
    const url = `https://servicodados.ibge.gov.br/api/v1/paises/${countriesStr}/indicadores/77823`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const indicador = data[0].indicador;
      const paises = data[0].series;
      return { indicador, paises };
    } catch (error) {
      console.error("Erro ao buscar dados PIB per Capita:", error);
    }
  }

  async getNameRanking() {
    const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados PIB per Capita:", error);
    }
  }
}

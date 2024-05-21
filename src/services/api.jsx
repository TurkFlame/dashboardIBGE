export default class Api {
  // Exemplo de uso de this.filter, você precisará definir isso ou removê-lo se não for necessário
  filter = {
    countries: ["BR", "US", "CA"], // Exemplo de países
  };

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

  async getPIBPerCapita(countries) {
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
      console.error("Erro ao buscar dados da api de nomes:", error);
    }
  }

  async getNameFrequency(name) {
    const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados da api de nomes:", error);
    }
  }

  async getNameFrequencyRegion(location) {
    const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking?localidade=${location}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados da api de nomes:", error);
    }
  }

  async getLocations() {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/distritos`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados da api de nomes:", error);
    }
  }

  async getMeshByStateID(stateID, period = null) {
    const baseUrl = new URL(
      `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${stateID}`
    );
    const url = period
      ? baseUrl.searchParams.append("periodo", period).toString()
      : baseUrl.toString();

    const headers = {
      "Content-Type": "image/svg+xml",
    };

    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`Erro na chamada da API: ${response.statusText}`);
      }
      const data = await response.text();
      return data;
    } catch (error) {
      console.error("Erro ao buscar a malha:", error);
    }
  }

  async getMeshByCountryId(countryId, period = null) {
    const baseUrl = new URL(
      `https://servicodados.ibge.gov.br/api/v3/malhas/paises/${countryId}`
    );
    const url = period
      ? baseUrl.searchParams.append("periodo", period).toString()
      : baseUrl.toString();

    const headers = {
      "Content-Type": "image/svg+xml",
    };

    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`Erro na chamada da API: ${response.statusText}`);
      }
      const data = await response.text();
      return data;
    } catch (error) {
      console.error("Erro ao buscar a malha:", error);
    }
  }
}

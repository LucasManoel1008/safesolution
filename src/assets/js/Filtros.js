class Filtros {
  constructor({ categoria = "", data = "", precoMax = 5000, area = "" }) {
    this.categoria = categoria;
    this.data = data;
    this.precoMax = precoMax;
    this.area = area;
  }

  convertToDate(dataStr) {
    const [dia, mes, ano] = dataStr.split("/").map(Number);
    return new Date(ano, mes - 1, dia);
  }

  aplicar(servicos) {
    let filtrados = servicos.filter((servico) => {
      return (
          (this.categoria === "" || servico.categoria.toLowerCase() === this.categoria.toLowerCase()) &&
          (this.area === "" || servico.area.toLowerCase() === this.area.toLowerCase()) &&
          (this.precoMax > 0 ? servico.preco <= this.precoMax : true)
      );
    });

    if (this.data === "recentes") {
      filtrados.sort((a, b) => this.convertToDate(b.data) - this.convertToDate(a.data));
    } else if (this.data === "antigos") {
      filtrados.sort((a, b) => this.convertToDate(a.data) - this.convertToDate(b.data));
    }

    return filtrados;
  }
}

export default Filtros;

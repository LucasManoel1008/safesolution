class Filtros {
  constructor({ categoria = "", data = "", precoMax = 9999, area = "" }) {
    this.categoria = categoria;
    this.data = data;
    this.precoMax = precoMax;
    this.area = area;
  }

  aplicar(servicos) {
    return servicos.filter((servico) => {
      return (
        (this.categoria === "" || servico.categoria.toLowerCase() === this.categoria.toLowerCase()) &&
        (this.area === "" || servico.area.toLowerCase() === this.area.toLowerCase()) &&
        (this.precoMax > 0 ? servico.preco <= this.precoMax  : servico.preco) &&
        (this.data === "" ||
          (this.data === "recentes" && servico.data >= "2025-04-01") ||
          (this.data === "antigos" && servico.data < "2025-04-01"))
      );
    });
  }
}

export default Filtros;

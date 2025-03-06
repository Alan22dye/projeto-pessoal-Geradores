const gerarDataAleatoria = (inicio, fim) => {
    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);
    return new Date(dataInicio.getTime() + Math.random() * (dataFim.getTime() - dataInicio.getTime()));
  };
  module.exports = gerarDataAleatoria;
  
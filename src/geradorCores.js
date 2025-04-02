const gerarCorAleatoria = () => {
    const coresHex = ['#FF5733', '#33FF57', '#3357FF', '#F33FF5', '#F5F533'];
    return coresHex[Math.floor(Math.random() * coresHex.length)];
  };
  module.exports = gerarCorAleatoria;
  
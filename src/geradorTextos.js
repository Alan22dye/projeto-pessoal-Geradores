const gerarTextoAleatorio = () => {
    const palavras = ['exemplo', 'teste', 'aleatório', 'função', 'projeto'];
    return palavras[Math.floor(Math.random() * palavras.length)];
  };
  module.exports = gerarTextoAleatorio;
  
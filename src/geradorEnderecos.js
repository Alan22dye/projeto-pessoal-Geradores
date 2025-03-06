const gerarEnderecoFalso = () => {
    const ruas = ['Rua A', 'Rua B', 'Rua C', 'Rua D'];
    const numero = Math.floor(Math.random() * 1000);
    const cidade = 'Cidade Exemplo';
    const estado = 'Estado Exemplo';
    return `${ruas[Math.floor(Math.random() * ruas.length)]}, ${numero}, ${cidade} - ${estado}`;
  };
  module.exports = gerarEnderecoFalso;
  
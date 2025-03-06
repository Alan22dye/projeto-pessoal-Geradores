const gerarUsuarioFalso = () => {
    const nomes = ['João', 'Maria', 'Carlos', 'Ana'];
    const sobrenomes = ['Silva', 'Oliveira', 'Pereira', 'Costa'];
    const dominioEmail = '@exemplo.com';
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    return { nome, email: `${nome.toLowerCase()}.${sobrenome.toLowerCase()}${dominioEmail}` };
  };
  module.exports = gerarUsuarioFalso;
  
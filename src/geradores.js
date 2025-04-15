const gerarBooleanoAleatorio = () => Math.random() > 0.5;

const gerarCorAleatoria = () => {
  const coresHex = ['#FF5733', '#33FF57', '#3357FF', '#F33FF5', '#F5F533'];
  return coresHex[Math.floor(Math.random() * coresHex.length)];
};

const gerarDataAleatoria = (inicio, fim) => {
  const dataInicio = new Date(inicio);
  const dataFim = new Date(fim);
  return new Date(dataInicio.getTime() + Math.random() * (dataFim.getTime() - dataInicio.getTime()));
};

const gerarEmojiAleatorio = () => {
  const emojis = ['😊', '😂', '❤️', '👍', '🌍'];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

const gerarEnderecoFalso = () => {
  const ruas = ['Rua A', 'Rua B', 'RuaC', 'Rua D'];
  const numero = Math.floor(Math.random() * 1000) + 1;
  return `${ruas[Math.floor(Math.random() * ruas.length)]}, ${numero}`;
};

const gerarUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const gerarNumeroAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const gerarSenhaSegura = (tamanho = 12) => {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return senha;
};

const gerarTextoAleatorio = () => {
  const palavras = ['exemplo', 'teste', 'aleatório', 'função', 'projeto'];
  return palavras[Math.floor(Math.random() * palavras.length)];
};

const gerarUsuarioFalso = () => {
  const nomes = ['João', 'Maria', 'Carlos', 'Ana'];
  const sobrenomes = ['Silva', 'Oliveira', 'Pereira', 'Costa'];
  const dominioEmail = '@exemplo.com';
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  return { nome, email: `${nome.toLowerCase()}.${sobrenome.toLowerCase()}${dominioEmail}` };
};

module.exports = {
  gerarBooleanoAleatorio,
  gerarCorAleatoria,
  gerarDataAleatoria,
  gerarEmojiAleatorio,
  gerarEnderecoFalso,
  gerarUUID,
  gerarNumeroAleatorio,
  gerarSenhaSegura,
  gerarTextoAleatorio,
  gerarUsuarioFalso
};

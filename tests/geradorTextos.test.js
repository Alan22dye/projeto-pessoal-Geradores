const gerarTextoAleatorio = require('../src/geradorTextos');

test('gera um texto aleatório da lista de palavras', () => {
  const texto = gerarTextoAleatorio();
  expect(['exemplo', 'teste', 'aleatório', 'função', 'projeto']).toContain(texto);
});

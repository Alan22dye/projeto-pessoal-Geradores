const gerarCorAleatoria = require('../src/geradorCores');

test('gera uma cor hexadecimal aleatória', () => {
  const cor = gerarCorAleatoria();
  expect(cor).toMatch(/^#[0-9A-F]{6}$/i);  // Verifica se é um código hexadecimal válido
});

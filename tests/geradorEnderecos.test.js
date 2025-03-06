const gerarEnderecoFalso = require('../src/geradorEnderecos');

test('gera um endereço falso', () => {
  const endereco = gerarEnderecoFalso();
  expect(endereco).toMatch(/Rua [A-D]/);  // Verifica se o nome da rua está correto
  expect(endereco).toMatch(/\d+/);  // Verifica se há um número no endereço
});

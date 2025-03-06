const gerarSenhaSegura = require('../src/geradorSenhas');

test('gera senha com tamanho padrão de 12 caracteres', () => {
  const senha = gerarSenhaSegura();
  expect(senha).toHaveLength(12);
});

test('gera senha com caracteres especiais', () => {
  const senha = gerarSenhaSegura();
  expect(senha).toMatch(/[!@#$%^&*(),.?":{}|<>]/);  // Verifica se tem caracteres especiais
});

const gerarSenhaSegura = require('../src/geradorSenhas');

test('gera senha segura com 12 caracteres e ao menos um caractere especial', () => {
  const senha = gerarSenhaSegura();
  
  expect(senha).toHaveLength(12);
  expect(senha).toMatch(/[!@#$%^&*(),.?":{}|<>]/);  // Verifica se tem caracteres especiais
});

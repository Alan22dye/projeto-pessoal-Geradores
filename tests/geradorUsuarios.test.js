const gerarUsuarioFalso = require('../src/geradorUsuarios');

test('gera um nome e email de usuário falso', () => {
  const usuario = gerarUsuarioFalso();
  expect(usuario.nome).toBeTruthy();
  expect(usuario.email).toMatch(/@exemplo\.com$/);
});

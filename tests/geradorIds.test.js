const gerarUUID = require('../src/geradorIds');

test('gera um UUID válido', () => {
  const uuid = gerarUUID();
  expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);  // Verifica o formato UUID
});

const gerarNumeroAleatorio = require('../src/geradorNumeros');

test('gera número aleatório dentro do intervalo', () => {
  const numero = gerarNumeroAleatorio(1, 10);
  expect(numero).toBeGreaterThanOrEqual(1);
  expect(numero).toBeLessThanOrEqual(10);
});

test('gera número aleatório dentro do intervalo de 0 a 100', () => {
  const numero = gerarNumeroAleatorio(0, 100);
  expect(numero).toBeGreaterThanOrEqual(0);
  expect(numero).toBeLessThanOrEqual(100);
});

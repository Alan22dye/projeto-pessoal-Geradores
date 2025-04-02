const gerarNumeroAleatorio = require('../src/geradorNumeros');

test('gera número aleatório dentro de um intervalo específico', () => {
  const min = 1;
  const max = 100;
  const numero = gerarNumeroAleatorio(min, max);
  
  expect(numero).toBeGreaterThanOrEqual(min);
  expect(numero).toBeLessThanOrEqual(max);
});

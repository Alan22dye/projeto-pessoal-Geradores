const gerarDataAleatoria = require('../src/geradorDatas');

test('gera uma data dentro do intervalo de 2020 a 2025', () => {
  const data = gerarDataAleatoria('2020-01-01', '2025-01-01');
  
  // Comparando usando getTime() para obter o valor numérico das datas
  expect(data.getTime()).toBeGreaterThanOrEqual(new Date('2020-01-01').getTime());
  expect(data.getTime()).toBeLessThanOrEqual(new Date('2025-01-01').getTime());
});

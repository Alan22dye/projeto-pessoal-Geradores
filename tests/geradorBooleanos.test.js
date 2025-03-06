const gerarBooleanoAleatorio = require('../src/geradorBooleanos');

test('gera valor booleano aleatório', () => {
  const booleano = gerarBooleanoAleatorio();
  expect([true, false]).toContain(booleano);  // Verifica se o valor gerado é true ou false
});

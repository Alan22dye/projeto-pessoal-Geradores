const {
    gerarBooleanoAleatorio,
    gerarCorAleatoria,
    gerarDataAleatoria,
    gerarEmojiAleatorio,
    gerarEnderecoFalso,
    gerarUUID,
    gerarNumeroAleatorio,
    gerarSenhaSegura,
    gerarTextoAleatorio,
    gerarUsuarioFalso
  } = require('../src/geradores');
  
  test('gera valor booleano aleatório', () => {
    const booleano = gerarBooleanoAleatorio();
    expect([true, false]).toContain(booleano);
  });
  
  test('gera uma cor hexadecimal aleatória', () => {
    const cor = gerarCorAleatoria();
    expect(cor).toMatch(/^#[0-9A-F]{6}$/i);
  });
  
  test('gera uma data dentro do intervalo de 2020 a 2025', () => {
    const data = gerarDataAleatoria('2020-01-01', '2025-01-01');
    expect(data.getTime()).toBeGreaterThanOrEqual(new Date('2020-01-01').getTime());
    expect(data.getTime()).toBeLessThanOrEqual(new Date('2025-01-01').getTime());
  });
  
  test('gera um emoji aleatório', () => {
    const emoji = gerarEmojiAleatorio();
    expect(['😊', '😂', '❤️', '👍', '🌍']).toContain(emoji);
  });
  
  test('gera um endereço falso', () => {
    const endereco = gerarEnderecoFalso();
    expect(endereco).toMatch(/Rua [A-D]/);
    expect(endereco).toMatch(/\d+/);
  });
  
  test('gera um UUID válido', () => {
    const uuid = gerarUUID();
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  });
  
  test('gera número aleatório dentro de um intervalo específico', () => {
    const numero = gerarNumeroAleatorio(1, 100);
    expect(numero).toBeGreaterThanOrEqual(1);
    expect(numero).toBeLessThanOrEqual(100);
  });
  
  test('gera senha segura com 12 caracteres e ao menos um caractere especial', () => {
    const senha = gerarSenhaSegura();
    expect(senha).toHaveLength(12);
    expect(senha).toMatch(/[!@#$%^&*(),.?":{}|<>]/);
  });
  
  test('gera um texto aleatório da lista de palavras', () => {
    const texto = gerarTextoAleatorio();
    expect(['exemplo', 'teste', 'aleatório', 'função', 'projeto']).toContain(texto);
  });
  
  test('gera um nome e email de usuário falso', () => {
    const usuario = gerarUsuarioFalso();
    expect(usuario.nome).toBeTruthy();
    expect(usuario.email).toMatch(/@exemplo\.com$/);
  });
  
const gerarEmojiAleatorio = require('../src/geradorEmojis');

test('gera um emoji aleatório', () => {
  const emoji = gerarEmojiAleatorio();
  expect(['😊', '😂', '❤️', '👍', '🌍']).toContain(emoji); 
});

const gerarEmojiAleatorio = () => {
    const emojis = ['😊', '😂', '❤️', '👍', '🌍'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };
  module.exports = gerarEmojiAleatorio;
  
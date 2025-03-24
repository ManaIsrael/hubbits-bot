export const exampleCallback = (bot, query) => {
    bot.answerCallbackQuery(query.id, 'This is a callback response!');
  };
  
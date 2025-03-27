export const exampleCallback = (bot, query) => {
  const data = query.data; // Extract the callback data
  if (data === 'option_1') {
    bot.sendMessage(query.message.chat.id, 'You chose Option 1!');
  } else if (data === 'option_2') {
    bot.sendMessage(query.message.chat.id, 'You chose Option 2!');
  }
  bot.answerCallbackQuery(query.id, { text: 'Response received!' });
};

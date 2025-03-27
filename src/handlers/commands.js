export const start = (bot, msg) => {
  bot.sendMessage(msg.chat.id, 'Hey! This is the /start command.');
};

export const menu = (bot, msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Option 1', callback_data: 'option_1' }],
        [{ text: 'Option 2', callback_data: 'option_2' }]
      ]
    }
  };
  bot.sendMessage(chatId, 'Choose an option:', options);
};

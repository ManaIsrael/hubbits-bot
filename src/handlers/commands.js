export const start = (bot, msg) => {
  const chatId = msg.chat.id;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Visit Website", url: "https://hub-bits.com" }],
        [{ text: "Get Help", callback_data: "help" }],
      ],
    },
  };

  bot.sendMessage(chatId, "Welcome! Choose an option below:", options);
};

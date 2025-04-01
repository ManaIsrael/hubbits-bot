export const exampleCallback = (bot, query) => { 
  if (query.data === "help") {
    bot.sendMessage(query.message.chat.id, "Here is some help text!");
  }

  bot.answerCallbackQuery(query.id);
};

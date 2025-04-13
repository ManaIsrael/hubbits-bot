export const start = (bot, msg) => {
  const chatId = msg.chat.id;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Visit Website", url: "https://hub-bits.com" }],
        [{ text: "📍 Location", callback_data: "location" }],
        [{ text: "💰 Pricing", callback_data: "pricing" }],
        [{ text: "🏢 Facilities", callback_data: "facilities" }],
        [{ text: "🎟 Membership Plans", callback_data: "membership" }],
        [{ text: "📞 Contact Info", callback_data: "contact" }],
        [{ text: "❓ FAQs", callback_data: "faqs" }],
        [{ text: "Operating Hours", callback_data: "hours" }],
      ],
    },
  };

  bot.sendMessage(chatId, "Welcome to HubBits Support! Choose an option below:", options);
};

import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';

// Initialize bot
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome to the bot! How can I assist you today?');
});

console.log('Bot is running...');

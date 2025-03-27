import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';
import { start, menu } from './handlers/commands.js';
import { exampleCallback } from './handlers/callbacks.js';

// Initialize bot
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

// Commands
bot.onText(/\/start/, (msg) => start(bot, msg));
bot.onText(/\/menu/, (msg) => menu(bot, msg));

// Callbacks
bot.on('callback_query', (query) => exampleCallback(bot, query));

console.log('Bot is running...');

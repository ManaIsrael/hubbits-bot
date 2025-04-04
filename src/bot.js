import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';
import { start } from './handlers/commands.js';
import { exampleCallback } from './handlers/callbacks.js';

// Initialize bot
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// Commands
bot.onText(/\/start/, (msg) => start(bot, msg));

// Callbacks
bot.on('callback_query', (query) => exampleCallback(bot, query));

console.log('Bot is running...');

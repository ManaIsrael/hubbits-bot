import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import TelegramBot from 'node-telegram-bot-api';

const app = express();
app.use(bodyParser.json());

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
bot.setWebHook(`${process.env.WEBHOOK_URL}`);

app.post('/webhook', (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.listen(process.env.PORT, () => {
  console.log(`Webhook server is running on port ${process.env.PORT}`);
});

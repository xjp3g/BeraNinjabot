// bot.js
const { Telegraf } = require('telegraf');

const bot = new Telegraf('7361397352:AAESQea-WUzQkRqilkF71veQnWRp_p5AE68');

bot.start((ctx) => ctx.reply('Welcome to Bera Ninja bot!'));

bot.launch();

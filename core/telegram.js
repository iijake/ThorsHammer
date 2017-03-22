'use strict';

const Tg = require('node-telegram-bot-api');
const config = require('./config');
const moment = require('moment');
const rangi = require('rangi');

const bot = new Tg(config.BOT_TOKEN, {
    polling: true
});

bot.getMe().then(me => {
    console.log(rangi.cyan(`Bot Is Running => ${me.username}`));
    bot.sendMessage(config.SUDO, `Bot Started!\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`, {parse_mode: 'Markdown'});
});

module.exports = bot;

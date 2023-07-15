const TeleBot = require('telebot');
const db =  require("./Toolkits/dataBase.js");
const {botInfo} = require('./config.js');
const bot = new TeleBot(botInfo);
const permission = require("./Command/permission.js");
const bind = require("./Command/bind.js");
const start = require("./Command/start.js");

start.plugin(bot)
permission.plugin(bot);
bind.plugin(bot);
bot.on('callbackQuery', (msg) => {

    console.log('callbackQuery data:', msg.data);
	var callbackFn = require("./Command/"+msg.data+".js");
	callbackFn.plugin(bot,msg);
	bot.answerCallbackQuery(msg.id);
});
process.on('unhandledRejection', (reason, p) => {
  console.log('Promise: ', p, 'Reason: ', reason)
})
module.exports = {
	bot
}

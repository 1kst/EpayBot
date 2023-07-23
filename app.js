const {botInfo} = require('./config.js');
const {allowedUser} = require("./Toolkits/allowedUser.js");
const Telebot = require("./bot.js");
Telebot.bot.start();
const {notifyJob,settleJob} = require("./notify.js");
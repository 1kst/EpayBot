module.exports = {
	plugin(bot){
		bot.on('/start', msg => {
			//check user exists
		    const replyMarkup = bot.inlineKeyboard([
		        [
		            bot.inlineButton('账户信息', {callback: 'account'}),
					bot.inlineButton('解除绑定', {callback: 'unbind'}),
		        ],
		        [
		            bot.inlineButton('开启通知', {callback: 'openNotify'}),
					bot.inlineButton('关闭通知', {callback: 'closeNotify'})
		        ]
		    ]);
		    return bot.sendMessage(msg.from.id, '欢迎使用易支付机器人', {replyMarkup});
		});
	}
}
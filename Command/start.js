module.exports = {
	plugin(bot){
		bot.on('/start', msg => {
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
			//禁止修改反馈群信息以及免责声明
		    return bot.sendMessage(msg.from.id, 
			"欢迎使用易支付机器人\n此机器人反馈群 @TalkToJshi!\n机器人为开源项目仅供学习交流使用，与使用的支付无关。",
			{replyMarkup});
		});
	}
}
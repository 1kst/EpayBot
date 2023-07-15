const db =  require("../Toolkits/dataBase.js");
const permission = require("./permission.js");
module.exports = {
	plugin(bot,msg){
		db("UPDATE `pay_user` SET `phone` = '' WHERE (`phone` = '?')",[msg.from.id])
		.then(()=>{
			permission.allowedUser
			bot.sendMessage(msg.from.id, '解绑成功!');
		})
		.catch(()=>{
			bot.sendMessage(msg.from.id, '解绑失败!可能未绑定或者数据库错误！');
		});
		
	}
}
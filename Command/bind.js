const db =  require("../Toolkits/dataBase.js");
const permission = require("./permission.js");
module.exports = {
	plugin(bot){
		bot.on(/^\/bind (.+) (.+)$/, (msg, props) => {
			db("SELECT * FROM pay_user WHERE `uid`=? AND `key`=?"
			,[ props.match[1], props.match[2]])
			.then((r)=>{
				if(r[0] == undefined){
					bot.sendMessage(msg.from.id, "商户号或者密钥错误，请重新绑定", { replyToMessage: msg.message_id });
				}else{
					db("UPDATE `pay_user` SET `phone` = ? WHERE (`uid` = ?)",
					[msg.from.id,props.match[1]])
					.then((r)=>{
						permission.allowedUser.push(msg.from.id);
						console.log("绑定成功")
						bot.sendMessage(msg.from.id, "绑定成功", { replyToMessage: msg.message_id })
					})
					.catch((e)=>{
						bot.sendMessage(msg.from.id, "绑定失败"+e, { replyToMessage: msg.message_id })
						console.log(e)
					})
				}
			})
		});
	}
}
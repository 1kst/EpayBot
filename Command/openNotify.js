const db =  require("../Toolkits/dataBase.js");
module.exports = {
	plugin(bot,msg){
		let userId = msg.from.id;
		db("UPDATE `pay_user` SET `cert` = '1' WHERE (`phone` = ?);",[userId])
		.then((r)=>{
			bot.sendMessage(msg.from.id, "开启成功");
		})
	}
}
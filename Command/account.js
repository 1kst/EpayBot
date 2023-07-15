const db =  require("../Toolkits/dataBase.js");
module.exports = {
	plugin(bot,msg){
		let userId = msg.from.id;
		db("SELECT * FROM pay_user WHERE phone=?",[userId])
		.then((r)=>{
			let context = "商户号:"+r[0].uid+"\n余额:"+r[0].money+"\n结算账户"+r[0].account;
			bot.sendMessage(msg.from.id, context);
		})
	}
}
const db =  require("../Toolkits/dataBase.js");
const allowedUser = require("../Toolkits/allowedUser.js");
module.exports = {
	allowedUser,
    plugin(bot) {
        bot.mod('message', (data) => {		
			let userId = data.message.from.id;
			if(allowedUser.includes(""+userId)){
				return data;
			}
            if (data.message.chat.type == 'private' &&data.message.text.split(" ")[0] != "/bind"){
				db("SELECT * FROM pay_user WHERE `phone`=?",[userId])
				.then((r)=>{
					console.log(r[0])
					if(r[0] == undefined){
						data.message = {};
						bot.sendMessage(userId, "请使用/bind 商户号 密钥 绑定");
					}else{
						allowedUser.push(userId);
					}
				})
				.finally(()=>{
					console.log(data.message)
					return data;
				})
            }else{
				return data;	
			}
            
        });
    }
};
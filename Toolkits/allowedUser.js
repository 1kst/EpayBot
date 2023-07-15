const db = require("./dataBase.js")
const allowedUser = [];
db("SELECT phone FROM pay_user WHERE length(phone)>0")
.then((users)=>{
	users.forEach((user)=>{
		allowedUser.push(user.phone);
	})
	console.log("绑定用户已收集完成！")
})
module.exports = allowedUser;
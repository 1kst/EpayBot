const db =  require("./Toolkits/dataBase.js");
const moment = require('moment');
const schedule = require('node-schedule');
const Telebot = require("./bot.js");

// 启动任务
let job = schedule.scheduleJob('* * * * * *', () => {
  console.log("订单通知任务"+new Date());
  let tgUsers =  new Map();
  db("SELECT uid,phone FROM pay_user WHERE length(phone)>0")
  .then((users)=>{
  	users.forEach((user)=>{
  		tgUsers.set(user.uid,user.phone);
  	})
  })
  let today = moment();
  let pretime = today.subtract(5, 'days').format('YYYY-MM-DD HH:mm:ss');
  db("SELECT * FROM pay_order WHERE endtime >= ? AND param is NULL ORDER BY trade_no DESC Limit 1"
  ,[pretime])
  .then((r)=>{
  	if(r.length == 0){
  		console.log("没有异步通知任务")
  		return;
  	}
  	let tradeGroup = new Array();
  	r.forEach((s)=>{
  		tradeGroup.push(s.trade_no);
  		if(tgUsers.has(s.uid)){
			Telebot.bot.sendMessage(tgUsers.get(s.uid),"到账提醒！\n金额："+s.money+"\n订单号:"+s.trade_no);
  			// console.log("到账提醒！\n金额："+s.money+"\n订单号:"+s.trade_no,tgUsers.get(s.uid))
  		}
  	})
  	db("UPDATE `pay_order` SET `param` = '1' WHERE trade_no in ("+tradeGroup+")")
  	.catch((e)=>{
  		console.log(e)
  	})
  })
})
module.exports = job;



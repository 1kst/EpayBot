exports.dbInfo = {
  host	: 'localhost',//数据库地址
  port	: '3306',//数据库端口
  user	: 'root',//用户名
  password : 'root',//密码
  database : 'mydb'//数据库名
};
//通知在以下时间内的订单 示例为通知自现在时间开始1h以前的订单
exports.notify = {
	count:10,//每次处理的订单数
	time:"1",//时间
	timeUnit:"hours",//时间单位 可填seconds minutes hours days months years
}
exports.botInfo ={
    token: "", // 机器人密钥（向@bot_father申请）
	//轮询模式，无需域名
    polling: {
        interval: 1000, // 可选，多长时间更新一次消息 (单位毫秒）。 数字越小机器人响应速度越快，建议500以上。
        timeout: 0, // 可选， 更新消息超市时间 (0 - 短轮询).
        limit: 100, // 可选， 限制检索更新的数量。
        retryTimeout: 5000, // 可选， 重新连接超时（单位毫秒毫秒）。
        proxy: 'http://:@localhost:7890' ,// 可选， 要使用的HTTP代理。
		//如果机器在国外此处请留空。
		//如果机器在国内请自行寻找代理节点并填入，如上为使用clash进行代理的配置。
    },
	usePlugins: ['askUser','regExpMessage','shortReply'], // 可选。使用pluginFolder中的用户插件。
    allowedUpdates: [], // 可选。列出希望机器人接收的更新类型。指定一个空列表以接收所有更新。
};
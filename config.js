exports.dbInfo = {
  host	: 'localhost',//数据库地址
  port	: '3306',//数据库端口
  user	: 'root',//用户名
  password : 'root',//密码
  database : 'mydb'//数据库名
};
//通知在以下时间内的订单 示例为通知自现在时间开始1h以前的订单，并且每秒检查一次
exports.notify = {
	notifyTime:"* * * * * *",//通知运行间隔，crontab格式，默认1s检查一次，不懂勿改。
	count:10,//每次处理的订单数
	time:"1",//处理的订单的时间范围
	timeUnit:"hours",///处理的订单的时间单位 可填seconds minutes hours days months years
	settleTime:"1 20 * * * *",// 每小时的第20分钟的第1秒执行一次检查结算任务 
}
exports.botInfo ={
    token: "", // 机器人密钥（向@bot_father申请）
	//轮询模式，无需域名
    polling: {
        interval: 600, // 可选，多长时间更新一次消息 (单位毫秒）。 数字越小机器人响应速度越快，建议500以上。
        timeout: 0, // 可选， 更新消息超时时间 (0 - 短轮询).
        limit: 100, // 可选， 限制检索更新的数量。
        retryTimeout: 5000, // 可选， 重新连接超时（单位毫秒毫秒）。
        proxy: '' ,// 可选， 要使用的HTTP代理。
		//如果机器在国外此处请留空。
		//如果机器在国内请自行寻找代理节点并填入，http://:@localhost:7890 为使用clash进行代理的配置。
    },
	usePlugins: ['askUser','regExpMessage','shortReply'], // 可选。使用pluginFolder中的用户插件。
    allowedUpdates: [], // 可选。列出希望机器人接收的更新类型。指定一个空列表以接收所有更新。
};
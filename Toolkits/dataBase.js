let mysql = require('mysql');
let {dbInfo} = require('../config.js');
let connection;

function handleError (err) {
  if (err) {
    // 如果是连接断开，自动重新连接
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connect();
	  console.log("mysql断线重连");
    } else {
      console.error(err.stack || err);
    }
  }
}

// 连接数据库
function connect () {
  connection = mysql.createConnection(dbInfo);
  connection.connect(handleError);
  connection.on('error', handleError);
}
connect();

module.exports = (sql,params)=>{
	return new Promise((resolve,reject)=>{
		try{
			connection.query(sql,params,(err,res)=>{
			if(err){
				reject(err);
			}else{
				resolve(res);
			}
		})
		}catch(e){
			reject(e);
		}

	});
};
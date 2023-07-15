## EpayBot-Nodejs

为你的彩虹易支付增添电报机器人通知功能

无需修改易支付数据库。

代码开源，没有授权及各种费用，随意查看使用和下载。

## 使用方式

/start 呼出主菜单

<img src="README.assets/image-20230715160343729.png" alt="image-20230715160343729" style="zoom:50%;" />

/bind 商户号 密钥 绑定账户

<img src="README.assets/image-20230715160331587.png" alt="image-20230715160331587" style="zoom:50%;" />

## 使用删库塔安装

1. 从软件商店中安装PM2管理器

   ![](README.assets/image-20230715094358085.png)

2. 将代码下载到本机下，教程以/www/wwwroot/epaybot目录为例

   并填写config.js里的配置，其中数据库为易支付的数据库。

   **==请认真阅读config.js里面的注释==**

   ![./Images/20230715094456314](README.assets/image-20230715094456314.png)

3. 打开PM2管理器，找到Node版本，切换到18以上版本

   ![./Images/20230715094626863](README.assets/image-20230715094626863.png)

4. 然后点击左侧项目列表，点击添加项目，然后点击提交。

   <img src="README.assets/image-20230715094843060.png" alt="./Images/20230715094843060" style="zoom:50%;" />

5. 提交成功后项目会一直重启，这是因为没有安装模块。点击右侧的停止，停止运行项目。

   ![README.assets/20230715094922392](README.assets/image-20230715094922392.png)

6. 然后点击模块下的管理，选择一键安装依赖。安装完成后如下图所示。

   ![image-20230715164409666](README.assets/image-20230715164409666.png)

   ![README.assets/20230715095150570](README.assets/image-20230715095150570.png)

7. 最后点击启动，项目即可正常启动。


## 获得帮助

https://t.me/TalkToJshi

反馈bug建议直接提交issure，不提供无偿安装搭建服务，教程已经写的很清楚了。

### 赞助

- 可以来这里看看有没有需要的易支付扩展

  [久世凝眸的店铺- 给钱就卖！ (shop.eriver.top)](http://shop.eriver.top/)

- 老婆开的机场

  [rookiecloud](https://rookiecloud.day/#/register?code=3XFHHAJL) 

### 错误处理

1. 以下为数据库链接错误，请检查config.js里的数据库配置

   ```shell
   2023-07-15T16:53:40:   code: 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR',
   2023-07-15T16:53:40:   fatal: false
   2023-07-15T16:53:40: }
   2023-07-15T16:53:41: Error: Cannot enqueue Query after fatal error.
   2023-07-15T16:53:41:     at Protocol._validateEnqueue (/www/wwwroot/epaybot/node_modules/mysql/lib/protocol/Protocol.js:212:16)
   2023-07-15T16:53:41:     at Protocol._enqueue (/www/wwwroot/epaybot/node_modules/mysql/lib/protocol/Protocol.js:138:13)
   2023-07-15T16:53:41:     at Connection.query (/www/wwwroot/epaybot/node_modules/mysql/lib/Connection.js:198:25)
   2023-07-15T16:53:41:     at /www/wwwroot/epaybot/Toolkits/dataBase.js:28:15
   2023-07-15T16:53:41:     at new Promise (<anonymous>)
   2023-07-15T16:53:41:     at module.exports (/www/wwwroot/epaybot/Toolkits/dataBase.js:26:9)
   2023-07-15T16:53:41:     at Job.job (/www/wwwroot/epaybot/notify.js:11:3)
   2023-07-15T16:53:41:     at Job.invoke (/www/wwwroot/epaybot/node_modules/node-schedule/lib/Job.js:171:15)
   2023-07-15T16:53:41:     at /www/wwwroot/epaybot/node_modules/node-schedule/lib/Invocation.js:268:28
   2023-07-15T16:53:41:     at Timeout._onTimeout (/www/wwwroot/epaybot/node_modules/node-schedule/lib/
   ```

2. 开启了代理，修改config.js里的proxy

   <img src="README.assets/image-20230715170829685.png" alt="image-20230715170829685" style="zoom:33%;" />

   ```shell
   2023-07-15T16:57:02:   code: 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR',
   2023-07-15T16:57:02:   fatal: false
   2023-07-15T16:57:02: }
   2023-07-15T16:57:02: [bot.error.webhook] Error: tunneling socket could not be established, cause=connect ECONNREFUSED 127.0.0.1:7890
   2023-07-15T16:57:02:     at ClientRequest.onError (/www/wwwroot/epaybot/node_modules/tunnel-agent/index.js:177:17)
   2023-07-15T16:57:02:     at Object.onceWrapper (events.js:300:26)
   2023-07-15T16:57:02:     at ClientRequest.emit (events.js:210:5)
   2023-07-15T16:57:02:     at Socket.socketErrorListener (_http_client.js:406:9)
   2023-07-15T16:57:02:     at Socket.emit (events.js:210:5)
   2023-07-15T16:57:02:     at emitErrorNT (internal/streams/destroy.js:92:8)
   2023-07-15T16:57:02:     at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)
   2023-07-15T16:57:02:     at processTicksAndRejections (internal/process/task_queues.js:80:21) {
   2023-07-15T16:57:02:   c
   ```

   


## 使用删库塔安装

1. 从软件商店中安装PM2管理器

   ![](README.assets/image-20230715094358085.png)

2. 将代码下载到本机下，教程以/www/wwwroot/epaybot目录为例

   并填写config.js里的配置，其中数据库为易支付的数据库。

   ![./Images/20230715094456314](README.assets/image-20230715094456314.png)

3. 打开PM2管理器，找到Node版本，切换到18以上版本

   ![./Images/20230715094626863](README.assets/image-20230715094626863.png)

4. 然后点击左侧项目列表，点击添加项目，然后点击提交。

   <img src="README.assets/image-20230715094843060.png" alt="./Images/20230715094843060" style="zoom:50%;" />

5. 提交成功后项目会一直重启，这是因为没有安装模块。点击右侧的停止，停止运行项目。

   ![README.assets/20230715094922392](README.assets/image-20230715094922392.png)

6. 然后点击模块下的管理，选择一键安装依赖。安装完成后如下图所示。

   ![README.assets/20230715095150570](README.assets/image-20230715095150570.png)

7. 最后点击启动，项目即可正常启动。
   
   
   
   
   


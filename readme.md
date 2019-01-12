#### 版本：

 * 正式版v1

   

#### 项目描述：

 * 本项目为万宝龙商品出售网，用户可以在本网站选取商品，支付，快递；

 * github地址：https://github.com/yibaguai/js_project.git；

 * 项目负责人：代佳宏；

   

#### 项目模块：

 * 功能模块：首页index，登录login，注册register，商品列表new，商品详情details，购物车basket；

 * 渲染页面：头部header，尾部footer，商品列表item，轮播图imgtab；

 * 商品详情页通过点击商品id，获取商品xinx，渲染页面；

 * 登录，注册功能通过php和数据库实现账号的验证，注册，登录； 

   

#### 项目功能：

 * 登录：通过头部“登录/注册”按钮跳转；

 * 注册：登录页面，“创建账户”按钮跳转；

 * 商品列表：尾部，“查看所有新品”按钮跳转；

 * 商品详情：新品页，点击商品图片跳转；

 * 加入购物车

   

#### 运行方式：

 * 下载整个项目，在项目根目录使用git命令  "gulp" ,然后在浏览器地址栏输入 localhost：2001运行项目；

   

#### 接口：

* 登录注册接口都在WAMP5的Apache服务器下 
  * 注册接口：http://localhost/js_project/api/v1/register.php；
  * 登录接口：http://localhost/js_project/api/v1/login.php；
* 商品信息使用rap2模拟接口：
  * 列表页商品信息接口：http://rap2api.taobao.org/app/mock/123513/new-list；




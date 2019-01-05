define(["jquery"], () => {
	class Header{
		constructor(){
			this.init();
		}
		//初始header界面
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("header").load("/html/components/header.html", () => {
					resolve();
				})
			}).then(() => {

			})
		}
		//汉堡菜单点击,弹出导航栏
		nav(){

		}
		//搜索按钮，点击弹出搜索界面
		search(){

		}
	/*	//登录按钮，点击跳转到登录页面
		login(){

		}
		//收藏按钮，点击跳转到收藏页
		collect(){

		}
		//购物车按钮，点击跳转到购物车页面
		shoppingCart(){

		}*/
	}
	return new Header();
})
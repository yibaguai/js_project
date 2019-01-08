//购物车
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "header", "footer"], () => {
		class Basket{
			constructor(){
				this.init();
			}
			init(){
				$(".basket-list").html(
						`<p>你的购物车是空的</p>
						<img src="/static/images/index-img/empty-bag-img.png" alt="">
						<a href="/index.html">立即开始购物</a>`
					);
			}
		}
		return new Basket();
	})
})
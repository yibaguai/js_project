//愿望页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "header", "footer"], () => {
		class Wishlist{
			constructor(){
				this.init();
			}
			init(){
				$(".wishlist-list").html(
						`<p>你的收藏是空的</p>
						<img src="/static/images/index-img/empty-bag-img.png" alt="">
						<a href="/index.html">立即开始收藏</a>`
				);
			}
		}
		return new Wishlist();
	})
})
//购物车
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "header", "footer", "cookie"], ($, header) => {
		class Basket{
			constructor(){
				//商品总数量
				this.count = 0;
				//商品总价
				this.total = 0;
				this.arr = $.cookie("cart") ? $(JSON.parse($.cookie("cart"))) : [];
				//根据cookie渲染页面
				this.getGoods();
				//操作按钮
				this.basketBtn();
			}
			//购物车初始页面
			init(){
				$(".basket-list").html(
					`<div clss="basket-init">
						<p>你的购物车是空的</p>
						<img src="/static/images/index-img/empty-bag-img.png" alt="">
						<a href="/html/new.html">立即开始购物</a>
					</div>`
				);
			}
			//根据cookie渲染页面
			getGoods(){
				//没有cookie初始化页面否则根据cookie渲染页面
				if(this.arr.length === 0){
					this.init();
				}else{
					$(".basket-list").html(``);
					$.each(this.arr, (key, value) => {
						$(".basket-list").append(`
							<dl>
								<dt><img src="${value.img1}" alt=""></dt>
								<dd class="goodsMessage">
									<p class="basket-name">${value.name}<span class="basket-delete">X</span></p>
									<p class="basket-id">商品编码：<span>${value.id}</span></p>
									<p><a href="javascript:;" class="basket-reduce">-</a><span class="basket-num">${value.num}</span><a href="javascript:;" class="basket-add">+</a></p>
									<p>￥<span class="basket-price">${value.price}</span></p>
								</dd>
							</dl>
						`);
					})
					this.changeTotal();
					$(".basket-list").append(`
						<p>所有商品不包含运费</p>
						<p><span id="totalNum">${this.count}</span>件商品-总计(包含增值税)<span id="totalPrice">￥${this.total}</span></p>
						<p><a href="/html/new.html">继续购物</a><a href="javascript:;">继续结算</a></p>
					`)
				}
			}
			//操作按钮
			basketBtn(){
				let _this = this;
				//减
				$(".basket-reduce").click(function(){
					_this.reduce(this);
				})
				//加
				$(".basket-add").click(function(){
					_this.add(this);
				})
				//删
				$(".basket-delete").click(function(){
					console.log(1111);
					_this.delete(this);
				})
				// header.headerBasket();
			}
			//减
			reduce(othis){
				//本身元素是othis，全局是_this；
				let _this = this;
					//获取点击商品的下标
					let figure = $(othis).parent().parent().parent().index();
					//获取商品内容数据
					let theGoods = $(_this.arr).eq(figure).get(0);
					//获取页面展示商品数量
					let goodsNum = $(othis).next().html();
					// let goodsNum = this
					goodsNum--;
					if(goodsNum < 0){
						if(confirm("删除该商品？")){
								$(othis).parent().parent().parent().remove();
								console.log(_this);
								_this.arr.splice(figure,1);
								_this.cookieChange(_this.arr);
							}else{
								//取消删除就将商品数量设置为0
								$(othis).next().html(0);
								goodsNum = 0;
							}
						}else{
							theGoods.num--;
							_this.cookieChange(_this.arr);
							_this.changeTotal();
							$(othis).next().html(goodsNum);
						}
			}
			//加
			add(othis){
				let _this = this;
				// let _this=this;
					//获取点击商品的下标
					let figure = $(othis).parent().parent().parent().index();
					//获取商品内容数据
					let theGoods = $(_this.arr).eq(figure).get(0);
					//获取页面展示商品数量
					let goodsNum = $(othis).prev().html();
					goodsNum++;
					theGoods.num++;
					_this.cookieChange(_this.arr);
					_this.changeTotal();
					$(othis).prev().html(goodsNum);
			}
			//删
			delete(othis){
				let _this=this;
					//获取点击商品的下标
					let figure = $(othis).parent().parent().parent().index();
					//获取商品内容数据
					let theGoods = $(_this.arr).eq(figure).get(0);
					//获取页面展示商品数量
					let goodsNum = $(othis).parent().next().next().find(".basket-num").html();
					// console.log(figure);
					_this.arr.splice(figure,1);
					//删除商品所在dl
					$(othis).parent().parent().parent().remove();
					//改变显示商品总数量
					$(othis).prev().html(goodsNum);
					_this.cookieChange(_this.arr);
					_this.changeTotal();

			}
			//计算总价
			changeTotal(){
				this.count=0;
				this.total=0;
				$.each(this.arr, (key, value)=>{
					//商品总数
					// console.log(value);
					this.count += value.num;
					//商品总价
					this.total += value.num*value.price;
				})
				$("#totalNum").html(this.count);
				$("#totalPrice").html("￥"+this.total);
			}
			//改变cookie
			cookieChange(arr){
				let _this = this;
				if($(".basket-list:has(dl)").length){
					var str = JSON.stringify(arr);
					$.cookie("cart", str ,{
						expires:30,
						path:"/"
					});
					//每次修改cookie后修改头部显示购物车商品数
					header.headerBasket();
				}else{
					console.log($(".basket-list:has(dl)").length);
						_this.init();
						//删除所有商品后，删除cookie
						$.cookie("cart", '' ,{
								expires:-1,
								path:"/"
						});
					header.headerBasket();
				}
			}
		}
		return new Basket();
	})
})
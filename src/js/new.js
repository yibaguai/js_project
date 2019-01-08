//新品页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "item", "url","header", "footer", "cookie" ], ($, item, url) => {
			// item.init(url.baseUrlRap+"/new-list");
			class New{
				constructor(){
					this.newList();
					this.pageGo();
				}
				//商品列表模块
				newList(){
					item.init(url.baseUrlRap+"/new-list", "new-list");
				}

				pageGo(){
					$("#new-list").on("click", function(e){
						var target = e.target || e.srcElement;
						if(target.id === "dl"){
								// console.log(111);
								// console.log(this);
								$.ajax({
									url: url.baseUrlRap+"/new-list",
									type: "get",
									success: (res) => {
										if(res.res_code === 1){
											// console.log(this);
											let list = res.res_body;
											// console.log(res.res_body);
											// console.log(res.res_body[0].no);
										}
									}
								})
					}
							if(target.id === "buy"){
								// console.log(this);
								var _this = this;
							}

				})
				}
			}
			return new New();





		/*$(".new-list").on("click", function(e){
			// e = e || window.event;
			var target = e.target || e.srcElement;
			if(target.id === "buy"){
				//将该条商品信息保存为json格式
				var goods = {
					"no" : 1,
					"img" : $(".new-bk").attr("src"),
					"name" : $("#goods-name").text(),
					"price" : $("#goods-price").text(),
					"num" : 1
				}
				//判断cookie是否已经有值了
						$.cookie.raw = true;
						var arr = $.cookie("cart") ? JSON.parse(decodeURIComponent($.cookie("cart"))) : [];
						console.log(arr);
						//判断该商品是否被添加过
						var flag = false;
						for(var j = 0; j < arr.length; j++){
							if(arr[j].no === goods.no){
								arr[j].num++;
								flag = true;
								break;
							}
						}
						//该商品没有被添加过
						if(j === arr.length || flag === false){
							arr.push(goods);
						}
						var str = JSON.stringify(arr);
				e.stopPropagation();
			}
			// document.cookie = "cart="+encodeURIComponent(str);
			$.cookie.raw = true;
			$.cookie("cart", encodeURIComponent(str) ,{
				expires:30,
				path:"/"
			});
			// console.log(JSON.parse(decodeURIComponent($.cookie("cart"))));

		})*/

	})
})
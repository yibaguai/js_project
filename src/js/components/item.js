
/*商品展示模块*/
define(["jquery", "template", "cart"], ($, template, cart) => {
	class Item{
		constructor(){
			// this.init();
			// this.pageCut();
		}
			init(url, id){
			new Promise((resolve, reject) => {
				$("#"+id).load("/html/components/item.html", () => {
					resolve();
				})
			}).then(() => {
				$.ajax({
					url: url,
					type: "get",
					success: (res) => {
						if(res.res_code === 1){
							let list = res.res_body;
							let html = template("list-template", {list: res.res_body});
							$("#"+id).html(html);
							//带着id跳转到详情页
							$(".dl").on("click", function(){
								// console.log($(this).data("id"));
								location.href = "/html/details.html?id="+$(this).data("id");
								// console.log($(this));
							})
							this.shopping(list);
						}
					}
				})
			})
		}
		//加入购物车
		shopping(list){
			$(".buy").on("click",function(e){
				//取出选取商品的id
				let id = $(this).data("id");
				$.each(list, function(key, value){
					if(value.id===id){
						//将所选商品全部信息传入cart，调用add方法
						cart.add(value);
					}
				})
				e.stopPropagation();
			})
		}

	}
	return new Item();
})
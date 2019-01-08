
/*商品展示模块*/
define(["jquery", "template"], ($, template) => {
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
							// console.log();
							// this.pageCut();
							$(".dl").on("click", function(e){
								// var target = e.target || e.srcElement;
								// if(target.className === "dl"){
									location.href = "/html/details.html?id="+$(".dl").data("id");
								// }
							})

							// $(".buy").on("click",function(e){
							// 	console.log(111);
							// 	e.stopPropagation();
							// })

						}
					}
				})
			})
		}

		shopping(){
			
		}

	}
	return new Item();
})
define(["jquery", "header", "cookie"], ($, header) => {
	class Cart{
		constructor(){
		}
		//取得添加商品的信息cuncookie
		add(value){
				//判断cookie是否已经有值了
				var arr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
				// console.log(arr);
				//判断该商品是否被添加过
				var flag = false;
				for(var j = 0; j < arr.length; j++){
					if(arr[j].id === value.id){
						arr[j].num++;
						flag = true;
						break;
					}
				}
				//该商品没有被添加过
				if(j === arr.length || flag === false){
					console.log(arr);
					arr.push(value);
				}
				var str = JSON.stringify(arr);
				$.cookie("cart", str ,{
					expires:30,
					path:"/"
				});
				header.headerBasket();
		}
	}
	return new Cart();
} )
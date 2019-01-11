define(["jquery", "cookie"], () => {
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
				this.headerBasket();
				this.welcome();
				let a = 0, b = 0;
				// $("header").css({"position":"relative", "top":0});
				$(window).scroll(function(){
					// $("header").css({"position":"fixed"});
					/*if($(this).scrollTop() === 0){
						$("header").css({"position":"relative", "top":0});
					}else{*/
						$("header").css("position","fixed");
						$("header").stop().animate({top:"-80px"});
						a = $(this).scrollTop();
						setTimeout(function(){
							b = a;
						},0)
						if(b >= a){
							//鼠标向上滚动
							console.log(11111111);
							$("header").stop().animate({top:"0px", opacity:"1"});
							if($(this).scrollTop() === 0){
								$("header").css({"position":"relative"});
								$("header").css({"top":"0px"});
							}
							// console.log($("header"));
							// $("header").css("top", -80+"px");
							/*width: function(index, value) {
						        return parseFloat(value) * 1.2;
						      },
						      height: function(index, value) {
						        return parseFloat(value) * 1.2;
						      }*/
						}else{
							console.log(2222);
							$("header").stop().animate({top:"-80px", opacity:"0"});
							//鼠标向下滚动
							// console.log($("header"));
							// $("header").css("top", 0+"px");
							/*$("header").animate({
								top: "-80px";
							}, 1000)*/
						}
					// }
				})
			})
		}
		//头部动态显示信息
		headerBasket(){
			//登录后修改显示信息
			let name = $.cookie("user") ?
						JSON.parse(decodeURIComponent($.cookie("user"))).username :
						"登录";
			$("#login").html(name);



			//通过cookie将购物车里的商品数量添加到头部显示
			let count=0;
			if($.cookie("cart")){
					$.each(JSON.parse($.cookie("cart")),function(key, value){
						count+=value.num;
					})
					console.log("删");
					$("#headerNum").html(count);
			}else{
				//没有cookie后显示0
				$("#headerNum").html(0);
			}
		}
		//汉堡菜单点击,弹出导航栏
		nav(){

		}
		//搜索按钮，点击弹出搜索界面
		search(){

		}
		//登录,注册按钮
		welcome(){
			$("#login").click(function(){
					if($.cookie("user")){
						let atName =JSON.parse(decodeURIComponent($.cookie("user"))).username;
						if(confirm("当前登录用户是"+atName+"是否注销？")){
							$.cookie("user", "" ,{
								expires:-1,
								path:"/"
							});
						location.href = "/html/login.html";
						}
					}else{
						location.href = "/html/login.html";
					}
				})
			$("#register").click(function(){
				location.href = "/html/register.html";
			})
		}
	}
	return new Header();
})
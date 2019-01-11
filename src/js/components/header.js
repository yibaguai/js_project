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
				//滚动条
				$(window).scroll(throttle(headerScroll,100));
				//滚动执行函数
				function headerScroll(){
					$("header").css("position","fixed");
					$("header").stop().animate({top:"-80px"});
					a = $(this).scrollTop();
					setTimeout(function(){
						b = a;
					},0)
					if(b >= a){
						//滚动条向上
						console.log(11111111);
						$("header").stop().animate({top:"0px", opacity:"1"});
						if($(this).scrollTop() < 100){
							$("header").css({"position":"relative"});
							$("header").stop().animate({top:"0px", opacity:"1"});
						}
					}else{
						//滚动条向下
						console.log(2222);
						$("header").stop().animate({top:"-80px", opacity:"0"});
					}
				}
				//函数节流
				function throttle(method,delay){
		            var timer=null;
		            return function(){
		                var context=this, args=arguments;
		                clearTimeout(timer);
		                timer=setTimeout(function(){
		                    method.apply(context,args);
		                },delay);
		            }
		       	}
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
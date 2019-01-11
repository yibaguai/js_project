//首页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "imgtab", "header", "footer"], ($, imgtab) => {
		class Index{
			constructor(){
				this.banner();
				this.indexNav();
			}
			//广告图轮播
			banner(){
				let value = {
					img_bag : {
						img1: "/static/images/index-img/banner1.jpg",
						img2: "/static/images/index-img/banner2.jpg",
						img3: "/static/images/index-img/banner3.jpg",
						img4: "/static/images/index-img/banner4.jpg",
						img5: "/static/images/index-img/banner5.jpg"
					}
				}
				imgtab.init(value, 1520);
			}
			//图片导航栏
			indexNav(){
				$(".index-ul").css({"left": -281});
				$(".index-nav .icon-jia").click(function(){
					let ulLeft = $(this).parent().prev().css("left");
					console.log(parseInt(ulLeft));
					if(parseInt(ulLeft) < 0) ulLeft = 0;
					else ulLeft = -281;
					console.log(ulLeft);
					$(this).parent().prev().stop().animate({left: ulLeft+"px", opacity:0.7},1000)
					$(this).prev().html("");
				});
			}
		}

		return new Index();
	})
})
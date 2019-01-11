//首页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "imgtab", "header", "footer"], ($, imgtab) => {
		class Index{
			constructor(){
				this.banner();
			}
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
		}

		return new Index();
	})
})
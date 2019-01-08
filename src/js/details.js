//详情页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery","url", "header", "footer"], ($, url) => {
		class Details{
			constructor(){
				/*this.index = 0;
				this.liWidth = $(".details-li").width();
				this.len = 4;*/
				this.tab();
				// this.imgTab();
				// this.page();
				this.informationGet();
			}
			/*信息标签切换*/
			tab(){
				$(".details-message li").on("click", function(){
					$(this).addClass("details-ac").siblings().removeClass("details-ac");
					$(".details-bottom div").eq($(this).index()).addClass("details-ac").siblings().removeClass("details-ac");
				})
			}
			//根据id获取页面中的数据
			informationGet(){
				let arrSearch = location.search.slice(1).split("=");
			    let searchObj = {};
			    searchObj[arrSearch[0]] = arrSearch[1];

			    $.ajax({
			        url:url.baseUrlRap+"/details-list",
			        type:"GET",
			        data: searchObj,
			        dataType:"json",
			        success: (res)=>{
			        	// console.log(res);
			        	this.textUse(res.res_body);
			        	this.imgUse(res.res_body);
			    	}

			    })
			}
			//将获取的文字信息渲染到页面
			textUse(body){
				// console.log(body);
				$("#details-name").text(body.name);
				$("#details-price").text("￥"+body.price+".00");
				$("#details-describe").text(body.describe);
				$("#details-more").text(body.more);
				$("#details-about").text(body.about);
			}
			//图片切换
			imgUse(body){
				// console.log(body.img_bag);
				let count=0, index=0;
				let len, liWidth=460
				$.each(body.img_bag,function(key, value){
					count++;
					$(".details-ul").append(`<li><img src="${value}" alt=""></li>`);
					console.log(value);
				})
				//为第一个li添加class名
				$(".details-ul li:first-child").addClass("details-li");
				len = count;
				/*将第一张图片复制一份到最后*/
				$(".details-ul").append($(".details-li").clone());
				$(".details-ul").css({width: (len+1)*liWidth + "px"});
				/*上一张*/
				$("#details-goPrev").on("click",() =>{
					if(--index < 0){
						$(".details-ul").css({left : -len*liWidth+"px"});
						index = len-1;
					}
					$(".details-ul").stop().animate({left : -index*liWidth+"px"},"1000");
				})
				/*下一张*/
				$("#details-goNext").on("click",() => {
					if(++index >= len){
						console.log(this.index);
						$(".details-ul").stop().animate({left : -len*liWidth+"px"},"1000",function(){
							$(".details-ul").css({left: 0});
						});
						index = 0;
					}else{
						$(".details-ul").stop().animate({left : -index*liWidth+"px"},"1000");
					}
				})
			}


		}
		return new Details();
	})

})
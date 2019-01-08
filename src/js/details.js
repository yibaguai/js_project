//详情页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "header", "footer"], () => {
		class Details{
			constructor(){
				this.index = 0;
				this.liWidth = $(".details-li").width();
				this.len = 4;
				this.tab();
				this.imgTab();
			}
		/*图片切换*/
			imgTab(){
				/*将第一张图片复制一份到最后*/
				$(".details-ul").append($(".details-li").clone());
				$(".details-ul").css({width: (this.len+1)*this.liWidth + "px"});
				/*上一张*/
				$("#details-goPrev").on("click",() =>{
					if(--this.index < 0){
						$(".details-ul").css({left : -this.len*this.liWidth+"px"});
						this.index = this.len-1;
					}
					$(".details-ul").stop().animate({left : -this.index*this.liWidth+"px"},"1000");
				})
				/*下一张*/
				$("#details-goNext").on("click",() => {
					if(++this.index >= this.len){
						console.log(this.index);
						$(".details-ul").stop().animate({left : -this.len*this.liWidth+"px"},"1000",function(){
							$(".details-ul").css({left: 0});
						});
						this.index = 0;
					}else{
						console.log(this.index);
						$(".details-ul").stop().animate({left : -this.index*this.liWidth+"px"},"1000");
					}
				})
			}

			/*信息标签切换*/
			tab(){
				$(".details-message li").on("click", function(){
					$(this).addClass("details-ac").siblings().removeClass("details-ac");
					$(".details-bottom div").eq($(this).index()).addClass("details-ac").siblings().removeClass("details-ac");
				})
			}

			information(){
				let arrSearch = location.search.slice(1).split("=");
			    let searchObj = {};
			    searchObj[arrSearch[0]] = arrSearch[1];

			    $.ajax({
			        url:url.baseUrlRap+"/detail",
			        type:"GET",
			        data: searchObj,
			        dataType:"json",
			        success: function(res){
			       		console.log(res);
			    	}

			    })
			}

		}
		return new Details();
	})

})
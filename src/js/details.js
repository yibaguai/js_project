//详情页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "header", "footer"], () => {
		class Details{
			constructor(){
				this.index = 0;
				this.liWidth = $(".dttails-li").width();
				this.tab();
				this.imgTab();
		}
		/*图片切换*/
		imgTab(){
			/*将第一张图片复制一份到最后*/
			$(".dttails-ul").append($(".dttails-li").clone());
			$("#details-goPrev").on("click",() =>{
				if(--this.index < 0){
					$(".dttails-ul").css({left : -2*this.liWidth+"px"});
					this.index = 1;
				}
				$(".dttails-ul").stop().animate({left : -this.index*this.liWidth+"px"},"1000");
			})
			$("#details-goNext").on("click",() => {
				if(++this.index >= 2){
					console.log(this.index);
					$(".dttails-ul").stop().animate({left : -2*this.liWidth+"px"},"1000"，function(){
						$(".dttails-ul").css({left: 0});
					});
					this.index = 0;
				}else{
					console.log(this.index);
					$(".dttails-ul").stop().animate({left : -this.index*this.liWidth+"px"},"1000");
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
		}
		return new Details();
	})
})
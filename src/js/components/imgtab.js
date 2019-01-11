define(["jquery"], () => {
	class Imgtab{
		constructor(){
			//每个li宽度
			this.liWidth = 0;
			//每个对应index
			this.index = 0;
			//图片数量
			this.len = 0;
		}
		init(body, liWidth){
			console.log(body);
				let count = 0;
				// var index = 0;
				this.len = 0;
				this.liWidth = liWidth;
				//遍历，将图片插入ul
				$.each(body.img_bag,function(key, value){
					count++;
					$(".aul").append(`<li><img src="${value}" alt=""></li>`);
				})
				//为第一个li添加class名
				$(".aul li:first-child").addClass("ali");
				this.len = count;
				console.log(this.len);
				$(".aul").css("width", this.liWidth * this.len + "px");
				//将第一张图片复制一份到最后
				$(".aul").append($(".ali").clone());
				//添加图片后设置ul宽度
				$(".aul").css({width: (this.len+1)*this.liWidth + "px"});
				this.goPrev();
				this.goNext();
				this.btnPlay();
				this.autoPlay();
		}
		//按钮切换
		btnPlay(){
				//生成按钮
				let _this = this;
				for (var i = 1; i <= _this.len; i++) {
					$("ol").append($("<li>"))
				}
				//为第一个按钮加上ac
				$("ol li:first-child").addClass("ac");
				//为每个按钮添加点击事件
				$.each($("ol li"), function(key, value){
					$(this).click(() => {
						$("ol li").removeClass("ac");
						$(this).addClass("ac");
						_this.index = $(this).index();
						$(".aul").stop().animate({left : -key*_this.liWidth},"slow");
					})
				})
		}
		//上一张
		goPrev(){
			$(".agoPrev").on("click",() =>{
				$("ol li").removeClass("ac");
				console.log($("ol li"));
				if(--this.index < 0){
					$(".aul").css({left : -this.len*this.liWidth+"px"});
					this.index = this.len-1;
				}
				$(".aul").stop().animate({left : -this.index*this.liWidth+"px"},"1000");
				$("ol li").eq(this.index).addClass("ac");
				//
			})
		}
		//下一张
		goNext(){
			$(".agoNext").on("click",() => {
				$("ol li").removeClass("ac");
				if(++this.index >= this.len){
					$(".aul").stop().animate({left : - this.len * this.liWidth + "px"},"1000",function(){
						$(".aul").css({left: 0});
					});
					this.index = 0;
				}else{
					$(".aul").stop().animate({left : -this.index*this.liWidth + "px"},"1000");
				}
				$("ol li").eq(this.index).addClass("ac");
			})
		}
		//自动播放和停止
		autoPlay(){
			let _this = this;
			let timer = setInterval(() => {
					$(".agoNext").trigger("click");
					// this.goNext();
			},2000);
			//鼠标移入停止，移出自动轮播
			$(".aul , .agoPrev, .agoNext, ol").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(() => {
					$(".agoNext").trigger("click");
				},2000);
			});
		}
	}
	return new Imgtab();
})
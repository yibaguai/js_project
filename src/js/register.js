//登录页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "header", "footer", "cookie"], () => {
		class Register{
			constructor(){
				this.a=false;
				this.b=false;
				this.c=false;
				this.d=false;
				this.e=false;
				this.usernameReg();
				this.userEmailReg();
				this.userPsdReg();
				this.userPsdrReg();
				this.registerBtn();
			}
			//用户名验证
			usernameReg(){
				let userName = $("#registerName");
				let nameReg = /^[0-9a-zA-Z_]{1,10}$/;//用户名：数字，字母，下划线组成的1-10位
				userName.blur(()=>{
					if(!nameReg.test(userName.val())){
						userName.css("border", "1px solid red")
						this.a = false;
					}else {
						userName.css("border", "1px solid")
						this.a = true;
					};
					console.log("a"+this.a);
				})
				return this;
			}
			//邮箱验证
			userEmailReg(){
				let userEmail = $("#registerEmail");
				let mailReg = /^[0-9a-zA-Z]{1,10}@[0-9a-zA-Z]{1,5}\.[0-9a-zA-Z]{1,10}$/;//密码：数字，字母，下划线组成的6-16位
				userEmail.blur(()=>{
					if(!mailReg.test(userEmail.val())){
						userEmail.css("border", "1px solid red")
						this.b = false;
					}else {
						userEmail.css("border", "1px solid")
						this.b = true;
					};
					console.log("b"+this.b);

				})
				return this;
			}
			//密码验证
			userPsdReg(){
				let userPsd = $("#registerPsd");
				let psdReg = /^[0-9a-zA-Z_]{6,16}$/;//邮箱：1-10位数字或字母 + @ + 1-5位数字或字母 . + 1-10位数字或字母
				userPsd.blur(()=>{
					if(!psdReg.test(userPsd.val())){
						userPsd.css("border", "1px solid red")
						this.c = false;
					}else {
						userPsd.css("border", "1px solid")
						this.c = true;
					};
					console.log("c"+this.c);
				})
				return this;
			}
			//密码确认
			userPsdrReg(){
				let userPsdr = $("#registerPsdr");
				userPsdr.blur(()=>{
					if(!userPsdr.val()){
						userPsdr.css("border", "1px solid red")
						this.d = false;
					}else {
						userPsdr.css("border", "1px solid")
						this.d = true;
					};
					console.log("d"+this.d);
				})
			}
			//注册按钮
			registerBtn(){
				$("#registerBtn").click(() => {
					// this.usernameReg().userEmailReg().userPsdReg().userPsdrReg();
					if(this.a&&this.b&&this.c&&this.d){
						$.ajax({
							type : "POST",
							url : "http://localhost/js_project/api/v1/register.php",
							dataType : "json",
							data :{
								"username" :$("#registerName").val(),
								"email" : $("#registerEmail").val(),
								"password" : $("#registerPsd").val()
							},
							success:function(res){
								console.log(res.res_message);
							}
						})
					}else{
						console.log("红色框内信息不规范");
					}
				})
			}
		}
		return new Register();

	})
})
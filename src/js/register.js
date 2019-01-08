//登录页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "header", "footer", "cookie"], () => {
		class Register{
			constructor(){
				// this.userName = $("#registerName");
				// this.userEmail = $("#registerEmail");
				// this.userPsd = $("#registerPsd");
				// this.userPsdr = $("#registerPsdr");
				// this.registerBtn = $("#registerBtn");
				this.messageReg();
			}
			messageReg(){
				let userName = $("#registerName"),
					userEmail = $("#registerEmail"),
					userPsd = $("#registerPsd"),
					userPsdr = $("#registerPsdr"),
					registerBtn = $("#registerBtn");
				// console.log($("#userName").val());


				var nameReg = /^[0-9a-zA-Z_]{1,10}$/,//用户名：数字，字母，下划线组成的1-10位
					psdReg = /^[0-9a-zA-Z_]{6,16}$/,//密码：数字，字母，下划线组成的6-16位
					mailReg = /^[0-9a-zA-Z]{1,10}@[0-9a-zA-Z]{1,5}\.[0-9a-zA-Z]{1,10}$/;//邮箱：1-10位数字或字母 + @ + 1-5位数字或字母 . + 1-10位数字或字母
/*
				//为每项验证是否通过做标记	
				var a = false, b = false, c = false, d = false;

				//用户名验证
				userName.blur(function(){
					if(!nameReg.test(userName.val())){
						userName.css("border", "1px solid red")
						a = false;
					}else {
						userName.css("border", "1px solid")
						a = true;
					};
				})

				//邮箱验证
				userEmail.blur(function(){
					if(!mailReg.test(userEmail.val())){
						userEmail.css("border", "1px solid red")
						b = false;
					}else {
						userEmail.css("border", "1px solid")
						b = true;
					};
				})
				//密码验证
				userPsd.blur(function(){
					if(!psdReg.test(userPsd.val())){
						userPsd.css("border", "1px solid red")
						c = false;
					}else {
						userPsd.css("border", "1px solid")
						c = true;
					};
				})
				//密码确认
				userPsdr.blur(function(){
					if(!userPsdr.val()){
						userPsdr.css("border", "1px solid red")
						d = false;
					}else {
						userPsdr.css("border", "1px solid")
						d = true;
					};
				})*/
				// this.registerBtn(a,b,c,d);
			// registerBtn(a,b,c,d){
				//注册按钮
				$("#registerBtn").click(function(){
					// console.log(userName.val());
					$.ajax({
						type : "POST",
						url : "http://localhost/js_project/api/v1/register.php",
						dataType : "json",
						data :{
							"username" :userName.val(),
							"email" : userEmail.val(),
							"psssword" : userPsd.val()
						},
						success:function(res){
							if(res.res_code){
								// console.log(res);
							}
						}
					})
				})
				/*$("#registerBtn").click(function(){
					$.ajax({
						type:"post",
						url:"http://localhost/js_project/api/v1/register.php",
						dataType:"json",
						data:{
							"username": $.("#userName").val(),
							"email": $.("#userPsd").val(),
							"password": $.("#userEmail").val()
						},
						success:function(res){
							if(res.res_code){
								console.log(res);
								// if(confirm("注册成功，去登录")){
								// 	window.location.href = "login.html";
								// }
							}
						}
					})
					//阻止表单的默认提交
					e.preventDefault();
					return false;
					})*/
						/*console.log(JSON.parse(decodeURIComponent($.cookie("user"))));
					}
					//每项验证是否通过
					if(a&&b&&c&&d){
						//将输入的数据保存为JSON格式
						var obj = {
							"name" : userName.val(),
							"psd" : userPsd.val(),
							"mail" : userEmail.val()
						};
						//判断cookie是否已经有值了,防止前面的用户信息被清除
						var arr = $.cookie("user") ? JSON.parse($.cookie("user")) : [];
						//判断该账号是否存在
						var flag = false;
						for(var j = 0; j < arr.length; j++){
							//不能使用重复的用户名和邮箱
							if(arr[j].name === obj.name || arr[j].mail === obj.mail){
								console.log("该账号已经存在");
								// $("input").css("border","1px solid red");
								flag = true;
								break;
							}
						}
						//该账号没有被注册过
						if(flag === false){
							arr.push(obj);
							console.log("注册成功");
						}
						//将验证通过的信息存入cookie
						var str = JSON.stringify(arr);
						$.cookie("user", encodeURIComponent(str) ,{
							expires:30,
							path:"/"
						});
					}else{
						console.log("信息错误");
						// $("input").css("border","1px solid red");
					}*/
			}
		}
		return new Register();

	})
})
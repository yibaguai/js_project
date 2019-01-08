//登录页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "header", "footer", "cookie"], () => {
		class Login{
			constructor(){
				this.messageReg();
			}
			messageReg(){
				var userName = $("#loginName"),
					userPsd = $("#loginPsd"),
					loginBtn = $("#loginBtn");

				/*var flag = false;
				//取出注册过的账号信息
				var arr = JSON.parse($.cookie("user"));

				//如果有cookie默认填入第一个账号的用户名和密码
				if(arr[0]){
					userName.value = arr[0].name;
					pwd.value = arr[0].pwd;
				}*/

				//点击登录后判断信息是否正确
				$("#loginBtn").click(function(){
					console.log(userName.val(),userPsd.val())
					$.ajax({
							type : "POST",
							url : "http://localhost/js_project/api/v1/login.php",
							dataType : "json",
							data :{
								"username" : userName.val(),
								"password" : userPsd.val()
							},
							success:function(res){
								console.log(res);
								if(res.res_code){
									console.log("登录成功");
									//登录成功后将用户信息存入cookie
									var str = JSON.stringify(res.res_body);
									$.cookie("user", encodeURIComponent(str) ,{
										expires:30,
										path:"/"
									});

								}else{
									console.log("用户不存在");
								}
								// console.log("1111");
								// console.log(res.res_message);
							}
						})
					/*for(let i = 0; i < arr.length; i++){
						if((userName.value === arr[i].name || userName.value === arr[i].mail) && pwd.value === arr[i].pwd){
							flag = true;
						}
					}
					if(flag){
						console.log("登录成功");
					}else{
						console.log("账号不存在");
					}*/
				})
			}
		}
		return new Login();
	})
})
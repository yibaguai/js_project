//登录页
require(["./requirejs.config"], () => {
	//引入需要依赖的模块
	require(["jquery", "header", "footer", "cookie"], ($, header) => {
		// header.headerBasket();
		class Login{
			constructor(){
				this.messageReg();
			}
			messageReg(){
				let userName = $("#loginName"),
					userPsd = $("#loginPsd"),
					loginBtn = $("#loginBtn");
				let _this = this;
				//点击登录后判断信息是否正确
				$("#loginBtn").click( (e) => {
					$.ajax({
							type : "POST",
							url : "http://localhost/js_project/api/v1/login.php",
							dataType : "json",
							data :{
								"username" : userName.val(),
								"password" : userPsd.val()
							},
							success:function(res){
								if(res.res_code){
									console.log("登录成功");
									//登录成功后将用户信息存入cookie
									var str = JSON.stringify(res.res_body);
									_this.remberme(str);
									/*$.cookie("user", encodeURIComponent(str) ,{
										expires:30,
										path:"/"
									});*/
									if(confirm("登录成功,到首页？")){
										location.href = "/index.html";
									}
									//登录成功后直接修改header显示
									$("#login").html(JSON.parse(decodeURIComponent($.cookie("user"))).username);
								}else{
									//不满足要求的栏标红
									if(res.res_body==="用户名不存在"){
										$("#loginName").css("border", "1px solid red");
										$("#loginPsd").css("border", "1px solid red");
									}else if(res.res_body==="密码错误"){
										$("#loginName").css("border", "1px solid #000");
										$("#loginPsd").css("border", "1px solid red").val("");
									}
									console.log(res.res_body);
								}
							}
						})
				})
			}
			remberme(str){
				if($("#remberme[type='checkbox']").prop("checked")){
					$.cookie("user", encodeURIComponent(str) ,{
						expires:7,
						path:"/"
					});
				}else{
					$.cookie("user", encodeURIComponent(str),{
						path:"/"
					});
				}
			}
		}
		return new Login();
	})
})
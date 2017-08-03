<template>
<div id="top">
	<div id="head1">
		<router-link to="/mine" class="iconfont icon-fanhui"></router-link>
		<span class="zhuce">注&nbsp;册</span>
		<router-link class="deng" to="/login">登陆</router-link>
	</div>
	
	<form>
		<label for="usn">用户名：</label><input type="text" id="usn" placeholder="请输入用户名" />
		<label for="psw">密&nbsp;&nbsp;码：</label><input type="password" id="psw" placeholder="请输入密码" />
		<input id="sub" type="button" value="注    册" @click="reg"/>
	</form>
	<p id="beizhu">注册代表您已同意<span>《飞牛网服务协议》</span></p>
	<p id="res"></p>
</div>
</template>

<script>
	export default {
		name:'Register',
		methods:{
			reg:function(){
				var rrr = $.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:'register',
						userID:$("#usn").val(),
						password:$("#psw").val()
					}
				});
				rrr.done(function(msg){
//					alert(msg)
					if(msg == 0){
						$("#res").html("注册失败，用户名已经被占用")
					}else if(msg == 1){
						$("#res").html("注册成功")
					}else if(msg == 2){
						$("#res").html("服务器错误请稍后再试")
					}
				})
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;padding: 0;
	}
	#head1{
		display: flex;
		justify-content: space-between;
	}
	.deng{
		text-decoration: none;
		margin: 2vw;
	}
	#top{
		text-align: center;
	}
	.icon-fanhui{
		font-size: 6vw;
		text-decoration: none;
		font-weight: 900;
		position: absolute;
		left: 2vw;top: 2vw;
	}
	.zhuce{
		font-size: 5vw;
		margin: 2vw auto;
		display: inline-block;
		font-weight: 900;
	}
	form{
		color: #444;
		width: 100%;
		font-size: 5vw;
		text-align: left;
		border-top: 1vw solid skyblue;
		padding: 2vw;
		border-radius: 2vw;
	}
	#usn,#psw{
		width: 70vw;
		height: 8vw;
		border: 0.1vw solid #ccc;
		margin: 4vw 0;
	}
	#sub{
		margin: 1vw auto;
		color: #eee;
		display: block;
		width: 86vw;
		height: 10vw;
		background: #26a2ff;
		border-radius: 2vw;
		border: none;
		outline: none;
	}
	#beizhu{
		font-size: 4vw;
		text-align: left;
		margin-left: 8vw;
	}
	#beizhu span{
		color: #26a2ff;
	}
	#res{
		margin-top: 5vw;
		font-size: 5vw;
		color: darkgreen;
	}
</style>
<template>
<div id="top">
	<div id="head1">
		<router-link to="/mine" class="iconfont icon-fanhui"></router-link>
		<span class="zhuce">登&nbsp;录</span>
		<router-link class="deng" to="/register">注册</router-link>
	</div>
	
	<form>
		<label for="usn">用户名：</label><input type="text" id="usn" placeholder="请输入用户名" />
		<label for="psw">密&nbsp;&nbsp;码：</label><input type="password" id="psw" placeholder="请输入密码" />
		<input id="sub" type="submit" value="登    录"  @click="log"/>
	</form>
	<p id="res"></p>
</div>
</template>

<script>
	
	import {mapState,mapActions} from "vuex"
	
	export default {
		name:'Login',
		data:function(){
			return {
				yourid:'yyy'
			}
		},
		computed:{
			...mapState(['username'])
		},
		methods:{
			...mapActions(['changeid']),
			log:function(){
				var that = this
				var rrr = $.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:'login',
						userID:$("#usn").val(),
						password:$("#psw").val(),
					},
					success:function(msg){
						if(msg == 0){
							$("#res").html("登录失败，用户名不存在")
						}else if(msg == 2){
							$("#res").html("登录失败，密码错误")
						}else{
							$("#res").html("登录成功，欢迎您：" + JSON.parse(msg).userID + ",页面将在三秒后跳转")
							that.yourid = JSON.parse(msg).userID
//							console.log(that.yourid)
						}
						setTimeout(function(){
							location.href = '#/main'
						},3000)
					}
				});
//				rrr.done(function(){
////					console.log(typeof(msg))
//					
//				})
			}
		},
		beforeUpdate(){
			console.log(this.yourid)
		}
	}
</script>

<style scoped>
	*{
		margin: 0;padding: 0;
	}
	#top{
		text-align: center;
	}
	#head1{
		display: flex;
		justify-content: space-between;
	}
	.deng{
		text-decoration: none;
		margin: 2vw;
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
		display: block;
		width: 86vw;
		height: 10vw;
		background: #26a2ff;
		border-radius: 2vw;
		border: none;
		outline: none;
		color: #EEEEEE;
	}
	#res{
		color:green;
	}
</style>
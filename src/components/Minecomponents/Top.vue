<template>
	<div id="head">
  		<router-link to="/main" class="iconfont icon-shouye2 top"></router-link>
  		<span class="iconfont icon-duihua top"></span>
  		<span class="iconfont icon-iconniuniu logo"></span>
  		<router-link to="/login" class="btn">登录</router-link><span class="btn">|</span>
  		<router-link to="/register" class="btn">注册</router-link>
  	</div>
</template>

<script>
	export default {
		name:'Top'
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	#head{
		width: 100%;
		height: 32vw;
		background: #ed2d3b;
	}
	.top{
		float: right;
		font-size: 6vw;
		margin-right: 3vw;
		margin-top: 3vw;
		font-weight: 900;
		color: #fff;
	}
	.logo{
		width: 18vw;
		height: 18vw;
		background: #fff;
		font-size: 15vw;
		text-align: center;
		line-height: 18vw;
		border-radius: 50%;
		color: #ed2d3b;
		margin: 6vw;
		display: inline-block;
	}
	.btn{
		padding: 2vw;
		color: #fff;
		font-size: 4vw;
		text-decoration: none;
	}
</style>
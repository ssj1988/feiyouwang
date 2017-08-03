<template>
	<div id="menu1">
  		<dl class="menu1">
  			<dt class="iconfont icon-gerenxinxi1"></dt>
  			<dd>个人信息</dd>
  		</dl>
  		<dl class="menu1">
  			<dt class="iconfont icon-cf-c42"></dt>
  			<dd>曾经购买</dd>
  		</dl>
  		<dl class="menu1">
  			<dt class="iconfont icon-jifenshangcheng2"></dt>
  			<dd>积分商城</dd>
  		</dl>
  		<dl class="menu1">
  			<dt class="iconfont icon-bangzhu"></dt>
  			<dd>帮助中心</dd>
  		</dl>
  		<dl class="menu1">
  			<dt class="iconfont icon-yijian1"></dt>
  			<dd>意见反馈</dd>
  		</dl>
  		<dl class="menu1">
  			<dt></dt>
  			<dd></dd>
  		</dl>
  		<dl class="menu1">
  			<dt></dt>
  			<dd></dd>
  		</dl>
  		<dl class="menu1">
  			<dt></dt>
  			<dd></dd>
  		</dl>
  	</div>

</template>

<script>
export default {
	name:'Menu1'
}

</script>

<style scoped>
	*{margin: 0;padding: 0;}
#menu1{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	height: auto;
}
#menu1 .menu1{
	width: 24%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	background: #fff;
	height: 20vw;
	border: 0.1vw solid #ddd;
}
#menu1 .menu1 dt{
	font-size: 6vw;
}
#menu1 .menu1 dd{
	font-size: 3.5vw;
}
.icon-gerenxinxi1{
	color: #7e8ebf;
}
.icon-cf-c42{
	color: #b0a0e2;
}
.icon-jifenshangcheng2{
	color: #fab807;
}
.icon-bangzhu{
	color: #fccd4f;
}
.icon-yijian1{
	color: #36b56c;
}
</style>
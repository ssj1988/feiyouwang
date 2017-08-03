<template>
	<div id="mine1">
  		<dl class="mine1">
  			<dt>商品收藏</dt>
  			<dd>0</dd>
  		</dl>
  		<dl class="mine1">
  			<dt>店铺收藏</dt>
  			<dd>0</dd>
  		</dl>
  		<dl class="mine1">
  			<dt>我的足迹</dt>
  			<dd class="iconfont icon-zuji"></dd>
  		</dl>
  		<dl class="mine1">
  			<dt>签到领积分</dt>
  			<dd class="iconfont icon-iconzhuanqu11"></dd>
  		</dl>
  	</div>

</template>

<script>
export default {
	name:'Mine1'
}

</script>

<style scoped>
	*{margin: 0;padding: 0;}
#mine1{
	width: 100%;
	display: flex;
	flex-direction: row;
	height: 17vw;
	margin-bottom: 3vw;
}
#mine1 .mine1{
	width: 25%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	background: #fff;
}
</style>
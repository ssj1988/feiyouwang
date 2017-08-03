<template>
	<div id="dingdan">
  		<p>
  			<b>我的订单</b>
  			<span class="iconfont icon-sousuo1">查看全部订单</span>
  		</p><hr />
  		<div class="dingdan">
  			<dl class="dingdan1">
  				<dt class="iconfont icon-daifukuan"></dt>
  				<dd>待付款</dd>
  			</dl>
  			<dl class="dingdan1">
  				<dt class="iconfont icon-untitled"></dt>
  				<dd>待发货</dd>
  			</dl>
  			<dl class="dingdan1">
  				<dt class="iconfont icon-daishouhuo"></dt>
  				<dd>待收货</dd>
  			</dl>
  			<dl class="dingdan1">
  				<dt class="iconfont icon-daipinglun"></dt>
  				<dd>待评价</dd>
  			</dl>
  			<dl class="dingdan1">
  				<dt class="iconfont icon-icon5"></dt>
  				<dd>退货</dd>
  			</dl>
  		</div>
  	</div>
</template>

<script>
	export default{
		name:'Dingdan'
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	#dingdan{
		background: #fff;
	}
	#dingdan p{
		width: 96%;
		display: flex;
		justify-content: space-between;
		height: 9vw;
		line-height: 9vw;
		padding: 0 2vw;
	}
	#dingdan .dingdan{
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		height: 19vw;
	}
	#dingdan .dingdan .dingdan1{
		width: 20%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		background: #fff;
	}
	#dingdan .dingdan .dingdan1 dt{
		font-size: 5vw;
	}
</style>
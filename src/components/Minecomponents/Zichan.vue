<template>
	<div id="zichan">
  		<p>
  			<b>我的资产</b>
  			<span></span>
  		</p><hr />
  		<div class="zichan">
  			<dl class="zichan1">
  				<dt class="iconfont icon-yue"></dt>
  				<dd>账户余额</dd>
  			</dl>
  			<dl class="zichan1">
  				<dt class="iconfont icon-gouwuqia"></dt>
  				<dd>购物卡</dd>
  			</dl>
  			<dl class="zichan1">
  				<dt class="iconfont icon-xingzhuang10"></dt>
  				<dd>优惠券</dd>
  			</dl>
  			<dl class="zichan1">
  				<dt class="iconfont icon-iconzhenghe02"></dt>
  				<dd>积分</dd>
  			</dl>
  			<dl class="zichan1">
  				<dt class="iconfont icon-goumaishiwuqia"></dt>
  				<dd>卡券充值</dd>
  			</dl>
  		</div>
  	</div>

</template>

<script>
export default {
	name:'Zichan'
}

</script>

<style scoped>
	*{margin: 0;padding: 0;}
#zichan{
	background: #fff;
	margin-top: 3vw;
	margin-bottom: 3vw;
}
#zichan p{
	width: 96%;
	display: flex;
	justify-content: space-between;
	height: 9vw;
	line-height: 9vw;
	padding: 0 2vw;
}
#zichan .zichan{
	display: flex;
	justify-content: space-around;
	flex-direction: row;
	height: 19vw;
}
#zichan .zichan .zichan1{
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	background: #fff;
}
#zichan .zichan .zichan1 dt{
	font-size: 5vw;
}
#zichan .zichan .zichan1 dd{
	font-size: 3.5vw;
}
</style>
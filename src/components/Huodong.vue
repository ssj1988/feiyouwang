<template>
<div id="huodong">
	<p>
		买箭牌产品，赢杨洋见面会门票
		<router-link to="/main" class="iconfont icon-fanhui fanhui"></router-link>
	</p>
	<img src="/static/images/1.webp"/>
	<img src="/static/images/2.webp"/>
	<img src="/static/images/3.webp"/>
	<img src="/static/images/4.webp"/>
	<img src="/static/images/5.webp"/>
	<img src="/static/images/6.webp"/>
</div>
</template>

<script>
	export default {
		name:'Huodong',
		data(){
			return {
				list:[]
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	img{
		width: 100%;
		display: block;
	}
	p{
		text-align: center;
		height: 10vw;
		line-height: 10vw;
		font-size: 4vw;
	}
	.fanhui{
		position: absolute;
		left: 2vw;
		top: 1vw;
		text-decoration: none;
	}
</style>
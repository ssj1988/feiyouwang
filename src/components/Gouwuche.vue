<template>
<div class="gouwuche">
		<div class="gouwuche-hearder">
			<router-link to="/main" class="iconfont icon-fanhui gouwuche-sp1"></router-link>
			<span class="gouwuche-sp3">购物车</span>
			<span class="iconfont icon-fenlei gouwuche-sp2"></span>
		
		</div>
		<Car  :num="num"></Car>
		<CarList  v-on:tell-father="listenSon"></CarList>
	</div>

</template>

<script>
	import Car from './Gouwuchecomponents/Car'
	import CarList from './Gouwuchecomponents/Car-list'
export default {
	name: 'gouwuche',
	components:{
		Car,
		CarList
	},
	data(){
		return{
			num:null
		}	
	},
	methods:{
		listenSon(word){
			this.num=word
		}
	}
}	
	
</script>

<style scoped>
	*{
		margin: 0vw;
		padding: 0vw;
	}
	.gouwuche{
		background:#EEEEEE ;
		width:100%;
		height:auto
	}
	.gouwuche-hearder{
		width:100%;
		
		
		display: flex;
		justify-content: space-between;
		height: 11vw;
		background: #FFFFFF;
		border:1px solid #DDDDDD;
		position:fixed;
		top:0;
		left: 0;
		z-index: 2;
	}
	.gouwuche-sp1{
		display: inline-block;
		width: 10vw;
		height: 10vw;
		font-size: 6vw;
		text-align: center;
		line-height: 10vw;
		color:#333333;
		font-weight: 900;
	}
	.gouwuche-sp2{
		display: inline-block;
		width: 10vw;
		height: 10vw;
		font-size: 6vw;
		text-align: center;
		line-height: 10vw;
	}
	.gouwuche-sp3{
		display: inline-block;

		height: 10vw;
		font-size: 6vw;
		text-align: center;
		line-height: 10vw;
	}

	
</style>
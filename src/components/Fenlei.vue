<template>
	<div>
		<div class="fenlei">
			<router-link to="/main" class="iconfont icon-fanhui fenlei-sp1"></router-link>
			<p class="fenlei-p">
				<span class="iconfont icon-sousuo1"></span>
				<input type="search" name="" id="" value="" />
			</p>
			<span class="iconfont icon-fenlei fenlei-sp2"></span>
		
		</div>
		<Fenlei-list></Fenlei-list>
	</div>

</template>

<script>
import FenleiList from './Fenleicomponents/Fenlei-list'
	
export default {
	name: 'Fenlei',
	components:{
	  	FenleiList
	  }
}	
	
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.fenlei{
		padding-top: 1vw;
		width:100%;
		height: 5vw;
		display: flex;
		justify-content: space-between;
		height: 11vw;
		background: #FFFFFF;
		border-bottom:1px solid #d5d5d5;

	}
	.fenlei-sp1{
		display: inline-block;
		width: 10vw;
		height: 10vw;
		font-size: 6vw;
		text-align: center;
		line-height: 11vw;
		color:#333333;
		font-weight: 900;
	}
	.fenlei-sp2{
		display: inline-block;
		width: 10vw;
		height: 10vw;
		font-size: 6vw;
		text-align: center;
		line-height: 11vw;
	}
	.fenlei-p{
		margin-top:1vw;
		width:78%;
		display: flex;
		justify-content: flex-end;
		height: 8vw;
		background: #e5e5e5;
		border-radius: 1vw;
		position: relative;
	}
	.fenlei-p span{
		position: absolute;
		top:2.5vw;
		left:3vw
	}
	input{
		background: #e5e5e5;
			width:90%;
			height: 8vw;
			border:none;
			border-radius: 1vw;
			outline:none;
			color:#666666;
			font-size:5vw;
			
		}
	
	
</style>
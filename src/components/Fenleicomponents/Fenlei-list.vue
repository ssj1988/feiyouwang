<template>
	<div class="list">
		<fenlei-left  v-on:tell-father="listenSon"></fenlei-left>
		<fenlei-right :shuju="shuju" :tupian="tupian"></fenlei-right>

    </div>

</template>

<script>
import fenleiLeft from './Fenlei-left'
import fenleiRight from './Fenlei-right'
export default {
	name: 'Fenlei-list',
	data(){
		return{
			shuju:null,
			tupian:null,
			s:null,
			m:null,
			h:null,
		}	
	},
	methods:{
		listenSon(word,word2){
			this.shuju=word
			this.tupian=word2
			
			console.log(this.shuju)
		}
	},
	components:{
		fenleiLeft,
		fenleiRight
	}
}
	
	
	
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.list{
		display: flex;
		width: 100%;
		height:100%;
		background: #666666;
		position:fixed;
		right:0;
		top: 12.5vw;
	}

</style>
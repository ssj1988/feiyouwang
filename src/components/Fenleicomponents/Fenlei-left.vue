<template>
	<div class="left">
		<ul>
			<li  @click="tellFather(index)" v-for="(kkk,index) in list">
				<router-link to="">{{kkk.name}}</router-link>
			</li>
		
		</ul>			
	</div>
</template>

<script>
	import axios from 'axios'
export default {
	name: 'Fenlei-left',
	data(){
		return{
			list:null,
			lujing:"",
			shuju:"",
			tupian:[],
			isshow:false
		}
	},
	
	created(){
			var that=this
			$.ajax({				
				url:"https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1501655991552&callback=jsonp2",
					
				dataType:'jsonp',
				success:function(data){	
				that.list=data
//				console.log(data)	
				}
			})
	
		},
	methods:{
		
		tellFather(index){
			
			var that=this
			that.shuju=that.list[index].secondCateList	
			var l=that.shuju.length
			that.tupian=[]	
			for(var i=0;i<l;i++){				
				var icon=that.shuju[i].icon
				var tupianlujing="//s2.juancdn.com"+icon+"?iopcmd=convert&dst=webp"
				that.tupian.push(tupianlujing)
			}			
			this.$emit("tell-father",that.shuju,that.tupian)
				
			
		}
		
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
	.left{
		width:24%;
		height:100%;
		overflow: auto;
		background: #F4F4F4;

	}
	.left li{
		height:10vw;
		text-align: center;
		line-height: 10vw;
		border-bottom: 1px solid #FFFFFF;
		
	}
	.left li a{
		color:#666
	}
	.left-background{
		background: red;
	}
</style>
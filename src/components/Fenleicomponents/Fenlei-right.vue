<template>
			
		<div class="right">
			<ul v-if="shuju">
				<li v-for="(shuju,index) in shuju" >
					
					<router-link :to="{name:'Liebiao', params: { id: shuju.id }}">
						<img :src="tupian[index]"/>
						<span>{{shuju.name}}</span>
					</router-link>
					
				</li>
			</ul>
			
			
			<ul>
				<li v-for="(shuju1,index) in shuju1">
					
					<router-link :to="{name:'Liebiao', params: { id: shuju1.id }}">
						<img :src="tupian1[index]"/>
						<span>{{shuju1.name}}</span>
					</router-link>
					
				</li>
			</ul>
		</div>			
	
</template>

<script>

export default {
	name: 'Fenlei-left',
	props:['shuju','tupian'],
	data(){
		return{
			list:"",
			tupian1:[],
			shuju1:null,
			ids:3333
		}	
	},
		beforeCreate(){
			var that=this
			$.ajax({				
				url:"https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&&callback=jsonp2&callback=jQuery32101330267604579236_1501668406618&_=1501668406619",
				dataType:'jsonp',
					success:function(data){	
					that.list=data
					that.shuju1=that.list[0].secondCateList	
//					console.log(that.shuju1)
					var l=that.shuju1.length
					that.tupian1=[]	
					for(var i=0;i<l;i++){				
						var icon=that.shuju1[i].icon
						var tupianlujing="//s2.juancdn.com"+icon+"?iopcmd=convert&dst=webp"
						that.tupian1.push(tupianlujing)
					}			
//					console.log(this.tupian1)	
				}
			})
		}
	
}

	
</script>
<style type="text/css">
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

	
	.right{
		width:78%;
		height:100%;
	
	}
	.right ul{
		padding-bottom: 100vw;
		display: flex;
		width:100%;
		flex-wrap: wrap;
		height:80%;
		overflow: auto;
		background: #FFFFFF;
		
	}
	.right ul li{
		display: flex;
		width:27%;
		
		
		margin: 2vw;
/*		border: .1vw solid #DDDDDD;*/
		border-radius: 1vw;
		text-align: center;
	}	
</style>
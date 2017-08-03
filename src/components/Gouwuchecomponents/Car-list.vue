<template>

		<div class="car-list">
			<p>
				<span class="sp1" ></span>
				<span class="iconfont icon-tuijian" ></span>
				<span class="sp2">为你推荐</span>
				<span class="sp1"></span>				
				
			</p>
			<ul>
				<li v-for="(carlist,index) in carlist">
					{{carlist.title}}
					{{carlist.shuliang}}
					<span class="iconfont icon-gouwuche" @click="add(carlist)"></span>
				</li>
			</ul>
			<p>
				<span class="sp1" ></span>
				<span class="iconfont icon-tuijian" ></span>
				<span class="sp2">没有更多</span>
				<span class="sp1"></span>				
				
			</p>
		</div>
	

</template>

<script>
import axios from 'axios'	
export default {
	name: 'car-list',
	data(){
		return{
			carlist:[],
			goods:[]
		}
	},
	beforeMount(){
		var that=this
		axios.get('../../static/json/list.json',{
			 
		}).then(function(response){
				that.carlist=response.data;
			
		})
		},
	methods:{
		
		add(carlist){
			
			if(this.goods.indexOf(carlist)==-1){
				
				this.goods.push(carlist)
//				console.log(this.goods)
			}else{
				var xuhao=this.goods.indexOf(carlist)
				this.goods[xuhao].shuliang++
			}
//				console.log(this.goods)
			
			this.$emit("tell-father",this.goods)
//			$.ajax({
//				url:"http://getdouban.duapp.com/getJson.php",
//				data:{
////					src:'https://tuan.juanpi.com/pintuan/getSku?gid=41636009&pid=41636009&pt_type=2&is_vip=0'
//					src:'https://m.juanpi.com/cate/subcatelist?cate_id=1280&pf=8&area=1&bi=222'
//				},	
//			dataType:'jsonp',
//			success:function(data){						
////						console.log(data)
//				}
//			}),
//			$.ajax({
//				url:"https://tuan.juancdn.com/build/js/??Images.js,mtool.js",
//	
//			dataType:'jsonp',
//			success:function(data){						
//						console.log(data)
//				}
//			})
		
		}
	}
}	
	
</script>


<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.car-list{
		padding-bottom: 3vw;
	}
	.car-list ul{
		width:100%;
		display: flex;
		flex-wrap: wrap;
		justify-content:space-between;
		padding-top: 3vw;

		
	}
	.car-list ul li{
		width:49.9%;
		display: flex;
		justify-content: center;
		height:50vw;
		background: #FFFFFF;
		margin-bottom: .3vw;
		position: relative;
	}
	.icon-gouwuche{
		color:#d7063b;
		position:absolute;
		bottom:2vw;
		right:3vw;
		font-size: 8vw;
	}
	.car-list p{
		text-align: center;
	}
	.sp1{
		display: inline-block;
		
		width:20vw;
		border-top:1px solid #d5d5d5;
		padding-top: 1vw;
	}
	.icon-tuijian{
		margin-top: 1vw;
    	display: inline-block;
		color: #d7063b;
	}
	.sp2{
		display: inline-block;
		padding-top: 5vw;
		font-size: 3vw;
	}
</style>
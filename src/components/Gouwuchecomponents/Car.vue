<template>

		<div class="car">
			
			
			<ul v-if="num">
				<li v-for="(num,index) in num">
					<!--<input type="checkbox" class="in1"  @click="check"/>-->
					<span :class="['in1','iconfont',num.ischecked]" @click="check(index)"></span>
					<img src=""/>
					<p>
						<span class="sp-title">{{num.title}}</span>
						<span class="shanchu" @click="del(index)">X</span>
						<span class="sp-price" >{{num.price}}</span>
						<button class="btn1"  @click="jian(index)" >-</button>
						<input type="text" class="in2" :value="num.shuliang" />
						<button  class="btn1"  @click="jia(index)" >+</button>
					</p>
				</li>
			</ul>
			<div class="bottom" v-if="num">
				<span :class="['in1','iconfont',xuanzhong?'icon-xuanzhong':'']" @click="check2()"></span>

				<span>全选</span>
				<p>
					<span>总计</span>
					<span class="price">{{zongji}}</span>
				</p>
				<button>结算</button>
			</div>
			<div v-else class="guangguang">
				<img class="img"  src="../../assets/null.png"/>
				<p class="car-p">你的购物车内还没任何商品</p>
				<button class="btn">逛逛秒杀</button>
			</div>
		</div>
	

</template>

<script>
	
export default {
	name: 'car',
	props:['num'],
	data(){
		return{
			addnum:'0',
			zongji:"0",
			xuanzhong:false
		}
	},
//	beforeMount(){
//		var jiajia=this.zongji
//		this.zongji=Number(jiajia)+Number(this.num[this.num.length-1].price)
//		console.log(this.num[this.num.length-1].price)
//	},
	methods:{
		jia(index){
			this.num[index].shuliang++
			if(this.num[index].ischecked=="icon-xuanzhong"){
				this.zongji=this.num[index].shuliang*this.num[index].price+Number(this.zongji)-Number(this.num[index].shuliang-1)*(this.num[index].price)
			}
			
			
			
		},

		jian(index){
			this.num[index].shuliang--
	
			if(this.num[index].shuliang<1){
				this.num[index].shuliang=1
				this.num.splice(index,1)

			}else{
			if(this.num[index].ischecked=="icon-xuanzhong"){
				
				this.zongji=this.zongji-this.num[index].price
			}
			}			
				
		},
		del(index){
			
//			console.log(this.num)
			if(this.num[index].ischecked=="icon-xuanzhong"){
				this.zongji=this.zongji-(this.num[index].shuliang*this.num[index].price)
			}
			this.num[index].shuliang=1
			this.num.splice(index,1)
			if(this.num.length==0){
				this.xuanzhong=false
			}

		},
		check(index){
			
			if(this.num[index].ischecked=="icon-xuanzhong"){
				this.num[index].ischecked=""
				this.zongji=this.zongji-this.num[index].shuliang*this.num[index].price
			}else{
				this.num[index].ischecked="icon-xuanzhong"
				this.zongji=Number(this.zongji)+this.num[index].shuliang*this.num[index].price
				
			}
			
			console.log(this.num.length)
			
		},
		check2(){
			if(this.xuanzhong==false){
				var jiage=0
				for(var i=0;i<this.num.length;i++){
					this.num[i].ischecked="icon-xuanzhong"
					jiage=this.num[i].shuliang*this.num[i].price+Number(jiage)
				}
				this.xuanzhong=true
				this.zongji=jiage
				
			}else{
				for(var i=0;i<this.num.length;i++){
					this.num[i].ischecked=""
				}
				this.xuanzhong=false
				
				this.zongji=0.00
				
			}
		}
		
	}
}	
	
</script>


<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.car ul{
		display: flex;
		flex-flow: column;
		width: 100%;
		padding-top: 5vw;
		margin-top:6vw;
		background: #eeeeee;
		min-height: 100vw;
	}
	.car ul li{
		width:100%;
		display: flex;
		height:30vw;
		background: #FFFFFF;
		border-bottom:1px solid #F5F5F5
	}

	.car ul li {
		display: flex;
		align-items: center;
		position: relative;
		
	}
	.car ul li .in1{
		border:1px solid #d5d5d5;
		border-radius: 50%;
		display: inline-block;
		margin:0 4vw;
		width:4vw;
		height:4vw;
		color:#d7063b
		
	}
	.car .bottom .in1{
		border:1px solid #d5d5d5;
		border-radius: 50%;
		display: inline-block;
		margin:0 4vw;
		width:4vw;
		height:4vw;
		color:#d7063b
		
	}
	.car ul li img{
		width:20vw;
		height:20vw;
	}
	.car ul li p{
		height:20vw;
		padding-left: 3vw;
		width:60vw;
		text-align: left;
		
		
	}
	.sp-title{
		display: block;
		height:10vw;
		text-align: left;
	}
	.sp-price{
		display: inline-block;
		padding-right: 20vw;
	}
	.car ul li p .shanchu{
		background: #d7063b;
		border-radius: 50%;
		width:5vw;
		height:5vw;
		color:#FFFFFF;
		display: inline-block;
		position:absolute;
		right:6vw;
		top:6vw;
		text-align:center;
	}
	.car ul li p .in2{
		width:6vw;
		height:6vw;
		border: 1px solid #DDDDDD;
		text-align: center;
		line-height: 6vw;
		
	}
	.car ul li p .btn1{
		width:7vw;
		height:7vw;
		background: #FFFFFF;
		border: 1px solid #DDDDDD;
		outline: none;
		
		
	}
	.bottom{
		align-items: center;
		display: flex;
		width: 100%;
		height:12vw;
		background: #ffffff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1;
		border-top: 1px solid #dddddd;
	}
	.bottom p{
		width:63vw;
		text-align: right;
	}
	.bottom p span{
		display: block;
		padding-right: 5vw;
	}
	.bottom .in3{
		display: inline-block;
		margin-left: 3vw;
		outline: none;

	}
	.bottom button{
		width:22vw;
		height:100%;
		background: #d7063b;
		border: none;
		outline: none;
	}
		
	.car{
		background: #EEEEEE;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
	}
	.car .car-p{
		text-align: center;
		
	}
	.car .img{
		width:80%;
		margin-left: 12vw;

	}
	.car .btn{
		display: inline-block;
		margin-left: 3vw;
		width:94vw;
		height:10vw;
		background: #d7063b;
		border-radius: 1vw;
		outline: none;
		color:#FFFFFF;
		font-size: 5vw;
		margin-top: 10vw;
		outline:none;
		border:none;
	}

	.icon-gouwuche{
		color:#d7063b;
		position:absolute;
		bottom:3vw;
		right:7vw;
		font-size: 8vw;
	}
</style>
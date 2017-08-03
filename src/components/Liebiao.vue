<template>
	<div class="liebiao">
		<header>
			<router-link to="/fenlei" class="iconfont icon-fanhui header-sp1"></router-link>
			<p class="header-title">{{toptitle}}</p>
			
		</header>

		<ul>
			<li v-for="(shangpin,index) in shangpin" class="shangpin">
				<router-link :to="{name:'Detail', params: { title: shangpin.title,id :shangpin.goods_id }}">
					<img :src="shangpin.pgpicurl"/>
					<span class="xianjia">{{shangpin.tuan_price}}</span>
					<span class="yuanjia">{{shangpin.cprice}}</span>
					<span class="shangpin-title">{{shangpin.title}}</span>
				</router-link>	
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Liebiao',

	data(){
		return{
			shangpin:null,
			toptitle:null
		}	
	},
	beforeMount(){
		var that=this
		
		$.ajax({
				url:"http://getdouban.duapp.com/getJson.php",
				data:{
					src:'https://m.juanpi.com/cate/subcatelist?cate_id='+this.$route.params.id+'&pf=8&area=1&bi=222'
				},	
			dataType:'jsonp',
			success:function(data){						
						that.toptitle=data.name
//						console.log(data)
				}
			}),
		
		
		
		$.ajax({
				url:"https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22fcate%22%3A%22"+this.$route.params.id+"%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c3_l1_18_51_5&machining=danpin&page=3&rows=26&dtype=JSONP&callback=gsort_callback",
	
			dataType:'jsonp',
			success:function(data){						
						console.log(data)
				that.shangpin=data.list	
			}
		})
//		console.log(this.$route.params.id)
	}
}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	header{
		width:100%;
		height:11vw;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		position: fixed;
		top:0vw;
	}
	.header-sp1{
		display: inline-block;
		width: 10vw;
		height: 10vw;
		font-size: 6vw;
		text-align: center;
		line-height: 10vw;
		color:#333333;
		font-weight: 900;
	}
	.header-title{
		font-size: 6vw;
		padding-left: 33vw;
		
	}

	.liebiao ul{
		margin-top: 11vw;
		display: flex;
		width:100%;
		flex-wrap:wrap ;
		justify-content: space-around;
	}
	.liebiao .shangpin{
		width:49%;
		height:63vw;
		list-style: none;
		background: #ffffff;
	}
	.xianjia{
		color:#ff464e;
	}
	.yuanjia{
		text-decoration: line-through;
		color:#bbb
	}
	.shangpin-title{
		display: block;
	}
</style>
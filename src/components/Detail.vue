<template>
	<div class="main-bander">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="lunboshu in lunboshuju">
                	<img :src="lunboshu.ss_av_zpic"/>
                </div>
            </div>
            <!--<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
            </div>-->
        </div>
    </div>




</template>

<script>
    import Swiper from 'swiper'
	
	export default {
	name: 'Detail',
	data(){
		return{
			lunboshuju:null
		}	
	},
	beforeMount(){
//		console.log(this.$route.params)
		var that=this
		$.ajax({
				url:"http://getdouban.duapp.com/getJson.php",
				data:{
					src:'https://tuan.juanpi.com/pintuan/getSku?gid='+this.$route.params.id+'&pid=46556057&pt_type=2&is_vip=0'
				},	
			dataType:'jsonp',
			success:function(data){						
						console.log(data.sku)
						that.lunboshuju=data.sku
				}
			})
	},
	updated(){
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
			    slidesPerView:'auto',
			 

			   

			  
            })

        }
}
	
	
</script>

<style scoped>
	img{
		width:30vw
	}
</style>
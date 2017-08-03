
<template>
    <div class="main-bander">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="datas in data"  class="swiper-slide"><img :src='datas.src'/></div>
            </div>
            <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                <span v-for="list in list" class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Swiper from 'swiper'
    import axios from  'axios'

    export default{
        name:'Mainbander',
        data(){
            return{
                data:[],
                list:[]
            }
        },
        methods:{
            getBander(){
                var that=this
                axios.get('static/json/bander.json').then(function(response){
                    that.data=response.data
                })
            }
        },
        mounted(){
            this.getBander()
        },
        updated(){
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
			    slidesPerView: 1,
			    paginationClickable: true,
			    autoplayDisableOnInteraction : false,
			    spaceBetween: 30,
			    loop: true,
			    autoplay: 1500
            });
        }
    }
</script>
<style scoped lang="scss">

</style>

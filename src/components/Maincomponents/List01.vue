
<template>
    <div class="main-list01">
        <div class="list01-title">
            <div class="list01-title-img"><img src="static/img/miaosha.png" /></div>
            <div class="changci"><h4>15点场</h4></div>
            <div class="daojishi">
                <span v-text="myHour"></span>:<span v-text="myMinutes"></span>:<span v-text="mySeconds"></span>
            </div>
            <div class="xianliang"><p>限时限量</p><i><img src="static/img/right.png" /></i></div>
        </div>
        <div class="swiper-container-box" id="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="static/img/miaosha/1.jpg" alt=""><p class="red">￥ <span>19</span></p><p>￥ <span class="line-through">29</span></p></div>
                <div class="swiper-slide"><img src="static/img/miaosha/2.jpg" alt=""><p class="red">￥ <span>10</span></p><p>￥ <span class="line-through">23</span></p></div>
                <div class="swiper-slide"><img src="static/img/miaosha/3.jpg" alt=""><p class="red">￥ <span>20</span></p><p>￥ <span class="line-through">35</span></p></div>
                <div class="swiper-slide"><img src="static/img/miaosha/4.jpg" alt=""><p class="red">￥ <span>15</span></p><p>￥ <span class="line-through">29</span></p></div>
                <div class="swiper-slide"><img src="static/img/miaosha/5.jpg" alt=""><p class="red">￥ <span>25</span></p><p>￥ <span class="line-through">38</span></p></div>
                <div class="swiper-slide"><img src="static/img/miaosha/6.jpg" alt=""><p class="red">￥ <span>36</span></p><p>￥ <span class="line-through">47</span></p></div>
                <div class="swiper-slide"><img src="static/img/miaosha/7.jpg" alt=""><p class="red">￥ <span>66</span></p><p>￥ <span class="line-through">89</span></p></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Swiper from 'swiper'
    var myDate = new Date();
    var myHour = myDate.getHours();
    var myMinutes = myDate.getMinutes();
    var mySeconds = myDate.getSeconds();
    var myA=Date.parse("August 3,2017");

    export default {
        name:'List01',
        data(){
            return{
                myHour:myHour,
                myMinutes:myMinutes,
                mySeconds:mySeconds
            }
        },
        methods:{
            changemySeconds:function(){
                let that = this
                setInterval(function(){
                    that.mySeconds--
                    if(that.mySeconds<10){
                        that.mySeconds='0'+that.mySeconds
                    }
                    if(that.mySeconds==0){
                        that.myMinutes--
                        that.mySeconds=59
                    }
                    if(that.myMinutes<10){
                        that.myMinutes=parseInt('0'+that.myMinutes)
                    }
                    if(that.myMinutes==0){
                        that.myHour--
                        that.myMinutes=59
                    }
                },1000)
            }
        },

        mounted(){
            this.changemySeconds()
            var myswiper = new Swiper('#swiper-container',{
                freeMode : true,
                freeModeMomentum : true,
                spaceBetween: 30,
                grabCursor: true,
                slidesPerView: 3,
            })
        }
    }
</script>
<style scoped lang="scss">
    .main-list01{
        background-color:#fff;
        .list01-title{
            width:100vw;
            display:flex;
            justify-content: space-between;
            .list01-title-img{
                width:13vw;
                display:flex;
                align-items:center;
                margin-left:4vw;
            }
            .changci{
                h4{
                    line-height:5vw;
                    font-size:4vw;
                }
            }
            .daojishi{
                display:flex;
                align-items:center;
                width:35vw;
                span{
                    width:5vw;
                    height:5vw;
                    display:inline-block;
                    border:1px solid #afabab;
                    border-radius:.4vw;
                    line-height:5vw;
                    text-align:center;
                    font-size:3vw;
                    margin:0 1vw;
                }
            }
            .xianliang{
                display:flex;
                justify-content: center;
                align-items:center;
                p{
                    font-size:4vw;
                }
                img{
                    width:50%;
                    margin:0 2vw;
                }
            }
        }
        #swiper-container{
            overflow: hidden;

            .swiper-wrapper{


                .swiper-slide{
                    p{
                        text-align: center;
                        .line-through{
                            text-decoration: line-through;
                        }
                    }
                    .red{
                        color: red;
                    }
                    img{

                    }
                }
            }
        }
    }



</style>



<template>
    <div class="main-box">
        <a v-for="datas in data" href="" class="darunfa-position">
            <!-- <img src="static/img/darunfa.png" class="darunfa-img"/> -->
            <i class="iconfont"><img :src="datas.src" alt=""></i>
            <span>{{datas.title}}</span>
        </a>
    </div>
</template>




<script>
    import Vue from 'vue'
    import axios from  'axios'
    export default {
        name:'Mainbox',
        data(){
            return{
                data:[]
            }
        },
        methods:{
            getbox(){
                var that=this
                axios.get('static/json/mainbox.json').then(function(response){
                    that.data=response.data
                    that.title=response.title
                    
                })
            }
        },
        mounted(){
            this.getbox()
        }
    }
</script>
<style scoped lang="scss">
    .main-box{
        background-color:#fff;
        width:100vw;
        display:flex;
        flex-wrap:wrap;
        .darunfa-position{
            position: relative;
        }
        .darunfa-img{
            position: absolute;
            width:70%;
            top:0vw;
            right:1vw;
        }
        a{
            width:20vw;
            display:flex;
            flex-direction:column;
             justify-content:center;
             align-items:center;
            padding:1vw;
            box-sizing: border-box;

            i{
                display:block;
                font-size: 10vw;
                text-align: center;
                img{
                    width:80%;
                }
            }
            span{
                font-size:3.6vw;
            }
        }
    }
</style>

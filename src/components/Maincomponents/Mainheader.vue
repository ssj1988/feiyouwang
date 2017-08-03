<template>
    <div class="main-header">
        <router-view></router-view>
        <header>
            <a href="" class="a-left">
                <i class="iconfont icon-dingwei"></i><span id="position-city"><router-link to="main/setcity">北京</router-link></span>
            </a>
            <div class="sousuo">
                <i class="iconfont icon-sousuo"></i>
                <router-link to="/Mainsousuo"><input type="text" name="" placeholder="大米"/></router-link>
            </div>
            <router-link to="/mine" class="a-right iconfont icon-wode"></router-link>
        </header>
    </div>
</template>



<script>
    import Vue from 'vue'
    import axios from 'axios'
    export default {
        name:'mainheader',

        data(){
            return {
                scroll:''
            }
        },
        methods:{
            menu() {
              this.scroll = document.body.scrollTop;
                if(this.scroll>20){
                    // console.log(document.getElementsByClassName("main-header")[0])
                    var a = document.getElementsByClassName("main-header")[0];
                    a.style.background="#d7063b";
                }
                if(this.scroll<20){
                    var a = document.getElementsByClassName("main-header")[0];
                    a.style.background="transparent";
                }
            }

        },
        mounted() {
             window.addEventListener('scroll', this.menu);

        }





    }

</script>
<style scoped lang="scss">
    .main-header header{
        width:100vw;
    }
    .main-header{
        width: 100vw;
        position: fixed;
        top: 0;
        left:0;
        height:10vw;
        z-index:10;
        transition:all 1s;
        background: transparent;
        a{
            color: #ffffff;
        }
        .a-left{
            margin-left:2vw;
            float:left;
            font-size:5vw;
            color:#FFFFFF;
            span{
                line-height:10vw;
            }
        }
        .sousuo{
            width:65vw;
            margin-left:4vw;
            margin-top:.5vw;
            border:none;
            border-radius:1vw;
            resize:none;
            float:left;
            line-height:8vw;
            background-color:#FFFFFF;
            i{
                margin-left:2vw;
            }
            input{
                width:52vw;
                height:8vw;
                border:none;outline:medium;
                background-color: #fff;
            }
            input:focus { oulilne:none; }
        }
        .a-right{
            margin-right:5vw;
            float:right;
            line-height:10vw;
            font-size:5vw;
            color:#FFFFFF;
        }
    }

</style>

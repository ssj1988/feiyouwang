
<template>
    <div class="main-footer">
        <router-link to="/main"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
        <router-link to="/fenlei"><i class="iconfont icon-shangpinfenlei"></i><span>商品分类</span></router-link>
        <router-link to="/huodong"><i class="iconfont"><img src="static/img/huodong.png" /></i></router-link>
        <router-link to="/gouwuche"><i class="iconfont icon-gouwuchekong1"></i><span>购物车</span></router-link>
        <router-link to="/mine"><i class="iconfont icon-wode"></i><span>我的账户</span></router-link>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name:'Mainfooter',
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style scoped lang="scss">
    .main-footer{
        position:fixed;
        bottom:0;
        left:0;
        width:100vw;
        display:flex;
        justify-content: space-around;
        background-color:#FFFFFF;
        z-index: 10000;
        a{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:20vw;

            box-sizing: border-box;
            i{
                font-size:8vw;
                img{
                    width:100%;
                }
            }
            span{
                font-size:3.2vw;
            }
        }
    }
</style>

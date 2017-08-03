<template>
    <div class="kuaibao">
        <div class="kuaibao-img"><img src="../../../static/img/kuaibao.png" alt=""></div>
        <div class=""><i class="iconfont icon-broadcast"></i></div>
        <div class="kuaibao-title">家电放暑假 小家电满300减60</div>
    </div>
</template>


<script>
    import Vue from 'vue'
    export default {
        name:'Mainkuaibao',
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style scoped lang="scss">
    .kuaibao{
        display:flex;
        width:100vw;
        align-items: center;
        color: rgb(219, 56, 76);
        background-color:#fff;
        margin-bottom:2vw;
        .kuaibao-img{

            width:20vw;
            img{
                width:100%;
            }
        }
        .iconfont{
            margin:0 5vw;
        }
    }
</style>

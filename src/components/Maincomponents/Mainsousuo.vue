<template lang="html">
    <div class="">

        <div class="sousuo-header">
            <router-link to="/" slot="left">
                <mt-button icon="back" class="button-left"></mt-button>
            </router-link>
            <input type="text" name="" value="">
            <mt-button slot="right" class="button-right">搜索</mt-button>
        </div>
        <div class="resou">
            <div class="resou-box">
                <h3><i class="iconfont"></i>热门搜索</h3>
                <ul>
                    <li><a href="#">油</a></li>
                    <li><a href="#">大米</a></li>
                    <li><a href="#">抽纸</a></li>
                    <li><a href="#">洗衣液</a></li>
                    <li><a href="#">洗发水</a></li>
                    <li><a href="#">奶粉</a></li>
                    <li><a href="#">进口牛奶</a></li>
                    <li><a href="#">休闲零食</a></li>
                    <li><a href="#">饮料</a></li>
                    <li><a href="#">手机</a></li>
                    <li><a href="#">电脑</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Search } from 'mint-ui';
import Vue from 'vue'
Vue.component(Search.name, Search);
export default {
    name:'mainsousuo',
}
</script>

<style lang="scss" scoped>
    a{
        color:#000;
    }
    .sousuo-header{
        background-color: #f6f8fa;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .button-left{
            color:#000000;
        }
        button{
            border:1px solid#f6f8fa;
        }
        .mint-header-title{
            display: none;
        }
        input{
            width:60%;
            background-color: #f3f3f3;
            height:6vw;
        }
        .button-right{
            color: #000000;
        }
    }
    .resou{

        .resou-box{
            margin:0 3vw;
            ul{
                display: flex;
                justify-content:flex-start;
                flex-wrap: wrap;
                padding-left: 1vw;
                li{
					list-style: none;
                    margin:0 2vw 2vw 0;
                    border: 1px solid #c8c8cd;
                    a{
                        display: block;
                        padding: 0vw 3vw;
                    }
                }
            }

        }
    }

</style>

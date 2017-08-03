
<template>

        <div class="">
            <div class="shop-title">
                <h3>精选商品</h3>
            </div>
            <div class="shop-box">
                <div v-for="datas in data[0]" class="shop-box-content">
                    <div class="shop-box-content-img">
                        <img :src="datas.pic_url" alt="">
                    </div>
                    <div class="">
                        <p>{{datas.title}}</p>
                        <p>价格:{{datas.oprice}}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import axios from  'axios'
    export default{
        name:'Shop',
        data(){
            return{
                data:[]
            }
        },
        methods:{
            getShop(){
                // axios.interceptors.request.use((config) => {
                //     console.log("请求前拦截！");
                //     return config;
                // }, (err) => {
                //     return Promise.reject(err);
                // });
                // axios.get('https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22stock%22%3A%222%22%2C%22is_show_presale%22%3A%220%22%2C%22hot_type%22%3A%5B%221%22%2C%223%22%5D%2C%22source_type%22%3A%5B%221%22%5D%2C%22fcate%22%3A%22490%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c3_l1_18_51_5&machining=danpin&page=1&rows=50&dtype=JSONP&callback=gsort_callback')
                // .then( (response) => {
                //     console.log(response);
                // })
                var that=this;
                $.ajax({
                    url:'https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22stock%22%3A%222%22%2C%22is_show_presale%22%3A%220%22%2C%22hot_type%22%3A%5B%221%22%2C%223%22%5D%2C%22source_type%22%3A%5B%221%22%5D%2C%22fcate%22%3A%22490%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c3_l1_18_51_5&machining=danpin&page=1&rows=11000&dtype=JSONP&callback=gsort_callback',
                    dataType:'JSONP',
                    type:"get",
                    success:function(result){
                        var data=result.list
                        that.data.push(data)
                        console.log(data);
                    }
                })
            }
        },
        mounted(){
            this.getShop()
        }
    }
</script>
<style scoped lang="scss">
    .shop-title{
        h3{
            text-align: center;
            color: #ae1f7d;
        }
    }


    .shop-box{
        width: 100%;
        margin-bottom:50vw;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;

        .shop-box-content{
            width: 45%;
            margin-bottom: 3vw;
            .shop-box-content-img{
                border: 1px solid #333;
            }

            p{
                line-height: 5vw;
                margin: 3vw 0;
            }


        }

    }
</style>

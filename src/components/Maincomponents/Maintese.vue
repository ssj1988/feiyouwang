


<template>
    <div class="maintese">
        <div class="tese-title">
            <h3><i></i><span>特色频道</span><i></i></h3>
        </div>
        <div class="tese-box">
            <div class="tese-box-big">
                <a href="#"><img src="static/img/tese/1.jpg" alt=""></a>
            </div>
            <div class="tese-box-small">
                <a href="#"><img src="static/img/tese/2.jpg" id="img1" alt=""></a>
                <a href="#"><img src="static/img/tese/3.jpg" alt=""></a>
            </div>


        </div>
    </div>
</template>

<script type="text/javascript">
    import Vue from 'vue'
    export default {
        name:'Maintese',
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style scoped lang="scss">
    .maintese{
        width:100%;
        .tese-title{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10vw;
            h3{
                color: #ae1f7d;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                i{
                    border-top:1px solid #ae1f7d;
                    width: 10vw;
                    height: 1px;
                    display: inline-block;
                    opacity: .5;
                }
                span{
                    display: inline-block;
                    width: 25vw;
                    text-align: center;
                }
            }
        }
        .tese-box{
            display: flex;
            justify-content:space-around;
            width: 100%;
            .tese-box-big{
                width:88%;
                border-right: 1px solid #E5E5E5;
                img{
                    display: block;
                }
            }
            .tese-box-small{
                display: flex;
                flex-direction: column;

                flex-grow: 1;
                img{
                    display:block;
                }
                #img1{
                    border-bottom: 1px solid #E5E5E5;
                }
            }



        }


    }
</style>

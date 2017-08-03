
<template>
  <div class="main">

    <mainheader></mainheader>
    <Mainbander></Mainbander>
    <Mainbox></Mainbox>
    <Mainkuaibao></Mainkuaibao>
    <List01></List01>
    <Maintese></Maintese>
    <Shop></Shop>
    <Mainfooter></Mainfooter>
  </div>
</template>



<script>
import Vue from 'vue'
import Mainheader from './Maincomponents/Mainheader'
import Mainbander from './Maincomponents/Mainbander'
import Mainbox from './Maincomponents/Mainbox'
import Mainfooter from './Maincomponents/Mainfooter'
import Mainkuaibao from './Maincomponents/Mainkuaibao'
import List01 from './Maincomponents/List01'
import Maintese from './Maincomponents/Maintese'
import Shop from './Maincomponents/Shop'


export default {
    name:'main',
    components:{
        Mainheader,
        Mainbander,
        Mainbox,
        Mainfooter,
        Mainkuaibao,
        List01,
        Maintese,
        Shop
    }
}



</script>










<style>

</style>

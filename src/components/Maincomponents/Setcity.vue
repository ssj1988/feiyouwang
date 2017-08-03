<template lang="html">
    <div class="list-city">
        <mt-header title="省份选择" id="list-city-title">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <mt-index-list>
          <mt-index-section index="A">
            <mt-cell title="安徽"></mt-cell>
          </mt-index-section>
          <mt-index-section index="B">
            <mt-cell title="北京"></mt-cell>
          </mt-index-section>
          <mt-index-section index="C">
            <mt-cell title="重庆"></mt-cell>
          </mt-index-section>
          <mt-index-section index="F">
            <mt-cell title="福建"></mt-cell>
          </mt-index-section>
          <mt-index-section index="G">
            <mt-cell title="甘肃"></mt-cell>
            <mt-cell title="广东"></mt-cell>
            <mt-cell title="广西"></mt-cell>
            <mt-cell title="贵州"></mt-cell>
          </mt-index-section>
          <mt-index-section index="H">
            <mt-cell title="海南"></mt-cell>
            <mt-cell title="河北"></mt-cell>
            <mt-cell title="河南"></mt-cell>
            <mt-cell title="黑龙江"></mt-cell>
            <mt-cell title="湖北"></mt-cell>
            <mt-cell title="湖南"></mt-cell>
          </mt-index-section>
          <mt-index-section index="J">
            <mt-cell title="吉林"></mt-cell>
            <mt-cell title="江苏"></mt-cell>
          </mt-index-section>
          <mt-index-section index="L">
            <mt-cell title="辽宁"></mt-cell>
          </mt-index-section>
          <mt-index-section index="N">
            <mt-cell title="宁夏"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Q">
            <mt-cell title="青海"></mt-cell>
          </mt-index-section>
          <mt-index-section index="S">
            <mt-cell title="山东"></mt-cell>
            <mt-cell title="上海"></mt-cell>
          </mt-index-section>
          <mt-index-section index="T">
            <mt-cell title="天津"></mt-cell>
          </mt-index-section>
          <mt-index-section index="X">
            <mt-cell title="新疆"></mt-cell>
            <mt-cell title="西藏"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Y">
            <mt-cell title="云南"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Z">
            <mt-cell title="浙江"></mt-cell>
          </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
import Vue from 'vue'
import { IndexList, IndexSection } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
    name:'setcity'
}
</script>

<style scoped lang="scss">
    .list-city{
        z-index: 100000;
        background-color: #fff;
        #list-city-title{
            color: #000000;
            background-color: #dbe2e8;
        }
    }



</style>

import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Fenlei from '@/components/Fenlei'
import Huodong from '@/components/Huodong'
import Gouwuche from '@/components/Gouwuche'
import Mine from '@/components/Mine'
import Setcity from '@/components/Maincomponents/Setcity'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Mainsousuo from '@/components/Maincomponents/Mainsousuo'
import Liebiao from '@/components/Liebiao'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/main"},
    {path:'*',redirect:"/main"},
    {
        path:'/main',
        name:'main',
        component:Main,
        children:[
            {path:'/main/setcity',name:'setcity',component:Setcity}
        ]
    },
    {path:'/fenlei',name:'fenlei',component:Fenlei},
    {path:'/huodong',name:'huodong',component:Huodong},
    {path:'/gouwuche',name:'gouwuche',component:Gouwuche},
    {path:'/mine',name:'Mine',component:Mine},
    {path:'/login',name:'Login',component:Login},
    {path:'/register',name:'Register',component:Register},
    {path:'/mainsousuo',name:'mainsousuo',component:Mainsousuo},
     {path:'/liebiao/:id',name:'Liebiao',component:Liebiao},
    {path:'/detail/:id/post/title',name:'Detail',component:Detail}
  ]
})

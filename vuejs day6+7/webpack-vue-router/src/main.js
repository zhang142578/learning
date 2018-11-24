

import Vue from '../node_modules/vue/dist/vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app from './app.vue'//导入 app 组件
import account from './main/Account.vue'
import goodlist from './main/Goodlist.vue'



var router=new VueRouter({
    routes:[
        {path:"/account",component:account},
        {path:"/goodlist",component:goodlist}
    ]
})


var vm = new Vue({
    el:"#app",
    data:{
        msg:"123"
    },
    render: c => c(app),
    /*components:{
        app
    },*/
    router
})
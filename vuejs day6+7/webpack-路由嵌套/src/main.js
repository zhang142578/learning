

import Vue from '../node_modules/vue/dist/vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app from './app.vue'//导入 app 组件

import router from './router.js'

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
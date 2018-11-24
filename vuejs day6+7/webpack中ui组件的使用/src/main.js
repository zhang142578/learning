

import Vue from '../node_modules/vue/dist/vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'

import app from './app.vue'//导入 app 组件

import router from './router.js'

import './css/app.css'

//导入MUI样式表 和BOOTSTRAP用法无差别
import './lib/mui/css/mui.css'

//导入 mintui
/*import MintUI from 'mint-ui' // 把所有的组件都导入进来
import 'mint-ui/lib/style.css'

Vue.use(MintUI) // 把 所有的组件注册为全局的组件*/


//按需导入 Mint-UI 组件
import {Button} from "mint-ui"

//使用 Vue.component注册组件

Vue.component(Button.name, Button);


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
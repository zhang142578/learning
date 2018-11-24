//在webpack构建项目中，使用VUE进行开发

//复习：1.使用script标签引入 VUE 的包
//     2.创建一个ID为app的DIV容器
//     3.通过 new Vue得到一个VM实例




//  在webpack中 尝试使用VUE：
//  注意： 在webpack中 使用 import 导入的Vue构造函数 功能不完整 只提供 了 runtime-only 的方式  并没有提供 网页中的方式

/*import Vue from 'vue'*/
import Vue from '../node_modules/vue/dist/vue'

// 默认 webpack 无法 打包.vue文件 需要 npm i vue-loader  vue-template-compiler -D
//  配置文件中  要新增 loader配置项 {test:/\.vue$/,use:"vue-loader"}


// 包的查找规则：
// 1.找项目根目录中有没有 node_modules的文件夹
// 2.在node_modules中根据包名找对应的 Vue文件夹
// 3.在vue文件夹中 找一个叫做 package.json的配置文件
// 4.在package.json这个文件中  查找 一个 main属性【main属性指定了这个包在被加载时候，的入口文件】



// 1.导入login组件
import login from "./login.vue"

import m1,{title,content} from './test.js'

console.log(m1)
console.log(title+"----"+content)
/*var login={
    template:"<h1>这是login组件</h1>"
}*/
var vm = new Vue({
    el:"#app",
    data:{
        msg:"123"
    },
    /*render:function(ce){
        return ce(login);
    },*/
    components:{
        login
    }
})
// js入口文件

//1 . 导入jquery
// import *** from *** 是es6中导入模块的方式
import $ from 'jquery'
//使用import语法导入css样式表
import './css/index.css'
import './css/index1.less'
import './css/index2.scss'
//webpack默认只能打包JS文件
//如果要处理非JS文件 我们要手动安装一些合适的第三方loader加载器；
//1.如果想要css文件 需要安装npm install style-loader css-loader -D
//2.打开 webpack.config .js 文件 新增一个配置节点 叫做 module 是个对象， 在这个module对象上
// 有个rules属性 这个rules属性 是个 数组；这个数组中存放了 所有第三方文件的匹配和处理规则
$(function () {
    $('li:odd').css('backgroundColor','grey')
    $('li:even').css('backgroundColor',function () {
        return '#'+'D97634'
    })
})
/* 注意： webpack 处理 第三方文件类型的过程
*  1.发现这个 要处理的文件不是 JS文件 然后就去 配置文件中 查找有没有 对应的第三方对应的loader规则
*  2.如果能找到对应的规则，就会调用 对应的loader 处理 这种类型文件
*  3.在调用loader的时候 是从后往前调用的
*  4.当最后一个loader 调用完毕， 会把处理的结果 直接交给 webpack 进行 打包合并， 最终会输出到 bundle.js中去
* */
console.log('ok')

import './css/index.css'

import './css/box.scss'

//注意  如果要通过路径的形式 引入 node_modules中相关的文件 可以直接省略 路径前面的node_modules这一层目录 直接 写包
//的名称 后面跟上具体的文件路径
import 'bootstrap/dist/css/bootstrap.css'

class Person{
    static info={name:'zs',age:20}
    //使用static 关键字 可以定义静态属性
    //所谓静态属性 就是 可以直接通过 类名，直接访问的属性
    //实例属性：只能通过类的实例来访问的属性 叫做实例属性
}
//class是从后端语言中借鉴过来的 用来实现面向对象
console.log(Person.info)
//在 webpack中 默认只能处理一部分ES6的新语法 一些更高级的ES6语法或者ES7语法 webpack处理不了
// 这时候 就需要 借助于第三方的loader来帮助webpack处理这些高级的语法， 当第三方loader把高级语法
//转为低级的语法之后 会把结果 交给webpack 去打包到bundle.js 中
//通过 Babel 可以帮我们将 高级的语法 转换为 低级的语法
//1.在webpack中 可以 运行如下两套命令 安装两套包 去安装babel相关的loader功能

// 1.1第一套包：
// npm i babel-core babel-loader babel-plugin-transform-runtime -D
// 1.2第二套包：
// npm i babel-preset-env babel-preset-stage-0 -D

// 2. 打开webpack 配置文件 在 module节点下的rules数组中 添加一个新的匹配规则
//  2.1 {test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'}
//  2.2 注意 ： 在配置babel 的loader 规则的时候 必须把 node_modules  目录 通过exclude选项排除掉
// 原因：
//   2.2.1 如果不排除 node_modules 则babel会把node_modules 中所有第三方 JS 文件 都打包编译
//   2.2.2  哪怕最终把所有Node_modules  中JS文件打包编译了  但是 项目最终也无法正常运行
//  3.  在项目的根目录中 新建一个叫做 .babelrc 的babel配置文件 这个配置文件 属于JSON 格式，所以
// 在写.babelrc配置的时候 必须符合 JSON 语法规范 不能写注释 字符串必须 用双引号
//  3.1   在.babelrc写如下的配置
//          {
//              "presets":["env",""stage-0"]
//              "plugins":["transform-runtime"]
//          }

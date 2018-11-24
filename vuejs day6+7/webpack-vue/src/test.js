//这是node中 向外暴露成员的方式

/*module.exports={}*/

//  在ES6中 也通过 规范的形式，规定了ES6 中 如何导入和导出模块
//  在ES6中 使用 import 模块名称 from ‘模块标识符’ import ‘标识路径’
//  在ES6中 使用 export default{} 和 export向外暴露成员

var m22={
    name:"zs",
    age:20
}

export default m22;
/*export default {
    address:"beijing"
}*/
// 在node中 使用 var 名称 = require （“模块标识符”）
// module.exports和exports 来暴露成员

// 注意  export default 向外暴露的成员 可以用任意的变量来接收
//      在一个模块中 export default只允许向外暴露一次
//      在一个模块中 可以同时使用 export default 和 export同时向外暴露成员



export var title="星星"
export var content="哈哈哈"
// 注意 使用 export 向外暴露的成员 只能使用{}的形式来接收 这种形式叫做 【按需导出】
//     export可以向外暴露多个成员，同时，如果 某些成员 我们在import 的时候 不需要  则可以不再{}中定义
//     使用export暴露的成员 必须严格按照导出的名称来接收
// 封装一个方法，给一个路径 这个方法可以读取到文件 并返回内容
const fs= require("fs")
const path= require("path")

// fs.readFile(path.join(__dirname,"./1.txt"),"utf-8",(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

//给定路径 返回内容
// 可以规定一下 callback中有两个参数 第一个参数是 失败的结果 第二个是参数是成功的结果；

// 同事 规定 ： 如果成功后 返回的结果 应该位于 callback 参数的第二个位置， 此时 ，第一个位置 由于没有出错 所以第一个放null 如果失败了
// 第一个放ERROR对象  第二个放一个undefined
function getFlieByPath(fpath,callback){
    fs.readFile(fpath,"utf-8",(err,data)=>{
//如果报错  进入if分支后  if后面的代码就没有必要执行了
        
        if(err) return callback(err)
        callback(null,data)
    })
}

getFlieByPath(path.join(__dirname,"./1.txt"),(err,data)=>{
    // console.log(data)
    if(err) return console.log(err.message)
    console.log(data)
})
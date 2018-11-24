const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')

//当以命令行 运行 webpack 或 webpack-dev-server 的时候 工具会发现  我们并没有提供 要打包的文件的入口文件和出口文件
// 此时 他会检查项目根目录中的配置文件 并读取这个文件， 就拿到了 导出的这个 配置对象 然后根据 这个对象 进行打包构建
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output: {
        path:path.join(__dirname,'./dist'),
        filename: "bundle.js"
    },
    mode:"development",
    plugins: [
        //所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
            filename:'index.html'//设置生成的内存页面的名称
        })],
    module: {
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},//这是配置处理.css文件的第三方loader 规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//这是配置处理.less文件的第三方loader规则
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:"url-loader?limit=8650&name=[name].[ext]"},
            {test:/\.(ttf|eot|woff|woff2|svg)$/,use:"url-loader"},//处理字体文件
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/}
        ]
    }
}
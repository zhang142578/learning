<template>
    <div>
        <h1>这是登录组件 使用.vue文件定义 --- {{msg}}</h1>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:"123"
            }
        },
        methods:{
            show(){
                console.log("调用了 login.vue 中的 show 方法")
            }
        }
    }
</script>
<style>

</style>
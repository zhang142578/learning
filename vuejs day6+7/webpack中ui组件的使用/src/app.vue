<template>
    <div>
        <h1>这是app组件</h1>


        <!--为什么这里叫做 mt-button 的button 可以直接用-->
        <mt-button @click="show" icon="more" type="danger" size="large">default</mt-button>
        <mt-button disabled type="danger" size="small">default</mt-button>
        <mt-button plain type="danger" size="normal">default</mt-button>



        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>



        <router-link to="/account">Account</router-link>
        <router-link to="/goodlist">Goodlist</router-link>

        <router-view></router-view>

    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        //按需导入toast组件

        data(){
            return{
                toastInstanse:null,
            }
        },
        created(){
          this.getList();
        },
        methods:{
            getList(){//模拟获取列表的一个AJAX方法
                this.show();

                setTimeout( ()=> {
                    //当数据回来之后 要把Toast移除
                    this.toastInstanse.close()
                },3000)
            },
            show(){
                //Toast("提示信息")
                this.toastInstanse=Toast({
                    message:"这是消息",
                    duration:-1,
                    position:"top",
                    iconClass: 'glyphicon glyphicon-heart',//设置图标的类
                    className:"mytoast"//自定义TOAST样式，需要自己提供一个类名
                })
            }
        }
    }
</script>
<style>

</style>
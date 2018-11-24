import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodlist from './main/Goodlist.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'



var router=new VueRouter({
    routes:[
        {path:"/account",
            children:[
                {path:"/",redirect:"login"},
                {path:"login",component:login}  ,
                {path:"register",component:register}
            ],
            component:account},
        {path:"/goodlist",component:goodlist}
    ]
})

// 吧路由对象 暴露出去
export default router
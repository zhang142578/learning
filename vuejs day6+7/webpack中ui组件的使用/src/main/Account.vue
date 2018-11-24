<template>
    <div id="acc">
        <h1 class="modal-title">这是Account组件</h1>

        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>
    </div>
</template>
<script>

</script>
<style lang="css" scoped>
    /*普通的style标签只支持普通的样式 如果 想要启用 scss 或less，需要为 style元素 设置 lang属性*/



</style>
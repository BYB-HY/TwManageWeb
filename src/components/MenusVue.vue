<template>
    <div>
        <el-submenu v-if="menu.children.length" :index="menu.dataValues.url">
            <template slot="title">
                <i :class="menu.dataValues.icon"></i>
                <span>{{menu.dataValues.name}}</span>
            </template>
            <Nav-menu v-for="(item,index) in menu.children" :key="index" :menu="item"></Nav-menu>
        </el-submenu>
        <el-menu-item v-else :index="menu.dataValues.url">
            <i :class="menu.dataValues.icon"></i>
            <span slot="title">{{menu.dataValues.name}}</span>
        </el-menu-item>
    </div>
</template>

<script>
    export default {
        name:"NavMenu",
        props:{
            menu:{
                type:Object,
                require:true
            }
        },
    }
</script>

<style lang="less" scoped>

</style>
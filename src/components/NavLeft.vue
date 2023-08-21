<template>
    <div>
        <h3 class="title">睿基办公系统</h3>
        <el-menu :router="true" background-color="#001529" text-color="#fff">
            <Menus-vue v-for="(item, index) in menuData" :key="index" :menu="item"></Menus-vue>
        </el-menu>
    </div>
</template>

<script>
import { get } from "@/utils/http"
import MenusVue from "./MenusVue.vue"
export default {
    data() {
        return {
            menuData: [],
            rolePath: []
        }
    },
    components: {
        MenusVue
    },
    created() {

        this.getMenu()

    },
    methods: {
        async getMenu() {
            //获取菜单
            const { data } = await get("/menu")
            //获取当前用户角色
            const { role } = await get("/user/role")
            for (let i = 0; i < data.length; i++) {
                if (data[i].children.length > 0) {
                    //当前路径有子路径
                    const children = data[i].children
                    const childrens = []
                    for (let j = 0; j < data[i].children.length; j++) {
                        if (this.canAccess(children[j].dataValues.url, role)) {
                            //如果路径可以访问则存起来
                            childrens.push(children[j])
                        }
                    }
                    if (childrens.length > 0) {
                        //如果有存起来的子路径存加入菜单
                        data[i].children = childrens
                        this.menuData.push(data[i])
                    }
                } else {
                    //判断当前路径，可以访问则加入菜单
                    this.canAccess(data[i].dataValues.url, role) ? this.menuData.push(data[i]) : ""
                }

            }
        },
        //判断路径是否可以访问
        canAccess(path, role) {
            const route = this.$router.options.routes[0].children.find(r => r.path === path);
            const meta = route?.meta || {};
            const roleRoute = meta.auth || [];
            return route && (roleRoute.length === 0 || roleRoute.includes(role));
        },
    }
}
</script>

<style lang="less" scoped>
.title {
    text-align: center;
    line-height: 50px;
    color: #fff;
}

.el-menu {
    border-right: 0;
}
</style>
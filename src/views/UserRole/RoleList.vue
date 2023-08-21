<template>
    <div>
        <BreadCrumb />
        <el-card>
            <el-button type="primary" @click="edit()">新建角色</el-button>
            <el-table :data="tableData" style="width: 100%" v-loading="loading" element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
                <el-table-column fixed prop="role_type" label="角色" width="150">
                </el-table-column>
                <el-table-column prop="permissions" label="权限">
                    <template slot-scope="scope">
                        <span v-for="item in scope.row.permissions" :key="item.index">{{ item.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="zip" label="备注" width="120">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
                        <el-button type="danger" size="mini" @click="deletes(scope.row.employee_id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <RoleModal :visible="visible" :permission="permission" :name="name" @hide="visible = false" @reload="loadData()" />
    </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb"
import RoleModal from "./RoleModal.vue"
import { get } from "@/utils/http"
export default {
    name: 'UserList',
    components: { BreadCrumb, RoleModal },
    data() {
        return {
            tableData: [],
            loading: false,
            visible: false,
            allPermissions: {},
            name: "",
            permission: ""
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        async getList() {
            this.loading = true;
            const res = await get('/role/get_role_permissions_list');
            this.tableData = res.dataRole;
            this.allPermissions = res.dataPermissions;
            this.loading = false;
        },
        //新建或编辑角色
        edit(row) {
            //row有值表示编辑，无值表示新建
            if (row) {
                //role_type角色名，permissions当前角色有的权限列表
                const { role_type, permissions } = row
                //可选的所有权限（allPermissions）中，当前角色有的权限checked为true，在RoleModal组件中默认勾选
                this.permission = this.allPermissions.map(item => {
                    const add = permissions.find(i => i.id === item.id);
                    if (add) {
                        return { ...item, checked: true };
                    } else {
                        return { ...item, checked: false };
                    }
                });
                this.name = role_type;
            }else {
                this.permission = this.allPermissions; this.name = ""
            }
            this.visible = true;
        },
    },
}
</script>
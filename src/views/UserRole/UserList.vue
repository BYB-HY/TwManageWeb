<template>
    <div>
        <BreadCrumb />
        <el-card>
            <el-button type="primary" @click="edit()">新建用户</el-button>
            <el-table :data="tableData" style="width: 100%" v-loading="loading" element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
                <el-table-column fixed prop="account" label="账户" width="150">
                </el-table-column>
                <el-table-column prop="name" label="昵称" width="120">
                </el-table-column>
                <el-table-column prop="role_tables" label="角色" width="120">
                </el-table-column>
                <el-table-column prop="status" label="状态" width="120">
                    <template v-slot="scope">
                        {{scope.row.status === 1 ? "开启" : "关闭"}}
                    </template>
                </el-table-column>
                <el-table-column prop="create_time" label="创建时间" width="120">
                </el-table-column>
                <el-table-column prop="memo" label="备注">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
                        <el-button type="danger" size="mini" @click="deletes(scope.row.employee_id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination class="fr mt mb" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="params.page" :page-sizes="[20, 50, 100, 200]" :page-size="params.per_page"
                layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </el-card>
        <UserModal :visible="visible" :userData="userData" @hide="visible = false" @reload="loadData()" />
    </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb"
import UserModal from "./UserModal.vue"
import { get } from "@/utils/http"
export default {
    name: 'UserList',
    components: { BreadCrumb, UserModal },
    data() {
        return {
            tableData: [],
            params: {
                searchValue: "",
                page: 1,
                per_page: 20
            },
            total: 0,
            visible: false,
            loading: false,
            userData: "",
        }
    },
    created() {
        this.getList()
    },
    methods: {
        async getList() {
            this.loading = true;
            const res = await get('/user/get_users_list', this.params);
            this.tableData = res.data.rows;
            this.total = res.data.count;
            this.loading = false;
        },
        handleSizeChange(per_page) {
            this.params.per_page = per_page;
            this.loadData()
        },
        handleCurrentChange(page) {
            this.params.page = page;
            this.loadData()
        },
        edit(row) {
            this.userData = row ? {...row} : {status:1}
            this.visible = true
        }
    },
}
</script>
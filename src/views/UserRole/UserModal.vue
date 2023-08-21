<template>
    <div>
        <!-- 修改密码，修改账户，昵称，修改角色，修改状态，修改备注 -->
        <el-dialog :title="title" :visible="visible" width="50%" :before-close="close">
            <el-row :gutter="20">
                <el-form :model="ruleForm" label-width="80px" :rules="rules" ref="ruleform">
                    <el-col :span="12">
                        <el-form-item label="账户" prop="account">
                            <el-input v-model="ruleForm.account"></el-input>
                        </el-form-item>
                        <el-form-item label="昵称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="角色" prop="role_tables">
                                <el-select v-model="ruleForm.role_tables" placeholder="请选择">
                                    <el-option v-for="item in roleList" :key="item.id" :label="item.role_type"
                                        :value="item.role_type">
                                    </el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item label="状态" prop="status">
                            <el-switch v-model="ruleForm.status" active-color="#13ce66" inactive-color="#ff4949"  :active-value="1" :inactive-value="0">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="备注" prop="memo">
                            <el-input v-model="ruleForm.memo"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="save">保存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { post, get } from "@/utils/http"
export default {
    props: ["visible","userData"],
    data() {
        return {
            ruleForm: {
            },
            roleList: {},
            value:"",
            rules: {
                name: [{ required: true, message: "不能为空", trigger: "blur" }],
            },
            title: "新建订单",
        }
    },
    mounted() {
        this.getRoleList();
    },
    methods: {
        async getRoleList() {
            const res = await get('/role/get_role_permissions_list');
            this.roleList = res.dataRole
        },
        close() {
            this.$emit("hide")
        },
        save() {
            this.$refs.ruleform.validate((vaild) => {
                if (vaild) {
                    const id = this.ruleForm.employee_id
                    if (id) {
                        post(`/employees/${id}`, this.ruleForm).then(() => {
                            console.log(this.$notify, this)
                            this.$notify({
                                title: '操作成功',
                                type: 'success'
                            });
                            this.close();
                            this.$emit("reload")
                        })
                    } else {
                        post("/employees/entry", this.ruleForm).then(() => {
                            this.$notify({
                                title: '操作成功',
                                type: 'success'
                            });
                            this.close();
                            this.$emit("reload")
                        })
                    }
                }
            })
        }
    },
    watch: {
        userData() {
            this.title = this.userData.account ? "编辑信息" : "新建用户"
            this.ruleForm = this.userData
        }
    },
}
</script>

<style lang="less" scoped></style>
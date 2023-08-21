<template>
        <el-dialog :title="title" :visible="visible" width="50%" :before-close="close" >
            <div>角色：<el-input v-model="name2" placeholder="请输入名称"></el-input></div>
            <el-checkbox v-for="item in permission" :key="item.id" v-model="item.checked" :label="item.name" border></el-checkbox>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="save">保存</el-button>
            </span>
        </el-dialog>
</template>

<script>
import { post } from "@/utils/http"
export default {
    props: ["visible", "name","permission"],
    data() {
        return {
            title: "",
            name2:"",
        }
    },
    watch: {
        visible() {
            
            // this.name2 = this.visible ? this.name : ""
            this.ruleForm = this.row
        },
        name(){
            this.title = this.name ? "编辑权限" : "新建角色"
            this.name2 = this.name
        }
    },
    methods: {
        close() {
            this.$emit("hide")
        },
        save() {
            this.$refs.ruleform.validate((vaild) => {
                if (vaild) {
                    const id = this.ruleForm.employee_id
                    if (id) {
                        post(`/employees/${id}`, this.ruleForm).then(() => {
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
        },
    }
}
</script>

<style lang="less" scoped></style>
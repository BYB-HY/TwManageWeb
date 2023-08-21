<template>
    <div>
        <el-dialog :title="title" :visible="visible" width="50%" :before-close="handleClose">
            <el-row :gutter="20">
                <el-form :model="ruleForm" label-width="80px" :rules="rules" ref="ruleform">
                    <el-col :span="12">
                        <el-form-item label="资产编号" prop="asset_number">
                            {{ ruleForm.asset_number }}
                        </el-form-item>
                        <el-form-item label="资产类型" prop="asset_type">
                            <el-input v-model="ruleForm.asset_type"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="使用人" prop="landline_phone">
                            <el-input v-model="ruleForm.landline_phone"></el-input>
                        </el-form-item> -->
                        <el-form-item label="入库时间" prop="entry_time">
                            <el-input v-model="ruleForm.entry_time"></el-input>
                        </el-form-item>
                        <el-form-item label="出库时间" prop="exit_time">
                            <el-input v-model="ruleForm.exit_time"></el-input>
                        </el-form-item>
                        <el-form-item label="备注" prop="remarks">
                            <el-input v-model="ruleForm.remarks"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="资产品牌" prop="brand">
                            <el-input v-model="ruleForm.begin_date"></el-input>
                        </el-form-item>
                        <el-form-item label="品牌" prop="brand">
                            <el-input v-model="ruleForm.brand"></el-input>
                        </el-form-item>
                        <el-form-item label="资产型号" prop="model">
                            <el-input v-model="ruleForm.model"></el-input>
                        </el-form-item>
                        <el-form-item label="CPU" prop="cpu">
                            <el-input v-model="ruleForm.cpu"></el-input>
                        </el-form-item>
                        <el-form-item label="内存" prop="memory">
                            <el-input v-model="ruleForm.memory"></el-input>
                        </el-form-item>
                        <el-form-item label="显卡" prop="model">
                            <el-input v-model="ruleForm.model"></el-input>
                        </el-form-item>
                        <el-form-item label="硬盘" prop="price">
                            <el-input v-model="ruleForm.email"></el-input>
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
import {post} from "@/utils/http"
import { mapState, mapMutations } from "vuex"
    export default {
        props:["visible",'assetDetail'],
        data(){
            return{
                ruleForm:{
                },
                title:"资产详情",
            }
        },
        computed:{
            ...mapState(["row"])
        },
        watch:{
            visible(){
                this.ruleForm=this.assetDetail
            }
        },
        methods:{
            ...mapMutations(["clearRow"]),
            close(){
                this.$refs.ruleform.resetFields()
                this.$emit("hide")
                this.clearRow()
            },
            save(){
                this.$refs.ruleform.validate((vaild)=>{
                    if(vaild){
                        const id = this.ruleForm.employee_id
                        if(id){
                                post(`/employees/${id}`,this.ruleForm).then(()=>{
                                    console.log(this.$notify,this)
                                this.$notify({
                                    title: '操作成功',
                                    type: 'success'
                                });
                                this.close();
                                this.$emit("reload")
                            })
                        } else {
                            post("/employees/entry",this.ruleForm).then(()=>{
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
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(() => {
                    done();
                })
                .catch(() => {});
            },
        }
    }
</script>

<style lang="less" scoped></style>
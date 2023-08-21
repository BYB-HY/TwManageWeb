<template>
    <div>
        <el-row>
            <el-col>通知公告</el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="12">
                <el-card >
                        <span>近期到期提醒</span>
                        <el-timeline class="mt_10" v-for="item in reminderList" :key="item.id">
                            <el-timeline-item :timestamp=item.expiry_date placement="top">
                                <el-card>
                                    <h4>{{ item.title }}</h4>
                                    <p>还有{{item.days_remaining}}天到期</p>
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card>
                    <el-calendar v-model="value">
                    </el-calendar>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import AnalysisIndex from "./AnalysisIndex.vue"
// import PieChart from "./PieChart.vue"
// import StatisticalData from "./StatisticalData.vue"
import { get } from "@/utils/http"
    export default {
        data() {
            return {
                value: new Date(),
                reminderList:[],
            }
        },
        // components:{
        //     AnalysisIndex,PieChart,StatisticalData
        // },
        created() {
            this.getReminderList()
        },
        methods: {
            async getReminderList() {
                const res = await get('/reminder/index')
                this.reminderList = res.data
            },
        },
    }
</script>

<style lang="less" scoped>

</style>
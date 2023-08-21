<template>
    <el-container>
        <el-aside class="mr_20" width="360px">
            <!-- 尺寸 -->
            <span>图片尺寸</span>
            <el-radio-group v-model="modelSize">
                <el-row :gutter="20">
                    <el-col :span="4" v-for="(item, index) in subSquares" :key="index">
                        <el-radio-button :label="item.label" :fill="Null">
                            <div class="sub-square">
                                <div class="main-square"
                                    :style="{ width: `${20 * item.width}px`, height: `${20 * item.height}px` }">
                                </div>
                                <span>{{ item.text }}</span>
                            </div>
                        </el-radio-button>
                    </el-col>
                </el-row>
            </el-radio-group>

            <!-- 参数 -->
            <el-form ref="form" :model="form" label-position="left" label-width="80px" class="mt_20">
                <div>模型选择</div>
                <el-form-item>
                    <el-radio v-model="form.model" label="1">MJ</el-radio>
                    <el-radio v-model="form.model" label="2">NIJI</el-radio>
                </el-form-item>
                <el-form-item label="版本">
                    <el-select v-model="form.versions" placeholder="请选择">
                        <el-option v-for="item in versionsList" :key="item" :label="item" :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="品质">
                    <el-select v-model="form.quality" placeholder="请选择">
                        <el-option v-for="item in qualityList" :key="item" :label="item" :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="混乱">
                    <el-input-number v-model="form.chaos" @change="handleChange" :min="0" :max="10" label="描述文字"></el-input-number>
                </el-form-item>
                <el-form-item label="风格化">
                    <el-input-number v-model="form.stylize" @change="handleChange" :min="0" :max="10" label="描述文字"></el-input-number>
                </el-form-item>
                <el-form-item label="携带参数">
                    <el-switch v-model="form.parameter" active-color="#13ce66" inactive-color="#ff4949">
                    </el-switch>
                </el-form-item>
            </el-form>

            <!-- 上传图片 -->
            <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        </el-aside>
        <el-main>
            <h1>Midjourney</h1>
            <div>
                <el-row class="mt_20 mb_10">
                    <el-col :span="16">
                        你想生成什么图像
                    </el-col>
                    <el-col :span="4">
                        <el-button>翻译</el-button>
                    </el-col>
                    <el-col :span="4">
                        <el-button>联想</el-button>
                    </el-col>
                </el-row>
                <el-input type="textarea" :rows="10" placeholder="请输入你想生成的图像描述" v-model="describe">
                </el-input>
            </div>
            <div>
                <div class="mt_20 mb_20">不需要的元素</div>
                <el-input type="textarea" :rows="10" placeholder="请输入图像中你不想要的元素（例如上面你在绘画一个房间、下面可以填写我不要床）"
                    v-model="excludedElement">
                </el-input>
                <el-button>提交绘画任务</el-button>
            </div>
            <div>工作中的内容</div>
            <div>
                <span>我的绘制历史</span>
                <span>点击下图的编号按钮以获取升级版（U:放大图片更细节）或变化版（V：在此基础上变体）</span>
                <el-row>
                    <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                            <div style="padding: 14px;">
                                <el-row>
                                    <el-col :span="8"><el-tag type="success">成功</el-tag></el-col>
                                    <el-col :span="16">
                                        <div class="bottom clearfix">
                                            <el-button type="text" class="button">使用</el-button>
                                            <el-button type="text" class="button">下载</el-button>
                                            <el-button type="text" class="button">删除</el-button>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image">
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-main>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            modelSize: '',
            form: {
                model: '',
                versions: '',
                quality: '',
                chaos: '',
                stylize: '',
                parameter:true
            },
            versionsList:[5.12],
            qualityList:["高清"],
            subSquares: [
                { width: 1, height: 1, label: 1, text: "1:1" },
                { width: 1, height: 3 / 4, label: 2, text: "4:3" },
                { width: 3 / 4, height: 1, label: 3, text: "3:4" },
                { width: 1, height: 9 / 16, label: 4, text: "16:9" },
                { width: 9 / 16, height: 1, label: 5, text: "9:16" },
            ],
            describe: "",
            excludedElement: "",
        }
    }
}                     
</script>
<style scoped>
.sub-square {
    width: 10px;
    height: 40px;
}

.main-square {
    border: 2px solid #000;
}
</style>
"use strict";(self["webpackChunkmanage"]=self["webpackChunkmanage"]||[]).push([[971],{833:function(e,l,r){r.d(l,{Z:function(){return m}});var t=function(){var e=this,l=e._self._c;return l("div",[l("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.breadList,(function(r,t){return l("el-breadcrumb-item",{key:t},[e._v(e._s(r))])})),1)],1)},a=[],o={data(){return{breadList:[]}},created(){this.getBreadCrumb()},watch:{$route(){this.getBreadCrumb()}},methods:{getBreadCrumb(){this.breadList=this.$route.meta.bread||[]}}},s=o,u=r(1001),n=(0,u.Z)(s,t,a,!1,null,"5fe194f7",null),m=n.exports},9971:function(e,l,r){r.r(l),r.d(l,{default:function(){return c}});var t=function(){var e=this,l=e._self._c;return l("div",[l("Bread-Crumb"),l("el-card",[l("el-form",{staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"资产编号",prop:"asset_number"}},[l("el-input",{model:{value:e.ruleForm.asset_number,callback:function(l){e.$set(e.ruleForm,"asset_number",l)},expression:"ruleForm.asset_number"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"资产类型",prop:"asset_type"}},[l("el-input",{model:{value:e.ruleForm.asset_type,callback:function(l){e.$set(e.ruleForm,"asset_type",l)},expression:"ruleForm.asset_type"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"资产品牌",prop:"brand"}},[l("el-input",{model:{value:e.ruleForm.brand,callback:function(l){e.$set(e.ruleForm,"brand",l)},expression:"ruleForm.brand"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"资产型号",prop:"model"}},[l("el-input",{model:{value:e.ruleForm.model,callback:function(l){e.$set(e.ruleForm,"model",l)},expression:"ruleForm.model"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"使用人",prop:"employee_id"}},[l("el-input",{model:{value:e.ruleForm.employee_id,callback:function(l){e.$set(e.ruleForm,"employee_id",l)},expression:"ruleForm.employee_id"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"内存",prop:"memory"}},[l("el-input",{model:{value:e.ruleForm.memory,callback:function(l){e.$set(e.ruleForm,"memory",l)},expression:"ruleForm.memory"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"cpu",prop:"cpu"}},[l("el-input",{model:{value:e.ruleForm.cpu,callback:function(l){e.$set(e.ruleForm,"cpu",l)},expression:"ruleForm.cpu"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"货物单位",prop:"name"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),l("el-form-item",{attrs:{label:"购买时间等于入库时间",prop:"entry_time"}},[l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),l("span",[e._v(" - ")]),l("el-time-picker",{attrs:{placeholder:"选择时间"},model:{value:e.time,callback:function(l){e.time=l},expression:"time"}})],1),l("el-form-item",{attrs:{label:"备注",prop:"exit_record"}},[l("el-switch",{model:{value:e.value3,callback:function(l){e.value3=l},expression:"value3"}})],1),l("el-form-item",{attrs:{label:"承运方式",prop:"name"}},[l("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(l){e.radio=l},expression:"radio"}},[e._v("个人")]),l("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(l){e.radio=l},expression:"radio"}},[e._v("公司")])],1)],1),l("span",[l("el-button",{on:{click:e.close}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)},a=[],o=r(833),s=r(212),u={data(){return{ruleForm:{},rules:{},options:[],value:"",time:"",value3:!1,radio:""}},components:{BreadCrumb:o.Z},methods:{save(){(0,s.v_)("/assets/in",this.ruleForm).then((()=>{this.$message({message:"添加成功",type:"success"}).then((()=>{this.loadData}))}))},close(){}}},n=u,m=r(1001),i=(0,m.Z)(n,t,a,!1,null,"1bc7a350",null),c=i.exports}}]);
//# sourceMappingURL=971.a9caa85d.js.map
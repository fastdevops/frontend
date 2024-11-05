
<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="项目ID:" prop="projectId">
          <el-input v-model="formData.projectId" :clearable="false"  placeholder="请输入项目ID" />
       </el-form-item>
        <el-form-item label="构建号:" prop="buildNumber">
          <el-input v-model="formData.buildNumber" :clearable="false"  placeholder="请输入构建号" />
       </el-form-item>
        <el-form-item label="分支名:" prop="branchName">
          <el-input v-model="formData.branchName" :clearable="false"  placeholder="请输入分支名" />
       </el-form-item>
        <el-form-item label="提交ID:" prop="commitId">
          <el-input v-model="formData.commitId" :clearable="false"  placeholder="请输入提交ID" />
       </el-form-item>
        <el-form-item label="状态:" prop="status">
          <el-input v-model="formData.status" :clearable="false"  placeholder="请输入状态" />
       </el-form-item>
        <el-form-item label="开始时间:" prop="startTime">
          <el-date-picker v-model="formData.startTime" type="date" placeholder="选择日期" :clearable="false"></el-date-picker>
       </el-form-item>
        <el-form-item label="结束时间:" prop="endTime">
          <el-date-picker v-model="formData.endTime" type="date" placeholder="选择日期" :clearable="false"></el-date-picker>
       </el-form-item>
        <el-form-item label="耗时:" prop="duration">
          <el-input v-model.number="formData.duration" :clearable="false" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="错误:" prop="error">
          <el-input v-model="formData.error" :clearable="false"  placeholder="请输入错误" />
       </el-form-item>
        <el-form-item label="日志:" prop="logs">
          <el-input v-model="formData.logs" :clearable="false"  placeholder="请输入日志" />
       </el-form-item>
        <el-form-item label="构建类型:" prop="buildType">
          <el-input v-model="formData.buildType" :clearable="true"  placeholder="请输入构建类型" />
       </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {
  createCicd,
  updateCicd,
  findCicd
} from '@/api/cicd/cicd'

defineOptions({
    name: 'CicdForm'
})

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'


const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            projectId: '',
            buildNumber: '',
            branchName: '',
            commitId: '',
            status: '',
            startTime: new Date(),
            endTime: new Date(),
            duration: 0,
            error: '',
            logs: '',
            buildType: '',
        })
// 验证规则
const rule = reactive({
               projectId : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               branchName : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               commitId : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               status : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findCicd({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createCicd(formData.value)
               break
             case 'update':
               res = await updateCicd(formData.value)
               break
             default:
               res = await createCicd(formData.value)
               break
           }
           if (res.code === 0) {
             ElMessage({
               type: 'success',
               message: '创建/更改成功'
             })
           }
       })
}

// 返回按钮
const back = () => {
    router.go(-1)
}

</script>

<style>
</style>
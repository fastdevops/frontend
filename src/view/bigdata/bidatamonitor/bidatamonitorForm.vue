
<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="节点名称:" prop="nodeName">
          <el-input v-model="formData.nodeName" :clearable="false"  placeholder="请输入节点名称" />
       </el-form-item>
        <el-form-item label="组件名称:" prop="componentName">
          <el-input v-model="formData.componentName" :clearable="false"  placeholder="请输入组件名称" />
       </el-form-item>
        <el-form-item label="组件状态:" prop="componentStatus">
          <el-input v-model="formData.componentStatus" :clearable="false"  placeholder="请输入组件状态" />
       </el-form-item>
        <el-form-item label="服务器CPU:" prop="serverCPU">
          <el-input v-model="formData.serverCPU" :clearable="false"  placeholder="请输入服务器CPU" />
       </el-form-item>
        <el-form-item label="服务器内存:" prop="serverMemory">
          <el-input v-model="formData.serverMemory" :clearable="false"  placeholder="请输入服务器内存" />
       </el-form-item>
        <el-form-item label="服务器磁盘:" prop="serverDisk">
          <el-input v-model="formData.serverDisk" :clearable="false"  placeholder="请输入服务器磁盘" />
       </el-form-item>
       <el-form-item label="组件说明:"  prop="comment" >
         <el-input v-model="formData.comment" :clearable="true"  placeholder="请输入组件说明" />
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
  createBigdataMonitor,
  updateBigdataMonitor,
  findBigdataMonitor
} from '@/api/bigdata/bidatamonitor'

defineOptions({
    name: 'BigdataMonitorForm'
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
            nodeName: '',
            componentName: '',
            componentStatus: '',
            serverCPU: '',
            serverMemory: '',
            serverDisk: '',
        })
// 验证规则
const rule = reactive({
               nodeName : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               componentName : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               componentStatus : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               serverCPU : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               serverMemory : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               serverDisk : [{
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
      const res = await findBigdataMonitor({ ID: route.query.id })
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
               res = await createBigdataMonitor(formData.value)
               break
             case 'update':
               res = await updateBigdataMonitor(formData.value)
               break
             default:
               res = await createBigdataMonitor(formData.value)
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
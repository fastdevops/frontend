
<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="服务器名:" prop="serverName">
          <el-input v-model="formData.serverName" :clearable="false"  placeholder="请输入服务器名" />
       </el-form-item>
        <el-form-item label="服务器类型:" prop="serverType">
           <el-select v-model="formData.serverType" placeholder="请选择服务器类型" style="width:100%" :clearable="false" >
              <el-option v-for="(item,key) in system TypeOptions" :key="key" :label="item.label" :value="item.value" />
           </el-select>
       </el-form-item>
        <el-form-item label="位置:" prop="location">
          <el-input v-model="formData.location" :clearable="false"  placeholder="请输入位置" />
       </el-form-item>
        <el-form-item label="IP地址:" prop="ip">
          <el-input v-model="formData.ip" :clearable="false"  placeholder="请输入IP地址" />
       </el-form-item>
        <el-form-item label="状态:" prop="status">
          <el-input v-model="formData.status" :clearable="false"  placeholder="请输入状态" />
       </el-form-item>
        <el-form-item label="描述:" prop="description">
          <el-input v-model="formData.description" :clearable="false"  placeholder="请输入描述" />
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
  createServerInfo,
  updateServerInfo,
  findServerInfo
} from '@/api/hosts/serverInfo'

defineOptions({
    name: 'ServerInfoForm'
})

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'


const route = useRoute()
const router = useRouter()

const type = ref('')
const system TypeOptions = ref([])
const formData = ref({
            serverName: '',
            serverType: '',
            location: '',
            ip: '',
            status: '',
            description: '',
        })
// 验证规则
const rule = reactive({
               serverName : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               serverType : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               ip : [{
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
      const res = await findServerInfo({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
    system TypeOptions.value = await getDictFunc('system Type')
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createServerInfo(formData.value)
               break
             case 'update':
               res = await updateServerInfo(formData.value)
               break
             default:
               res = await createServerInfo(formData.value)
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
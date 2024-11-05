
<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="标题:" prop="title">
          <el-input v-model="formData.title" :clearable="true"  placeholder="请输入标题" />
       </el-form-item>
        <el-form-item label="介绍:" prop="介绍">
          <el-input v-model="formData.介绍" :clearable="true"  placeholder="请输入介绍" />
       </el-form-item>
        <el-form-item label="价格:" prop="price">
          <el-input-number v-model="formData.price" :precision="2" :clearable="true"></el-input-number>
       </el-form-item>
        <el-form-item label="内容:" prop="info">
          <SelectFile v-model="formData.info" />
       </el-form-item>
        <el-form-item label="封面:" prop="pic">
          <SelectImage v-model="formData.pic" file-type="image"/>
       </el-form-item>
        <el-form-item label="书籍类型:" prop="type">
           <el-select v-model="formData.type" placeholder="请选择书籍类型" style="width:100%" :clearable="true" >
              <el-option v-for="(item,key) in book_typeOptions" :key="key" :label="item.label" :value="item.value" />
           </el-select>
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
  createStudyBook,
  updateStudyBook,
  findStudyBook
} from '@/api/study/studyBook'

defineOptions({
    name: 'StudyBookForm'
})

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
// 图片选择组件
import SelectImage from '@/components/selectImage/selectImage.vue'
// 文件选择组件
import SelectFile from '@/components/selectFile/selectFile.vue'


const route = useRoute()
const router = useRouter()

const type = ref('')
const book_typeOptions = ref([])
const formData = ref({
            title: '',
            介绍: '',
            price: 0,
            info: [],
            pic: "",
            type: '',
        })
// 验证规则
const rule = reactive({
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findStudyBook({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
    book_typeOptions.value = await getDictFunc('book_type')
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createStudyBook(formData.value)
               break
             case 'update':
               res = await updateStudyBook(formData.value)
               break
             default:
               res = await createStudyBook(formData.value)
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
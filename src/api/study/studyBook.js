import service from '@/utils/request'
// @Tags StudyBook
// @Summary 创建学习书籍
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.StudyBook true "创建学习书籍"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /studyBook/createStudyBook [post]
export const createStudyBook = (data) => {
  return service({
    url: '/studyBook/createStudyBook',
    method: 'post',
    data
  })
}

// @Tags StudyBook
// @Summary 删除学习书籍
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.StudyBook true "删除学习书籍"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /studyBook/deleteStudyBook [delete]
export const deleteStudyBook = (params) => {
  return service({
    url: '/studyBook/deleteStudyBook',
    method: 'delete',
    params
  })
}

// @Tags StudyBook
// @Summary 批量删除学习书籍
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除学习书籍"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /studyBook/deleteStudyBook [delete]
export const deleteStudyBookByIds = (params) => {
  return service({
    url: '/studyBook/deleteStudyBookByIds',
    method: 'delete',
    params
  })
}

// @Tags StudyBook
// @Summary 更新学习书籍
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.StudyBook true "更新学习书籍"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /studyBook/updateStudyBook [put]
export const updateStudyBook = (data) => {
  return service({
    url: '/studyBook/updateStudyBook',
    method: 'put',
    data
  })
}

// @Tags StudyBook
// @Summary 用id查询学习书籍
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.StudyBook true "用id查询学习书籍"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /studyBook/findStudyBook [get]
export const findStudyBook = (params) => {
  return service({
    url: '/studyBook/findStudyBook',
    method: 'get',
    params
  })
}

// @Tags StudyBook
// @Summary 分页获取学习书籍列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取学习书籍列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /studyBook/getStudyBookList [get]
export const getStudyBookList = (params) => {
  return service({
    url: '/studyBook/getStudyBookList',
    method: 'get',
    params
  })
}

// @Tags StudyBook
// @Summary 不需要鉴权的学习书籍接口
// @accept application/json
// @Produce application/json
// @Param data query studyReq.StudyBookSearch true "分页获取学习书籍列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /studyBook/getStudyBookPublic [get]
export const getStudyBookPublic = () => {
  return service({
    url: '/studyBook/getStudyBookPublic',
    method: 'get',
  })
}

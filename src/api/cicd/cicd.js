import service from '@/utils/request'
// @Tags Cicd
// @Summary 创建持续集成持续部署
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Cicd true "创建持续集成持续部署"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /CICD/createCicd [post]
export const createCicd = (data) => {
  return service({
    url: '/CICD/createCicd',
    method: 'post',
    data
  })
}

// @Tags Cicd
// @Summary 删除持续集成持续部署
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Cicd true "删除持续集成持续部署"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /CICD/deleteCicd [delete]
export const deleteCicd = (params) => {
  return service({
    url: '/CICD/deleteCicd',
    method: 'delete',
    params
  })
}

// @Tags Cicd
// @Summary 批量删除持续集成持续部署
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除持续集成持续部署"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /CICD/deleteCicd [delete]
export const deleteCicdByIds = (params) => {
  return service({
    url: '/CICD/deleteCicdByIds',
    method: 'delete',
    params
  })
}

// @Tags Cicd
// @Summary 更新持续集成持续部署
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Cicd true "更新持续集成持续部署"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /CICD/updateCicd [put]
export const updateCicd = (data) => {
  return service({
    url: '/CICD/updateCicd',
    method: 'put',
    data
  })
}

// @Tags Cicd
// @Summary 用id查询持续集成持续部署
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Cicd true "用id查询持续集成持续部署"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /CICD/findCicd [get]
export const findCicd = (params) => {
  return service({
    url: '/CICD/findCicd',
    method: 'get',
    params
  })
}

// @Tags Cicd
// @Summary 分页获取持续集成持续部署列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取持续集成持续部署列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /CICD/getCicdList [get]
export const getCicdList = (params) => {
  return service({
    url: '/CICD/getCicdList',
    method: 'get',
    params
  })
}

// @Tags Cicd
// @Summary 不需要鉴权的持续集成持续部署接口
// @accept application/json
// @Produce application/json
// @Param data query cicdReq.CicdSearch true "分页获取持续集成持续部署列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /CICD/getCicdPublic [get]
export const getCicdPublic = () => {
  return service({
    url: '/CICD/getCicdPublic',
    method: 'get',
  })
}

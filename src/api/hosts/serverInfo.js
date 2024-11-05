import service from '@/utils/request'
// @Tags ServerInfo
// @Summary 创建服务器信息
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.ServerInfo true "创建服务器信息"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /SI/createServerInfo [post]
export const createServerInfo = (data) => {
  return service({
    url: '/SI/createServerInfo',
    method: 'post',
    data
  })
}

// @Tags ServerInfo
// @Summary 删除服务器信息
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.ServerInfo true "删除服务器信息"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /SI/deleteServerInfo [delete]
export const deleteServerInfo = (params) => {
  return service({
    url: '/SI/deleteServerInfo',
    method: 'delete',
    params
  })
}

// @Tags ServerInfo
// @Summary 批量删除服务器信息
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除服务器信息"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /SI/deleteServerInfo [delete]
export const deleteServerInfoByIds = (params) => {
  return service({
    url: '/SI/deleteServerInfoByIds',
    method: 'delete',
    params
  })
}

// @Tags ServerInfo
// @Summary 更新服务器信息
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.ServerInfo true "更新服务器信息"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /SI/updateServerInfo [put]
export const updateServerInfo = (data) => {
  return service({
    url: '/SI/updateServerInfo',
    method: 'put',
    data
  })
}

// @Tags ServerInfo
// @Summary 用id查询服务器信息
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.ServerInfo true "用id查询服务器信息"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /SI/findServerInfo [get]
export const findServerInfo = (params) => {
  return service({
    url: '/SI/findServerInfo',
    method: 'get',
    params
  })
}

// @Tags ServerInfo
// @Summary 分页获取服务器信息列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取服务器信息列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /SI/getServerInfoList [get]
export const getServerInfoList = (params) => {
  return service({
    url: '/SI/getServerInfoList',
    method: 'get',
    params
  })
}

// @Tags ServerInfo
// @Summary 不需要鉴权的服务器信息接口
// @accept application/json
// @Produce application/json
// @Param data query hostsReq.ServerInfoSearch true "分页获取服务器信息列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /SI/getServerInfoPublic [get]
export const getServerInfoPublic = () => {
  return service({
    url: '/SI/getServerInfoPublic',
    method: 'get',
  })
}

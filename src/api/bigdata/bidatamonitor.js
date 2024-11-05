import service from '@/utils/request'
// @Tags BigdataMonitor
// @Summary 创建大数据集群监控
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.BigdataMonitor true "创建大数据集群监控"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /bigdatamonitor/createBigdataMonitor [post]
export const createBigdataMonitor = (data) => {
  return service({
    url: '/bigdatamonitor/createBigdataMonitor',
    method: 'post',
    data
  })
}

// @Tags BigdataMonitor
// @Summary 删除大数据集群监控
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.BigdataMonitor true "删除大数据集群监控"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /bigdatamonitor/deleteBigdataMonitor [delete]
export const deleteBigdataMonitor = (params) => {
  return service({
    url: '/bigdatamonitor/deleteBigdataMonitor',
    method: 'delete',
    params
  })
}

// @Tags BigdataMonitor
// @Summary 批量删除大数据集群监控
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除大数据集群监控"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /bigdatamonitor/deleteBigdataMonitor [delete]
export const deleteBigdataMonitorByIds = (params) => {
  return service({
    url: '/bigdatamonitor/deleteBigdataMonitorByIds',
    method: 'delete',
    params
  })
}

// @Tags BigdataMonitor
// @Summary 更新大数据集群监控
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.BigdataMonitor true "更新大数据集群监控"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /bigdatamonitor/updateBigdataMonitor [put]
export const updateBigdataMonitor = (data) => {
  return service({
    url: '/bigdatamonitor/updateBigdataMonitor',
    method: 'put',
    data
  })
}

// @Tags BigdataMonitor
// @Summary 用id查询大数据集群监控
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.BigdataMonitor true "用id查询大数据集群监控"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /bigdatamonitor/findBigdataMonitor [get]
export const findBigdataMonitor = (params) => {
  return service({
    url: '/bigdatamonitor/findBigdataMonitor',
    method: 'get',
    params
  })
}

// @Tags BigdataMonitor
// @Summary 分页获取大数据集群监控列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取大数据集群监控列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /bigdatamonitor/getBigdataMonitorList [get]
export const getBigdataMonitorList = (params) => {
  return service({
    url: '/bigdatamonitor/getBigdataMonitorList',
    method: 'get',
    params
  })
}

// @Tags BigdataMonitor
// @Summary 不需要鉴权的大数据集群监控接口
// @accept application/json
// @Produce application/json
// @Param data query bigdataReq.BigdataMonitorSearch true "分页获取大数据集群监控列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /bigdatamonitor/getBigdataMonitorPublic [get]
export const getBigdataMonitorPublic = () => {
  return service({
    url: '/bigdatamonitor/getBigdataMonitorPublic',
    method: 'get',
  })
}

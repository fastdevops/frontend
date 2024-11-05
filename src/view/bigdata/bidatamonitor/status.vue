<template>
    <div class="bigdata-monitor">
      <h1>大数据集群监控</h1>
      <div v-if="loading">加载中...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <div v-for="monitor in monitors" :key="monitor.id" class="monitor-item">
          <h2>{{ monitor.name }}</h2>
          <p>状态: {{ monitor.status }}</p>
          <p>CPU 使用率: {{ monitor.cpuUsage }}%</p>
          <p>内存使用率: {{ monitor.memoryUsage }}%</p>
          <!-- 其他监控信息 -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        monitors: [],
        loading: true,
        error: null,
      };
    },
    created() {
      this.fetchMonitors();
      this.startAutoRefresh();
    },
    beforeDestroy() {
      this.stopAutoRefresh();
    },
    methods: {
      async fetchMonitors() {
        try {
          const response = await axios.get('/api/bigdatamonitor/list');
          this.monitors = response.data;
        } catch (err) {
          this.error = '获取监控数据失败: ' + err.message;
        } finally {
          this.loading = false;
        }
      },
      startAutoRefresh() {
        this.refreshInterval = setInterval(this.fetchMonitors, 5000);
      },
      stopAutoRefresh() {
        clearInterval(this.refreshInterval);
      },
    },
  };
  </script>
  
  <style scoped>
  .bigdata-monitor {
    padding: 20px;
  }
  .monitor-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
<template>
  <div class="left">
    <div class="header inbox">
      <Suitcase class="icon" />
      <h2>Inbox</h2>
      <span>14</span>
    </div>
    <!-- <div class="header">
      <h2>清单</h2>
      <Plus class="icon" />
    </div> -->
    <div v-for="(item, index) in layout" :key="index" class="list">
      <div class="header">
        <h2>{{ item.title }}</h2>
        <Plus style="width: 16px; height: 16px; padding-right: 16px" />
      </div>
      <div class="item" v-for="(sub, subIndex) in item.mainList" :key="subIndex">
        <div style="margin-left: 20px" class="alig">
          <el-icon><component :is="sub.icon" /></el-icon>
          <span style="margin-left: 4px">{{ sub.title }}</span>
        </div>
        <span style="padding-right: 20px">{{ sub.number }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Suitcase, Plus, Connection, Clock, EditPen } from '@element-plus/icons-vue'
import { ref } from 'vue'
const layout = [
  {
    title: '清单',
    mainList: [
      {
        title: '热门',
        number: 30,
        icon: Connection
      },
      {
        title: '工作',
        number: 20,
        icon: Connection
      },
      {
        title: '生活',
        number: 20,
        icon: Clock
      },
      {
        title: '其他',
        number: 20,
        icon: Connection
      }
    ]
  },
  {
    title: '标签',
    mainList: [
      {
        title: '工具',
        number: 3,
        icon: EditPen
      },
      {
        title: '书籍',
        number: 2,
        icon: EditPen
      },
      {
        title: '运动',
        number: 1,
        icon: EditPen
      },
      {
        title: '电影',
        number: 1,
        icon: EditPen
      }
    ]
  }
]
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  font-size: 20px;
  border-bottom: 1px solid #dfdfdf;
}
.inbox {
  background-color: #eff8fe;
}
.icon {
  width: 16px;
  height: 16px;
  padding-right: 8px;
}
h2 {
  flex: 1;
  font-size: 20px;
  font-weight: normal;
}
span {
  font-size: 16px;
}
.left {
  width: 30%;
  box-shadow: 0 0 5px 1px #dfdfdf;
}
.item {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
}
.alig {
  display: flex;
  align-items: center;
}
.list {
  width: 100%;
  height: calc(50vh - 26px);
}
</style>

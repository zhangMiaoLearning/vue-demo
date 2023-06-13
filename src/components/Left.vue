<template>
  <!--这个vue文件名是left，会出现报错ESLint: Component name should always be multi-word. -->
  <!--  组件名最好让别人清楚这个组件是干啥的-->
  <div class="left">
    <div class="header inbox">
      <Suitcase class="icon" />
      <!--        一般h标签都有自己的样式，不是真的需要用的情况下，还是用div或者其他的标签-->
      <h2>Inbox</h2>
      <span>14</span>
    </div>
    <div v-for="(item, index) in layout" :key="index" class="list">
      <div class="header">
<!--        一般h标签都有自己的样式，不是真的需要用的情况下，还是用div或者其他的标签-->
        <h2>{{ item.title }}</h2>
<!--        非必须的情况下，少用行内样式-->
        <Plus style="width: 16px; height: 16px; padding-right: 16px" />
      </div>
      <div class="list-item" v-for="(sub, subIndex) in item.mainList" :key="subIndex">
<!--        注意单词拼写-->
        <div class="alig">
          <el-icon><component :is="sub.icon" /></el-icon>
          <!--        非必须的情况下，少用行内样式-->
          <span style="margin-left: 4px">{{ sub.title }}</span>
        </div>
        <!--        非必须的情况下，少用行内样式-->
        <span style="padding-right: 20px">{{ sub.number }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Suitcase, Plus, Connection, Clock, EditPen } from '@element-plus/icons-vue'
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
<style scoped lang="less">
// 这部分重构一下，如果不喜欢嵌套，类名应该更加规范，可以参考虚拟项目里我们使用的BEM命名规范，当然不需要特别严格遵守，但核心思想是要提高代码的维护性和可读性
// 这里的css不难，但是越简单越是需要规范
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
.alig {
  display: flex;
  align-items: center;
  margin-left: 20px
}
.list {
  width: 100%;
  height: calc(50vh - 26px);

  &-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
  }
}
</style>

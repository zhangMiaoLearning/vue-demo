<template>
    <div class="left">
      <!-- 头部 -->
      <div class="top-box  space">
        <div class="alig">
          <MessageBox style="width: 16px;height:16px;padding-left: 16px;" />
          <p style="margin-left:5px">Inbox</p >
        </div>
        <p>14</p >
      </div>
      <!-- 主体 -->
      <div v-for="(item, index) in layout" :key="index" class="list">
        <div class="space alig title">
          <p style="margin-left:12px">{{item.title}}</p >
          <Plus style="width: 16px;height:16px;padding-right: 16px;" />
        </div>
        <div class="space  mainList" v-for="(sub, subIndex) in item.mainList" :key="subIndex">
          
          <div style="margin-left: 20px;" class="alig">
            <el-icon><component :is="sub.icon" /></el-icon>
            <p style="font-size: 16px;margin-left: 4px">{{sub.title}}</p >
          </div>
          <p style="padding-right:20px">{{sub.number}}</p >
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { MessageBox, Plus, EditPen, Connection, Clock } from '@element-plus/icons-vue'
  const layout = [
    {
      title:'清单',
      mainList:[
        {
          title:'热门',
          number: 30,
          icon: Connection
        },
        {
          title:'工作',
          number: 20,
          icon: Connection
        },
        {
          title:'生活',
          number: 20,
          icon: Clock
        },
        {
          title:'其他',
          number: 20,
          icon: Connection
        }
      ]
    },
    {
      title:'标签',
      mainList:[
        {
          title:'工具',
          number: 3,
          icon: EditPen
        },
        {
          title:'书籍',
          number: 2,
          icon: EditPen
        },
        {
          title:'运动',
          number: 1,
          icon: EditPen
        },
        {
          title:'电影',
          number: 1,
          icon: EditPen
        }
      ]
    }
  ];
  </script>
  <style lang="less">
  .left {
      width: 30%;
      height: 100vh;
      background-color: #fff;
      
  }
  .top-box {
    height: 52px;
    width: 100%;
    background-color: #EFF8FE;
    // padding-left: 10px;
    // padding-right: 16px;
    p {
      padding-right: 12px;
    }
    
  }
  .alig {
    display: flex;
    align-items: center;
  }
  .space {
    display: flex;
    justify-content: space-between;
  }
  .list {
    width: 100%;
    height: calc(50vh - 26px);
  }
  .title {
    height: 52px;
    border-bottom: 1px solid #DFDFDF;
  }
  // .mainList {
  //   font-size: 16px;
  // }
  </style>
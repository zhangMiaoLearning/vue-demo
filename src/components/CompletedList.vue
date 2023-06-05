<template>
    <div class="title">completed</div>
    <div class="list">
        <div v-for="item in props.todoList">
          <div v-show="item.status" class="list-item">
            <el-checkbox class="checkbox" :key="item.id" :label="item.name" v-model="item.status"/>
          </div>
        </div>
    </div>
  </template>
  <script setup lang="ts">
  const props = defineProps<{
    todoList: { id: number; name: string; status: boolean }[]
  }>()
  </script>
  <style scoped lang="less">
  .title {
    font-weight: bold;
    font-size: 20px;
    margin: 0 40px;
    color: #343a40;
  }
  /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #a9a9a9;
    text-decoration: line-through;
  }
  .list {
    padding: 16px 40px;
    height: 140px;
    overflow: auto;
    
  }
  .checkbox {
    padding-left: 16px;
  }
  .el-checkbox__label {
    text-overflow: ellipsis;
    max-width: 540px;
    overflow: hidden;
  }
  .list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f9f9f9;
    height: 40px;
    margin-bottom: 8px;
    border-radius: 3px;
    text-overflow: ellipsis;
  }
  </style>
  
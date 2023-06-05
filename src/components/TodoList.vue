<template>
  <div class="list">
      <div v-for="item in props.todoList">
        <div v-show="!item.status" class="list-item">
          <el-checkbox class="checkbox" :key="item.id" :label="item.name" v-model="item.status" />
          <Delete class="delete-icon" @click="$emit('deleteItem', item.id)" />
        </div>
      </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Delete } from '@element-plus/icons-vue'
const props = defineProps<{
  todoList: { id: number; name: string; status: boolean }[]
}>()
</script>
<style scoped>
.delete-icon {
  height: 16px;
  width: 16px;
  color: #f56969;
  display: none;
}
.list {
  margin: 16px 0;
  padding: 0 40px;
  min-height: 140px;
  max-height: calc(100vh - 308px);
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
.list-item:hover {
  background-color: #dfdfdf;
}
.list-item:hover .delete-icon {
  display: inline;
  padding-right: 16px;
  padding-left: 8px;
}
</style>

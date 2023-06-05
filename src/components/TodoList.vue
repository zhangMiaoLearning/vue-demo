<template>
  <div class="list">
    <el-checkbox-group v-model="checkList">
      <div v-for="item in props.todoList">
        <div v-show="item.status" class="list-item">
          <el-checkbox class="checkbox" :key="item.id" :label="item.name" />
          <Delete class="delete-icon" @click="$emit('deleteItem', item.id)" />
        </div>
      </div>
    </el-checkbox-group>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Delete } from '@element-plus/icons-vue'
const checkList = ref([])
const props = defineProps<{
  todoList: { id: number; name: string; status: boolean }[]
}>()
</script>
<style>
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: var(--el-checkbox-text-color);
}
.delete-icon {
  height: 16px;
  width: 16px;
  color: #f56969;
  display: none;
}
.list {
  padding: 16px 40px;
  min-height: 140px;
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

<template>
  <div class="list">
    <div v-for="item in props.todoList">
      <div v-show="!item.status" class="list-item">
        <el-checkbox
          class="list-item-checkbox"
          :key="item.id"
          :label="item.name"
          v-model="item.status"
          @change="handleCheckTodoItem(item.id)"
        />
        <Delete class="list-item-delete-icon" @click="$emit('deleteItem', item.id)" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTodoListStore } from '@/stores';
import { Delete } from '@element-plus/icons-vue'
const props = defineProps<{
  todoList: { id: number; name: string; status: boolean }[]
}>()
const store = useTodoListStore()
function handleCheckTodoItem(id:number){
  store.checkTodoItem(id)
  console.log(id);
  
}
</script>
<style scoped lang="less">
.list {
  margin: 16px 40px;
  min-height: 140px;
  max-height: calc(100vh - 308px);
  overflow: auto;

  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f9f9f9;
    height: 40px;
    margin-bottom: 8px;
    border-radius: 3px;
    text-overflow: ellipsis;

    &:hover {
      background-color: #dfdfdf;
    }

    &-checkbox {
      padding-left: 16px;
    }

    &-delete-icon {
      height: 16px;
      width: 16px;
      color: #f56969;
      display: none;
    }

    &:hover .list-item-delete-icon {
      display: inline;
      padding-right: 16px;
      padding-left: 8px;
    }
  }
}
.el-checkbox__label {
  text-overflow: ellipsis;
  max-width: 540px;
  overflow: hidden;
}
</style>

<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <div v-for="item in props.todoList">
        <div  v-show="item.status">
          <el-checkbox :key="item.id" :label="item.name" />
          <Delete class="delete-icon" @click="$emit('deleteItem',item.id)"/>
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
  color: brown;
}
</style>

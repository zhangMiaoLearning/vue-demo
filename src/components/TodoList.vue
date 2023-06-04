<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <div v-for="item in todoList">
        <el-checkbox v-show="item.status" :key="item.id" :label="item.name" />
      </div>
    </el-checkbox-group>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const checkList = ref([])
const props = defineProps<{
  todoList: { id: number; name: string; status: boolean }[]
}>()
</script>
<style>
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: var(--el-checkbox-text-color);
}
</style>

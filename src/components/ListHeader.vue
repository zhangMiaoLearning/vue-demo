<template>
  <div class="list-header">
    <div class="title">Use this manage your life and work</div>
    <div class="justify">
      <input class="input" placeholder="Enter your to do item" v-model="input"/>
      <el-button class="button" :icon="Plus" @click="$emit('addTodoItem', input)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
</script>
<style scoped>
.list-header {
  display:flex;
  flex-direction: column;
  text-align: center;
  padding: 0 40px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: #343a40;
  margin: 16px 0;
}
.input {
  font-size: 20px;
  border: 1px solid #a9a9a9;
  border-radius: 3px;
  flex: 1;
  margin-right: 8px;
  padding: 0  16px;
}
.input:focus {
  outline: none;
  border: 1px solid #7dced5;
}
.button {
  background-color: #7dced5;
  width: 48px;
  height: 48px;
  color: white;
  font-size: 32px;
  border-radius: 3px;
}
.button:active {
  background-color: #31c5d3;
  border: none;
}
</style>

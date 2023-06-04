<template>
  <div>
    <div class="title">Use this manage your life and work</div>
    <div class="justify">
      <el-input class="input" placeholder="Enter your to do item" v-model="input" />
      <el-button :icon="Plus" @click="$emit('addTodoItem', input)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
</script>
<style scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: #343a40;
}
</style>

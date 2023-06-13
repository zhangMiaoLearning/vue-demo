<template>
  <div class="list-header">
    <div class="list-header-title">Use this manage your life and work</div>
<!--    这个类名有点子奇怪啊-->
    <div class="justify cloum">
      <input class="input" placeholder="Enter your to do item" v-model="input" />
      <el-button class="button" :icon="Plus" @click="handleAddTodoList" />
    </div>
    <div v-show="isShowMessage" class="list-header-message">please input value</div>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { ref ,defineEmits} from 'vue'
const input = ref('')
const isShowMessage = ref(false)
const emit = defineEmits(['addTodoItem'])
const handleAddTodoList = () => {
  if (input.value.trim()) {
    emit('addTodoItem', input.value)
    isShowMessage.value = false
  } else {
    isShowMessage.value = true
  }
  input.value = ''
  console.log(isShowMessage.value)
}
</script>
<style scoped lang="less">
.list-header {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 40px;

  &-title {
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    color: #343a40;
    margin: 16px 0;
  }
  &-message {
    color: #f56969;
  }
}
.input {
  font-size: 20px;
  border: 1px solid #a9a9a9;
  border-radius: 3px;
  flex: 1;
  margin-right: 8px;
  padding: 0 16px;

  &:focus {
    outline: none;
    border: 1px solid #7dced5;
  }
}

.button {
  background-color: #7dced5;
  width: 48px;
  height: 48px;
  color: white;
  font-size: 32px;
  border-radius: 3px;

  &:active {
    background-color: #31c5d3;
    border: none;
  }
}
</style>

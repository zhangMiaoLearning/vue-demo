<template>
  <div class="justify content">
    <Left />
    <div class="right">
      <ListHeader @addTodoItem="addItem" />
      <TodoList :todoList="todoList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ListHeader from './components/ListHeader.vue'
import Left from './components/Left.vue'
import TodoList from './components/TodoList.vue'
const todoList = ref([
  { id: 1, name: 'todo 1', status: true },
  { id: 2, name: 'todo 2', status: false }
])

const addItem = (newItem:string) => {
  const length = todoList.value.length
  todoList.value.push({id:length + 1,name:newItem,status:true})
}
</script>

<style scoped>
.content {
  width: 1000px;
  background-color: white;
}
.right {
  width: 70%;
}
</style>

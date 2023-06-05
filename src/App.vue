<template>
  <div class="justify content">
    <Left />
    <div class="right">
      <ListHeader @addTodoItem="addItem"/>
      <TodoList :todoList="todoList" @deleteItem="deleteItem" />
      <CompletedList :todoList="todoList"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListHeader from './components/ListHeader.vue'
import Left from './components/Left.vue'
import TodoList from './components/TodoList.vue'
import { ref } from 'vue'
const todoList = ref([
  { id: 1, name: 'todo 1', status: true },
  { id: 2, name: 'todo 2', status: false }
])
const addItem = (newItem: string) => {
  const length = todoList.value.length
  if (newItem.trim()) {
    todoList.value.push({ id: length + 1, name: newItem, status: false })
  }
  console.log(todoList.value);
  
}

const deleteItem = (id: number) => {
  console.log(id)
  todoList.value = todoList.value.filter((item) => item.id != id)
}
</script>

<style scoped>
.content {
  width: 1000px;
  height: 100vh;
  background-color: white;
}
.right {
  width: 70%;
}
</style>

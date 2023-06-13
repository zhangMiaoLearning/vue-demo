<template>
<!--  页面宽度缩小，可能页面展示有些问题-->
<!--  这些小问题有时间就改，没时间的话记住就行，下次注意-->
  <div class="justify content">
    <Left/>
    <div class="right">
      <ListHeader @addTodoItem="addItem"/>
      <TodoList :todoList="todoList" @deleteItem="deleteItem"/>
      <CompletedList :todoList="todoList"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListHeader from './components/ListHeader.vue'
import Left from './components/Left.vue'
import TodoList from './components/TodoList.vue'
import {useTodoListStore} from './stores/index'
const store = useTodoListStore()
const todoList = computed(() => store.todoList)
store.getTodoList()
console.log(store.todoList)
const addItem = (newItem: string) => {
  store.addTodoItem(newItem)
}
const deleteItem = (id: number) => {
  store.deleteTodoItem(id)
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

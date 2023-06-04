<template>
  <div class="justify content">
    <Left />
    <div class="right">
      <ListHeader />
    </div>
  </div>
</template>

<script setup lang="ts">
import ListHeader from './components/ListHeader.vue'
import Left from './components/Left.vue'
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

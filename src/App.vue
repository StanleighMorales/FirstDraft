<script setup>
</script>

<template>
  <div class="app-container">
    <div class="stars"></div>
    <div class="twingkling"></div>
    <main class="main-app">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.main-app {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>

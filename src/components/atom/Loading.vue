<script setup lang="ts"></script>

<template>
  <div></div>
</template>

<style scoped>
div {
  position: relative;
  margin: 0 10%;
  --height: 40px;
  height: var(--height);
  overflow: hidden;
}

@keyframes running {
  0% {
    left: -5%;
  }

  100% {
    left: 100%;
  }
}

div::after {
  content: "";
  position: absolute;
  --b-height: 6px;
  top: calc((var(--height) - var(--b-height)) / 2);
  left: -6%;
  width: 6%;
  height: var(--b-height);
  background: var(--theme-1);
  animation: running 2s infinite;
}
</style>

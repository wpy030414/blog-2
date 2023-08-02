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
    left: calc(var(--b-length) * -1);
  }

  100% {
    left: 100%;
  }
}

div::before {
  content: "";
  position: absolute;
  --b-length: 54px;
  --b-height: 6px;
  top: calc((var(--height) - var(--b-height)) / 2);
  left: calc(var(--b-length) * -1);
  width: var(--b-length);
  height: var(--b-height);
  background: var(--theme-1);
  animation: running 2s infinite;
}

div::after {
  content: "LOADING...";
  position: absolute;
  top: 0;
  left: 0;
  color: var(--light-c);
}

.dark div::after {
  color: var(--dark-c);
}
</style>

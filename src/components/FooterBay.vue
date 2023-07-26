<script setup lang="ts"></script>

<template>
  <footer>这是页尾。</footer>
</template>

<style scoped>
footer {
  height: 50vh;
  background-color: var(--light);
  --day: rgba(33, 230, 193, 0.233);
  background-image: radial-gradient(var(--day) 10%, transparent 0),
    radial-gradient(var(--day) 10%, transparent 0);
  background-size: 30px 30px;
  background-position:
    0 0,
    15px 15px;
  transition: all 0.5s;
}

.dark footer {
  background-color: var(--dark);
  --day: var(--theme-2);
}
</style>

<script setup lang="ts">
defineProps<{
  /** 按钮内文字 */
  innerText?: string;
}>();
</script>

<template>
  <button>
    <p>{{ innerText || "" }}</p>
  </button>
</template>

<style scoped>
button {
  padding: 1em;
  outline: none;
  border: 2.7px solid var(--theme-1);
  border-radius: 9px;
  background: transparent;
  color: var(--theme-1);
  font-weight: bold;
  letter-spacing: 1px;
}

button > p::after {
  content: " >";
  position: relative;
  left: 0px;
  transition: all 0.2s;
}

button:hover > p::after {
  left: 3px;
}
</style>

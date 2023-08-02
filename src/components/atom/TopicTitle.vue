<script setup lang="ts">
defineProps<{
  /** 名牌内容 */
  logo?: string;
}>();
</script>

<template>
  <h1 :style="logo ? `--logo: '${logo}';` : ''">
    <slot></slot>
  </h1>
</template>

<style scoped>
h1 {
  position: relative;
  color: var(--theme-1);
  text-shadow: 0.1em 0.1em 0 var(--light);
  font-size: 48px;
  user-select: none;
}

.dark h1 {
  text-shadow: 0.1em 0.1em 0 var(--dark);
}

h1::before {
  content: var(--logo);
  position: absolute;
  top: -1.4em;
  padding: 0.2em 0.8em;
  background: var(--theme-1);
  color: var(--light);
  text-shadow: none;
  font-size: 16px;
  font-family: "Novecento";
}

.dark h1::before {
  color: var(--dark);
}
</style>

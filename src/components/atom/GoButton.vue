<script setup lang="ts">
withDefaults(
  defineProps<{
    /** 是否需要箭头动效 */
    go?: boolean;
    chosen?: boolean;
  }>(),
  {
    go: true,
  },
);
</script>

<template>
  <button :style="chosen ? 'background: var(--day)' : ''">
    <p :style="go ? `--go: ' >';` : ''">
      <slot></slot>
    </p>
  </button>
</template>

<style scoped>
button {
  margin-right: 1.5em;
  padding: 1em;
  outline: none;
  border: 2.7px solid var(--theme-1);
  border-radius: 9px;
  --day: var(--light);
  background: transparent;
  color: var(--theme-1);
  font-weight: bold;
  letter-spacing: 1px;
}

.dark button {
  --day: var(--dark);
}

button > p::after {
  content: var(--go);
  position: relative;
  left: 0px;
  transition: all 0.2s;
}

button:hover > p::after {
  left: 3px;
}
</style>

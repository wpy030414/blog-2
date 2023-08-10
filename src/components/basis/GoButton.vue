<script setup lang="ts">
defineProps<{
  /** 是否需要箭头动效 */
  go?: boolean;
  /** 是否被选中 */
  chosen?: boolean;
}>();
</script>

<template>
  <button :class="chosen ? 'chosen' : ''">
    <p :class="go ? 'go' : ''">
      <slot></slot>
    </p>
  </button>
</template>

<style scoped>
button {
  margin-right: 1.5em;
  padding: 1em;
  outline: none;
  border: 2.7px solid var(--theme-main);
  border-radius: 9px;
  background: transparent;
  color: var(--theme-main);
  font-weight: bold;
  letter-spacing: 1px;
}

button.chosen {
  background: var(--g-bg-c);
}

button > p::after {
  position: relative;
  left: 0px;
  transition: all 0.2s;
}

button > p.go::after {
  content: " >";
}

button:hover > p::after {
  left: 3px;
}

button:disabled {
  border: 2.7px solid var(--g-c-sub);
  color: var(--g-c-sub);
}
</style>

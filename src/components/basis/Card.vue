<script setup lang="ts">
defineProps<{
  needMargin?: boolean;
}>();
</script>

<template>
  <div :class="needMargin ? 'need-margin' : ''">
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  background: var(--g-bg-c);
  border-radius: 15px;
  box-shadow: 0 0 18px #3333330d;
  overflow: hidden;
}

.need-margin {
  margin-bottom: 27px;
}
</style>

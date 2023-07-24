<script setup lang="ts">
import { mdiChevronDown } from "@mdi/js";
</script>

<template>
  <section class="start">
    <svg width="24" height="24">
      <path :d="mdiChevronDown" fill="#fff"></path>
    </svg>
  </section>
  <section class="recently" v-for="i in 4"></section>
</template>

<style scoped>
.start {
  position: relative;
  height: calc(100vh - 60px);
  background: var(--theme-deep);
  text-align: center;
}

@keyframes dancing {
  0% {
    transform: scale(4, 3) translate(-2.5px, 0);
  }

  50% {
    transform: scale(4, 3) translate(-2.5px, 10px);
  }

  100% {
    transform: scale(4, 3) translate(-2.5px, 0);
  }
}

.start svg {
  position: absolute;
  bottom: 85px;
  opacity: 0.85;
  animation: dancing 2s infinite;
}

.recently {
  height: 60vh;
  background: var(--theme-shallow);
}
</style>

<script setup lang="ts">
import { marked } from "marked";

defineProps<{
  /** Markdown 源码 */
  md: string;
}>();
</script>

<template>
  <div class="article">
    {{ marked.parse(md) }}
  </div>
</template>

<style scoped></style>

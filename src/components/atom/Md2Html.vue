<script setup lang="ts">
import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";

marked.use(gfmHeadingId());

defineProps<{
  /** Markdown 源码 */
  md: string;
}>();
</script>

<template>
  <div class="article" v-html="marked.parse(md, { mangle: false })"></div>
</template>

<style scoped></style>

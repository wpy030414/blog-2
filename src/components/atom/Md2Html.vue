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
  <div class="blog-body" v-html="marked.parse(md, { mangle: false })"></div>
</template>

<style>
.blog-body {
  margin-top: 1.8em;
  color: var(--light-c-sub);
}

.blog-body p {
  margin-top: 0.6em;
  line-height: 1.5em;
  text-indent: 2em;
  letter-spacing: 0.5px;
}

.blog-body blockquote {
  position: relative;
  margin-top: 0.6em;
  padding: 0.1em 0 0.7em;
  --blog-body-blockquote-bgc: var(--dark-tp-high);
  background: var(--blog-body-blockquote-bgc);
  border-radius: 4px;
}

.dark .blog-body blockquote {
  --blog-body-blockquote-bgc: var(--light-tp-high);
}

.blog-body blockquote::before,
.blog-body blockquote::after {
  content: "";
  position: absolute;
  top: 0;
  width: 32px;
  height: 100%;
  background: var(--blog-body-blockquote-bgc);
}

.blog-body blockquote::before {
  left: -32px;
}

.blog-body blockquote::after {
  right: -32px;
}

.blog-body li {
  margin: 0.6em 0 0 3em;
  line-height: 1.5em;
}

.blog-body code {
  padding: 4px 8px;
  background: var(--theme-1);
  border-radius: 4px;
  color: var(--light);
}
</style>

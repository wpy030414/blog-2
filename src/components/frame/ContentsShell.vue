<script setup lang="ts">
import { goTop } from "@/util";

defineProps<{
  /** 自选背景 */
  optionalBgi?: string;
}>();

goTop();
</script>

<template>
  <section
    :class="optionalBgi ? 'optional' : 'default'"
    :style="optionalBgi ? `--bgi: url(${optionalBgi})` : ''"
  >
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  position: relative;
  padding: 15vh 12vw;
}

section.default {
  background: var(--theme-sub) url("//img1.imgtp.com/2023/07/26/2kw8xtPm.png")
    right / contain no-repeat;
  background-attachment: fixed;
}

section.optional {
  background: var(--bgi) center / cover no-repeat;
}

@media screen and (max-width: 1000px) {
  section {
    padding: 4.2vh 7.2vw;
  }
}
</style>

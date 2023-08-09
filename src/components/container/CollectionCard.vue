<script setup lang="ts">
import Card from "@/components/basis/Card.vue";
import type { Collection } from "@/types/Collection";

defineProps<{
  /** 单收藏品数据 */
  data: Collection;
}>();
</script>

<template>
  <card class="collection">
    <span :style="`background-image: url(${data.picture.url});`"></span>
    <span class="text">
      <p class="name">{{ data.name }}</p>
      <p class="subtitle">————“{{ data.subtitle }}”</p>
      <p class="description">{{ data.description }}</p>
    </span>
  </card>
</template>

<style scoped>
.collection {
  position: relative;
  height: 300px;
}

.collection span {
  position: absolute;
  top: 0;
  display: inline-block;
  width: 300px;
  height: 300px;
  background-size: cover;
}

.collection .text {
  left: 330px;
  width: auto;
  color: var(--g-c-main);
}

.text .name {
  font-size: 20px;
}

.text .subtitle {
  font-style: italic;
}

.text .description {
  color: var(--g-c-sub);
}
</style>

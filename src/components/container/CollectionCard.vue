<script setup lang="ts">
import type { Collection } from "@/types/Collection";
import Card from "@/components/basis/Card.vue";

defineProps<{
  /** 单数据 */
  data: Collection;
}>();
</script>

<template>
  <card class="collection">
    <span
      class="img"
      :style="`background-image: url(${data.picture.url});`"
    ></span>
    <span class="text">
      <p class="name">{{ data.name }}</p>
      <p class="subtitle">——“{{ data.subtitle }}”</p>
      <p class="description">{{ data.description }}</p>
    </span>
  </card>
</template>

<style scoped>
.collection {
  position: relative;
  --pic-width: 300px;
  height: var(--pic-width);
}

.collection span {
  display: inline-block;
  position: absolute;
  top: 0;
  background-size: cover;
}

.collection .img {
  left: 0;
  width: var(--pic-width);
  height: var(--pic-width);
  -webkit-mask-image: linear-gradient(to right, #000, transparent);
}

.collection .text {
  --padding-top: 5vh;
  padding: var(--padding-top) 3vw var(--padding-top) 0;
  left: var(--pic-width);
  height: calc(var(--pic-width) - var(--padding-top) * 2);
  overflow-y: auto;
  color: var(--g-c-main);
}

.collection .text::-webkit-scrollbar {
  width: 0;
}

.text .name {
  font-size: 24px;
}

.text .subtitle {
  margin-top: 0.6em;
  font-style: italic;
}

.text .description {
  margin-top: 1.2em;
  color: var(--g-c-sub);
}

@media screen and (max-width: 1000px) {
  .collection {
    --pic-width: 150px;
  }

  .collection .text {
    --padding-top: 2vh;
  }

  .text .name {
    font-size: 18px;
  }

  .text .subtitle {
    font-size: 12px;
  }
}
</style>

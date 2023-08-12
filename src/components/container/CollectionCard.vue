<script setup lang="ts">
import type { Collection } from "@/types/Collection";
import Card from "@/components/basis/Card.vue";
import GoButton from "../basis/GoButton.vue";

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
      <go-button :go="true" :to="data.detail.url">详情</go-button>
    </span>
  </card>
</template>

<style scoped>
.collection {
  --pic-width: 300px;
  height: var(--pic-width);
}

.collection span {
  display: inline-block;
}

.collection .img {
  width: var(--pic-width);
  height: var(--pic-width);
  background: no-repeat 50% -24% / 144%;
}

.collection .text {
  --padding-top: 5vh;
  --padding-right: 3vw;
  padding: var(--padding-top) var(--padding-right);
  width: calc(100% - var(--pic-width) - var(--padding-right) * 2);
  height: calc(var(--pic-width) - var(--padding-top) * 2);
  overflow-y: hidden;
  color: var(--g-c-main);
}

.text .name {
  font-size: 24px;
}

.text .subtitle {
  margin-top: 0.6em;
  font-style: italic;
}

.text .description {
  margin: 1.2em 0;
  color: var(--g-c-sub);
}

@media screen and (max-width: 1000px) {
  .collection {
    --pic-width: 500px;
    height: auto;
  }

  .collection .img {
    width: 100%;
    height: auto;
    padding-top: 100%;
  }

  .collection .text {
    --padding-top: 2vh;
    --padding-right: 5vw;
    top: var(--pic-width);
    left: 0;
    margin-bottom: 0.6em;
    width: calc(100% - var(--padding-right) * 2);
    height: auto;
  }

  .text .name {
    font-size: 18px;
  }

  .text .subtitle {
    font-size: 12px;
  }
}
</style>

<script setup lang="ts">
import ContentsShell from "@/components/frame/ContentsShell.vue";
import TopicTitle from "@/components/basis/TopicTitle.vue";
import { useDataStore } from "@/stores/data";
import CollectionCard from "@/components/container/CollectionCard.vue";
import { ref, type Ref } from "vue";
import type { Collection } from "@/types/Collection";

/** 是否已准备好数据 */
const isReady = ref([false]);

const figures: Ref<Collection[]> = ref([]);

useDataStore()
  .getCollections()
  .then((response) => {
    if (response) {
      figures.value = response;
      isReady.value[0] = true;
    }
  });
</script>

<template>
  <contents-shell>
    <div v-if="isReady[0]">
      <topic-title logo="figures">手办</topic-title>
      <collection-card v-for="f in figures" :data="f" :need-margin="true" />
    </div>
  </contents-shell>
</template>

<style scoped></style>

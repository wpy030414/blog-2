<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { Collection } from "@/types/Collection";
import ContentsShell from "@/components/frame/ContentsShell.vue";
import Loading from "@/components/basis/Loading.vue";
import TopicTitle from "@/components/basis/TopicTitle.vue";
import CollectionCard from "@/components/container/CollectionCard.vue";
import { useDataStore } from "@/stores/data";

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
  <contents-shell class="topics">
    <div class="topic-shell">
      <topic-title logo="figures">手办</topic-title>
      <loading v-if="!isReady[0]" />
      <div v-if="isReady[0]" class="cards-shell">
        <collection-card v-for="f in figures" :data="f" />
      </div>
    </div>
  </contents-shell>
</template>

<style scoped>
.topic-shell {
  margin-top: 27px;
  border: 1px solid transparent;
}

.topic-shell:first-child {
  margin-top: 0;
}

.cards-shell {
  display: grid;
  grid-gap: 27px;
  margin-top: 7vh;
}

@media screen and (max-width: 1000px) {
  .topics {
    padding: 10vh 6vw;
  }
}
</style>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import ContentsShell from "@/components/atom/ContentsShell.vue";
import Loading from "@/components/atom/Loading.vue";
import { useDataStore } from "@/stores/data";
import { type Article } from "@/types/Article";
import Md2Html from "@/components/atom/Md2Html.vue";
import Pagination from "@/components/atom/Pagination.vue";

/** 是否已准备好数据 */
const isReady = ref(false);

/** 文章 */
const articles: Ref<Article[]> = ref([]);

useDataStore()
  .getArticles()
  .then((response) => {
    if (response) {
      isReady.value = true;
      articles.value = response;
    }
  });
</script>

<template>
  <contents-shell>
    <loading v-if="!isReady" />
    <pagination :need-taken="true" :unpagedData="articles">
      <div v-for="a in articles">
        <h2>{{ a.title }}</h2>
        <p>
          <span>
            {{ new Date(a.time.$date).toISOString().slice(0, 10) }}
          </span>
          <span>
            {{ a.category }}
          </span>
        </p>
        <md2-html :md="a.body" />
      </div>
    </pagination>
  </contents-shell>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref, watch, type Ref } from "vue";
import type { Article } from "@/types/Article";
import ContentsShell from "@/components/frame/ContentsShell.vue";
import Loading from "@/components/basis/Loading.vue";
import ArticleCard from "@/components/container/ArticleCard.vue";
import GoButton from "@/components/basis/GoButton.vue";
import Pagination from "@/components/basis/Pagination.vue";
import Card from "@/components/basis/Card.vue";
import { useDataStore } from "@/stores/data";

/** 是否已准备好数据 */
const isReady = ref(false);

/** 文章缓存代理 */
const articlesProxy: Ref<Article[]> = ref([]);

/** 文章 ID 是否已指定 */
const isIDGiven = ref(false);

/**
 * 刷新数据。
 * @param needDisplayAtOnce 是否需要立即显示
 */
async function reflash(needDisplayAtOnce?: boolean) {
  await useDataStore()
    .getArticles()
    .then((response) => {
      if (response) {
        articlesProxy.value = response;
        if (needDisplayAtOnce) {
          isReady.value = true;
          handlePageNumChange(1);
        }
      }
    });
  const id = (document.querySelector(".id-guard") as HTMLElement).id;
  if (id) {
    isIDGiven.value = true;
    search(id);
  }
}

reflash(true);

/** 页数 */
const pageNum = ref(1);
/** 页容量 */
const pageSize = ref(5);
/** 现在应该展示的页数据 */
const pagedData: Ref<Article[]> = ref([]);

/**
 * 获取总页数。
 */
function getPageAmount() {
  return Math.ceil(articlesProxy.value.length / pageSize.value);
}

watch(pageNum, (pageNum) => {
  handlePageNumChange(pageNum);
});

/**
 * 处理页数变动。
 * @param newPageNum 新的页数
 */
function handlePageNumChange(newPageNum: number) {
  pageNum.value = newPageNum;
  const start = (pageNum.value - 1) * pageSize.value;
  const end =
    start + pageSize.value > articlesProxy.value.length
      ? articlesProxy.value.length
      : start + pageSize.value;
  pagedData.value = articlesProxy.value.slice(start, end);
}

/**
 * 执行多重搜索。
 * @param id 文章唯一识别码。一旦被给定，则其余条件全部失效
 */
async function search(id?: string) {
  if (id) {
    articlesProxy.value = articlesProxy.value.filter((a) => {
      return a.id === id;
    });
  } else {
    let category: string[] = [];
    document.getElementsByName("blog-category").forEach((e) => {
      const safeE = e as HTMLInputElement;
      if (safeE.checked) category.push(safeE.value);
    });

    let content = (document.querySelector("#blog-content") as HTMLInputElement)
      .value;

    const dateFromE = document.querySelector(
      "#blog-date-from",
    ) as HTMLInputElement;
    const dateToE = document.querySelector("#blog-date-to") as HTMLInputElement;
    let dateFrom = dateFromE.value
      ? new Date(dateFromE.value)
      : new Date("1970-01-01");
    let dateTo = dateToE.value
      ? new Date(dateToE.value)
      : new Date("2099-12-31");

    isReady.value = false;
    await reflash(false);

    articlesProxy.value = articlesProxy.value.filter((a) => {
      return (
        (category.length === 0 || category.includes(a.category)) &&
        (a.title.includes(content) || a.body.includes(content)) &&
        dateFrom < new Date(a.date.$date) &&
        new Date(a.date.$date) < dateTo
      );
    });
  }

  isReady.value = true;
  handlePageNumChange(1);
}
</script>

<template>
  <div
    class="id-guard"
    :id="
      Array.isArray($route.params.id) ? $route.params.id[0] : $route.params.id
    "
  ></div>
  <contents-shell>
    <loading v-if="!isReady" />
    <div v-if="isReady" class="layout" :class="isIDGiven ? '' : 'given'">
      <div class="articles-shell">
        <article-card v-for="a in pagedData" :data="a" :need-margin="true" />
      </div>
      <p></p>
      <card v-if="!isIDGiven" class="select">
        <p class="assistant">按类别搜索</p>
        <div v-for="(cb, i) in ['主题长文章', '随笔杂谈', '评论', '技术参考']">
          <input
            type="checkbox"
            name="blog-category"
            :id="`blog-category-${i}`"
            :value="cb"
          />
          <label :for="`blog-category-${i}`">{{ cb }}</label>
        </div>
        <p class="assistant">按内容搜索</p>
        <div>
          <input
            type="text"
            name="blog-content"
            id="blog-content"
            placeholder="标题/正文"
          />
        </div>
        <p class="assistant">按日期搜索</p>
        <div
          v-for="d in [
            { zh: '从', en: 'from' },
            { zh: '至', en: 'to' },
          ]"
        >
          <label :for="`blog-date-${d.en}`">{{ d.zh }}</label>
          <input type="date" name="blog-date" :id="`blog-date-${d.en}`" />
        </div>
        <go-button @click="search()">搜索</go-button>
      </card>
    </div>
    <pagination
      v-if="isReady && !isIDGiven"
      v-model:pageNum="pageNum"
      :pageAmount="getPageAmount()"
    ></pagination>
  </contents-shell>
</template>

<style scoped>
.layout {
  grid-template-columns: 70% 2em auto;
  align-items: flex-start;
}

.layout.given {
  display: grid;
}

.select {
  position: sticky;
  top: 90px;
  padding: 2em;
  border-radius: 16px;
  overflow: hidden;
  background: var(--g-bg-c);
  color: var(--g-c-main);
}

.select .assistant {
  position: relative;
  --offset: 0.9em;
  left: var(--offset);
  margin: 0.5em 0;
  font-size: 18px;
}

.select .assistant::before {
  content: "";
  position: absolute;
  top: 18%;
  left: calc(var(--offset) * -1);
  width: 0.5em;
  height: 1em;
  background: var(--theme-main);
}

.select .assistant:first-child {
  margin-top: 0;
}

.select div {
  margin-left: 18px;
}

.select input[type="checkbox"] {
  position: relative;
  top: 2.5px;
  width: 16px;
  height: 16px;
  margin-right: 0.5em;
  border-radius: 8px;
}

.select input[type="date"] {
  position: relative;
  bottom: 1px;
  margin-left: 0.5em;
}

.select button {
  margin-top: 15px;
}

@media screen and (max-width: 1000px) {
  .layout {
    display: block !important;
  }
}
</style>

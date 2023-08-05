<script setup lang="ts">
import { type Article } from "@/types/Article";
import Md2Html from "@/components/atom/Md2Html.vue";
import GoButton from "../atom/GoButton.vue";

defineProps<{
  /** 单文章数据 */
  data: Article;
  /** 是否为简单模式 */
  isSimpleMode?: boolean;
}>();
</script>

<template>
  <div class="article">
    <h2>{{ data.title }}</h2>
    <p>
      <span class="date">
        {{ new Date(data.date.$date).toISOString().slice(0, 10) }}
      </span>
      <span class="category">
        {{ data.category }}
      </span>
    </p>
    <md2-html
      class="body"
      :class="isSimpleMode ? 'simple' : ''"
      :md="isSimpleMode ? data.body.slice(0, 500) : data.body"
    />
    <!-- <go-button v-if="!isSimpleMode" :go="false">赞同</go-button> -->
  </div>
</template>

<style scoped>
.article {
  position: relative;
  margin-bottom: 32px;
  padding: 2em;
  border-radius: 16px;
  overflow: hidden;
  background: var(--g-bg-c);
}

.article h2 {
  opacity: 0.9;
  color: var(--g-c-main);
  font-size: 30px;
}

.article h2::before {
  content: "# ";
  color: var(--theme-main);
}

.article .date {
  position: absolute;
  top: 11px;
  right: 42px;
  width: 6em;
  opacity: 0.05;
  user-select: none;
  color: var(--g-c-main);
  text-align: right;
  font-size: 64px;
  font-weight: bold;
}

.article .category {
  position: absolute;
  top: 0;
  right: 32px;
  padding: 2px 1em;
  border-radius: 0 0 4px 4px;
  background: var(--theme-main);
  color: var(--g-bg-c);
}

.body.simple::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to bottom, transparent, var(--g-bg-c));
}

@media screen and (max-width: 1000px) {
  .article {
    padding: 2.4em 1.5em;
  }

  .article .date {
    transform-origin: 100% 0;
    transform: rotate(-90deg) translate(-10vw, -10vh);
  }
}
</style>

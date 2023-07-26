<script setup lang="ts">
import { ref } from "vue";
import {
  mdiHome,
  mdiPen,
  mdiImage,
  mdiStar,
  mdiArchiveMusic,
  mdiInformation,
} from "@mdi/js";

defineProps<{
  /** 当前页面默认路由 */
  mode: string;
}>();

/** 菜单 */
const menu = ref([
  { icon: mdiHome, href: "/" },
  { icon: mdiPen, href: "/blog" },
  { icon: mdiImage, href: "/galary" },
  { icon: mdiStar, href: "/museum" },
  { icon: mdiArchiveMusic, href: "/mdhu-project" },
  { icon: mdiInformation, href: "/about" },
]);
</script>

<template>
  <header>
    <button v-if="0"></button>
    <h1>{{ mode }}</h1>
    <ul>
      <li v-for="i in menu">
        <router-link :to="i.href">
          <svg width="24" height="24">
            <path :d="i.icon" fill="#fff"></path>
          </svg>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  z-index: 999;
  top: 0;
  --header-height: 60px;
  height: var(--header-height);
  background: var(--theme-1);
  text-align: center;
}

header > h1 {
  position: absolute;
  left: 2em;
  color: #fff;
  font-family: "Novecento";
  line-height: var(--header-height);
  transform: translateY(-3.5px);
  user-select: none;
}

header > ul,
header > ul > li,
header > ul > li > a {
  display: inline-block;
  height: var(--header-height);
}

header > ul > li > a {
  position: relative;
  width: 75px;
  height: 40px;
  margin: 10px 0;
  border-radius: 4px;
  overflow: hidden;
}

header > ul > li > a:hover::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}

header > ul > li > a > * {
  transform: scale(1.25) translateY(6.5px);
}

@media screen and (max-width: 1000px) {
  header > h1 {
    left: 0;
    width: 100%;
  }
  header > ul {
    display: none;
  }
}
</style>

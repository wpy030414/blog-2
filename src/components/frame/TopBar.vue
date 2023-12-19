<script setup lang="ts">
import { ref, watch } from "vue";
import {
  mdiHome,
  mdiPen,
  mdiImage,
  mdiStar,
  mdiArchiveMusic,
  mdiMenu,
} from "@mdi/js";
import { usePageTitleStore } from "@/stores/page-title";

const props = defineProps<{
  /** 当前页面默认路由 */
  pageName: string;
}>();

watch(
  () => props.pageName,
  (pageName) => {
    const pageTitleMap: { [key: string]: string } = {
      // 博客页面的页标题状态交由 Blog.vue 托管
      galary: "相册",
      museum: "展馆",
      "project-mdhu": "Project MDHu",
      "404": "404",
      about: "关于",
      sponsor: "赞助",
      shrine: "赤牧神社",
    };
    usePageTitleStore().setPageTitle([pageTitleMap[pageName]]);
  },
);

/** 菜单 */
const menu = ref([
  { icon: mdiHome, href: "/" },
  { icon: mdiPen, href: "/blog" },
  { icon: mdiImage, href: "/galary" },
  { icon: mdiStar, href: "/museum" },
  { icon: mdiArchiveMusic, href: "/project-mdhu" },
]);

/** 是否（可能）在移动端上 */
const isOnMobile = ref(window.innerWidth <= 1000);

window.addEventListener("resize", () => {
  isOnMobile.value = window.innerWidth <= 1000;
});

/** 菜单是否已弹出 */
const isMenuPoped = ref(false);
</script>

<template>
  <header>
    <button @click="isMenuPoped = !isMenuPoped">
      <svg width="24" height="24">
        <path :d="mdiMenu"></path>
      </svg>
    </button>
    <h1>{{ pageName }}</h1>
    <transition name="menu">
      <ul v-if="!isOnMobile || isMenuPoped">
        <li v-for="i in menu" @click="isMenuPoped = false">
          <router-link :to="i.href">
            <svg width="24" height="24">
              <path :d="i.icon"></path>
            </svg>
          </router-link>
        </li>
      </ul>
    </transition>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  z-index: 900;
  top: 0;
  --header-height: 60px;
  height: var(--header-height);
  background: var(--theme-main);
  text-align: center;

  & > button {
    display: none;
    position: absolute;
    z-index: 910;
    top: 17px;
    left: 24px;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    outline: none;
    transform: scale(1.25);
  }

  & > h1 {
    position: absolute;
    left: 2em;
    color: #fff;
    font-family: "Novecento";
    line-height: var(--header-height);
    transform: translateY(-3.5px);
    user-select: none;
  }

  & > ul,
  & > ul > li,
  & > ul > li > a {
    display: inline-block;
    height: var(--header-height);
  }

  & > ul > li > a {
    position: relative;
    width: 75px;
    height: 40px;
    margin: 10px 0;
    border-radius: 4px;
    overflow: hidden;

    & > * {
      transform: scale(1.25) translateY(6.5px);
    }

    &:hover::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}

@media screen and (max-width: 1000px) {
  header {
    & > button {
      display: block;
    }

    & > h1 {
      left: 0;
      width: 100%;
    }

    & > ul {
      position: relative;
      width: 100vw;
      top: 60px;
      left: 0;
      background: var(--theme-main);
    }
  }

  .menu-enter-active,
  .menu-leave-active {
    transition: all 0.5s;
  }

  .menu-enter-from,
  .menu-leave-to {
    left: -100vw;
  }
}
</style>

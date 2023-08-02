<script setup lang="ts">
import { ref } from "vue";
import {
  mdiHome,
  mdiPen,
  mdiImage,
  mdiStar,
  mdiArchiveMusic,
  mdiMenu,
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
]);

/**
 * 是否（可能）在移动端上。
 */
function isOnMobile() {
  return window.innerWidth <= 1000;
}

/** 菜单是否已弹出 */
const isMenuPoped = ref(false);
</script>

<template>
  <header>
    <button v-if="isOnMobile()" @click="isMenuPoped = !isMenuPoped">
      <svg width="24" height="24">
        <path :d="mdiMenu" fill="#fff"></path>
      </svg>
    </button>
    <h1>{{ mode }}</h1>
    <transition name="menu">
      <ul v-if="!isOnMobile() || isMenuPoped">
        <li v-for="i in menu">
          <router-link :to="i.href">
            <svg width="24" height="24">
              <path :d="i.icon" fill="#fff"></path>
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
  z-index: 999;
  top: 0;
  --header-height: 60px;
  height: var(--header-height);
  background: var(--theme-1);
  text-align: center;
}

header > button {
  position: absolute;
  z-index: 1000;
  top: 17px;
  left: 24px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  outline: none;
  transform: scale(1.25);
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
  transition: all 0.5s;
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

  .menu-enter-active,
  .menu-leave-active {
    transition: all 0.5s ease;
  }

  .menu-enter-from,
  .menu-leave-to {
    left: -100vw;
  }

  header > ul {
    position: relative;
    z-index: 800;
    width: 100vw;
    top: 60px;
    left: 0;
    background: var(--theme-1);
  }
}
</style>

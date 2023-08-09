<script setup lang="ts">
import "@/assets/light.css";
import "@/assets/dark.css";
import "@/assets/pink.css";
import "@/assets/yellow.css";
import TopBar from "@/components/frame/TopBar.vue";
import FooterBay from "@/components/frame/FooterBay.vue";
import PageSpirit from "@/components/frame/PageSpirit.vue";
import { useThemeStore } from "./stores/theme";

useThemeStore().setTheme();
</script>

<template>
  <div class="main-view">
    <top-bar
      :mode="$router.currentRoute.value.path.slice(1).split('/')[0] || 'PORTAL'"
    ></top-bar>
    <router-view v-slot="{ Component }" :key="$route.fullPath">
      <keep-alive>
        <div class="main-shell">
          <component :is="Component" />
        </div>
      </keep-alive>
    </router-view>
    <footer-bay></footer-bay>
  </div>
  <page-spirit></page-spirit>
</template>

<style>
@font-face {
  src: url("./assets/Novecento-Wide-Bold-2.otf");
  font-family: "Novecento";
}

* {
  margin: 0;
  padding: 0;
}

*,
::before,
::after {
  transition:
    background-color 0.5s,
    color 0.5s,
    text-shadow 0.5s;
}

::-webkit-scrollbar {
  width: 10px;
  background: var(--theme-sub);
}

::-webkit-scrollbar-thumb {
  background: var(--theme-main);
}

.dark .main-view {
  filter: brightness(0.7);
}

a {
  color: var(--theme-main);
  text-decoration: none;
}

svg {
  fill: #fff;
}
</style>

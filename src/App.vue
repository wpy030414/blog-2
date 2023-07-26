<script setup lang="ts">
import TopBar from "@/components/TopBar.vue";
import FooterBay from "@/components/FooterBay.vue";
import PageSpirit from "@/components/PageSpirit.vue";
import { useThemeStore } from "./stores/theme";

useThemeStore().setTheme();
</script>

<template>
  <div id="main-view">
    <top-bar
      :mode="$router.currentRoute.value.path.slice(1) || 'PORTAL'"
    ></top-bar>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" who="Penyo" />
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

:root {
  --light: #fff;
  --light-tp-low: #fffffff2;
  --light-tp-high: #ffffff1a;
  --light-c: #333;
  --light-c-sub: #999;

  --dark: var(--light-c);
  --dark-tp-low: #333333e6;
  --dark-tp-high: #3333330d;
  --dark-c: var(--light);
  --dark-c-sub: var(--light-c-sub);

  --theme-0: #ecfffb;
  --theme-1: #21e6c1;
  --theme-2: #222;
}

* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 0;
}

.dark #main-view {
  filter: brightness(0.7);
}
</style>

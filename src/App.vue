<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
import FooterBay from '@/components/FooterBay.vue';
import PageSpirit from '@/components/PageSpirit.vue';
</script>

<template>
  <top-bar :mode="$router.currentRoute.value.path.slice(1) || 'PORTAL'"></top-bar>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" who="Penyo" />
    </keep-alive>
  </router-view>
  <footer-bay></footer-bay>
  <page-spirit></page-spirit>
</template>

<style>
@font-face {
  src: url("./assets/Novecento-Wide-Bold-2.otf");
  font-family: 'Novecento';
}

:root {
  --timetheme: #fff;
  --timetheme-c: #333;
  --timetheme-c-sub: #999;

  --theme-deep: #21e6c1;
  --theme-shallow: #278ea5;
}

* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 10px;
  background: var(--theme-shallow);
}

::-webkit-scrollbar-thumb {
  background: var(--timetheme);
}
</style>

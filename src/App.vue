<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
import FooterBay from '@/components/FooterBay.vue';
import PageSpirit from '@/components/PageSpirit.vue';
</script>

<template>
  <top-bar></top-bar>
  <router-view></router-view>
  <footer-bay></footer-bay>
  <page-spirit></page-spirit>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

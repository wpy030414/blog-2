<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Layout from "./views/Layout.vue";
</script>

<template>
  <layout></layout>
</template>

<style>
:root {
  --pd-c: #303133;
  --pd-sub-c: #888;
  --pd-bgc: #f6f8fa;
}

* {
  margin: 0;
  padding: 0;
}
</style>

<script setup lang="ts"></script>

<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  position: relative;
  padding: 15vh 12vw;
  background: url("//img1.imgtp.com/2023/07/26/2kw8xtPm.png") right / contain
    no-repeat;
  background-attachment: fixed;
  background-color: var(--theme-0);
}

.dark section {
  background-color: var(--theme-2);
}

@media screen and (max-width: 1000px) {
  section {
    padding: 4.2vh 7.2vw;
  }
}
</style>

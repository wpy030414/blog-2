<script setup lang="ts">
import { ref } from "vue";
import { mdiChevronDown } from "@mdi/js";
import DynamicLine from "@/components/atom/DynamicLine.vue";

const props = defineProps<{
  who: string;
}>();

const xDeg = ref(0);
const yDeg = ref(0);

document.addEventListener("mousemove", (event) => {
  const xRelative = event.clientX / window.innerWidth;
  const yRelative = event.clientY / window.innerHeight;
  const magnifyTimes = 20;
  yDeg.value = -(xRelative - 0.5) * magnifyTimes * 1.5;
  xDeg.value = (yRelative - 0.5) * magnifyTimes;
});

const socials = ref([
  { href: "//github.com/penyoofficial/", path: "//github.com/favicon.ico" },
  { href: "//github.com/penyo/", path: "//gitee.com/favicon.ico" },
  {
    href: "//steamcommunity.com/id/penyoofficial/",
    path: "//store.steamchina.com/favicon.ico",
  },
  {
    href: "//account.xbox.com/profile?gamertag=penyoofficial",
    path: "//support.xbox.com/favicon.png",
  },
  {
    href: "//music.163.com/#/user/home?id=507084557",
    path: "//s1.music.126.net/style/favicon.ico",
  },
  {
    href: "//space.bilibili.com/92465406",
    path: "//www.bilibili.com/favicon.ico",
  },
  { href: "//t.me/penyoofficial", path: "//telegram.org/favicon.ico" },
]);
</script>

<template>
  <section class="start">
    <img src="//prts.wiki/images/1/1d/立绘_阿米娅_skin3.png" alt="" />
    <svg width="24" height="24">
      <path :d="mdiChevronDown" fill="#fff"></path>
    </svg>
    <section
      class="nameplate"
      :style="`--xDeg: ${xDeg}deg; --yDeg: ${yDeg}deg;`"
    >
      <p>你好，我是</p>
      <h1>{{ who || `Penyo` }}</h1>
      <dynamic-line class="line"></dynamic-line>
      <div class="socials">
        <a v-for="s in socials" :href="s.href" target="_blank">
          <img :src="s.path" alt="" width="20" />
        </a>
      </div>
    </section>
  </section>
  <section class="recently" v-for="i in 4"></section>
</template>

<style scoped>
.start {
  position: relative;
  height: calc(100vh - 60px);
  background: var(--theme-deep);
  text-align: center;
  overflow: hidden;
  perspective: 2333px;
}

.start > img {
  position: absolute;
  top: -25vh;
  left: -45vw;
  opacity: 0.65;
}

@keyframes dancing {
  0% {
    transform: scale(4, 3) translate(-3px, 0);
    opacity: 0.85;
  }

  50% {
    transform: scale(4, 3) translate(-3px, 10px);
    opacity: 1;
  }

  100% {
    transform: scale(4, 3) translate(-3px, 0);
    opacity: 0.85;
  }
}

.start > svg {
  position: absolute;
  bottom: 75px;
  animation: dancing 2s infinite;
}

.nameplate {
  position: absolute;
  --np-width: 45vw;
  --np-height: 63vh;
  top: calc((100% - var(--np-height)) / 2 - 3vh);
  left: calc((100% - var(--np-width)) / 2);
  width: var(--np-width);
  height: var(--np-height);
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  transform-style: preserve-3d;
  transform: translateZ(233px) rotateX(var(--xDeg)) rotateY(var(--yDeg));
}

.nameplate > * {
  position: absolute;
  left: 45px;
}

.nameplate > p:nth-child(1) {
  top: 50px;
  color: var(--timetheme-c-sub);
  font-size: 18px;
}

.nameplate > h1 {
  top: 100px;
  color: var(--timetheme-c);
  font-size: 80px;
  transform: translateZ(30px);
}

.nameplate > .line {
  bottom: 165px;
  color: var(--timetheme-c-sub);
}

.nameplate > .socials {
  bottom: 110px;
}

.nameplate > .socials img {
  margin-right: 12px;
  filter: grayscale(1);
  transition: all 0.2s;
}

.nameplate > .socials a:hover img {
  filter: grayscale(0);
}

.recently {
  height: 60vh;
  background: var(--theme-shallow);
}

@media screen and (max-width: 1000px) {
  .start > img {
    left: -160vw;
  }

  .nameplate {
    --np-width: 85vw;
  }
}
</style>

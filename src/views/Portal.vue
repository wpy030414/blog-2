<script setup lang="ts">
import { ref } from "vue";
import { mdiChevronDown } from "@mdi/js";
import DynamicLine from "@/components/atom/DynamicLine.vue";
import GoButton from "@/components/atom/GoButton.vue";

defineProps<{
  /** 门户主人 */
  who: string;
}>();

/** x 轴上翻转的角度 */
const xDeg = ref(0);
/** y 轴上翻转的角度 */
const yDeg = ref(0);

document.addEventListener("mousemove", (event) => {
  const xRelative = event.clientX / window.innerWidth;
  const yRelative = event.clientY / window.innerHeight;
  const magnifyTimes = 20;
  yDeg.value = -(xRelative - 0.5) * magnifyTimes;
  xDeg.value = (yRelative - 0.5) * magnifyTimes * 1.5;
});

/** 社交网站外链 */
const socials = ref([
  {
    href: "//github.com/penyoofficial/",
    path: "//icons.bootcss.com/assets/icons/github.svg",
    title: "GitHub",
  },
  {
    href: "//github.com/penyo/",
    path: "//gitee.com/favicon.ico",
    title: "Gitee",
  },
  {
    href: "//steamcommunity.com/id/penyoofficial/",
    path: "//store.steamchina.com/favicon.ico",
    title: "Steam",
  },
  {
    href: "//account.xbox.com/profile?gamertag=penyoofficial",
    path: "//support.xbox.com/favicon.png",
    title: "Xbox",
  },
  {
    href: "//music.163.com/#/user/home?id=507084557",
    path: "//s1.music.126.net/style/favicon.ico",
    title: "Netease Music",
  },
  {
    href: "//space.bilibili.com/92465406",
    path: "//www.bilibili.com/favicon.ico",
    title: "Bilibili",
  },
  {
    href: "//t.me/penyoofficial",
    path: "//www.telegcn.org/img/t_logo.svg",
    title: "Telegram",
  },
]);

/**
 * 向下滚动一个屏幕的距离。
 */
function goDown() {
  window.scrollBy({
    top: window.innerHeight - 60,
    behavior: "smooth",
  });
}

/** 最近动态 */
const recents = ref([
  {
    logo: "articles",
    title: "近期博客",
    cards: [{}, {}, {}],
  },
  {
    logo: "pictures",
    title: "近期捕获",
    cards: [{}, {}, {}, {}],
  },
  {
    logo: "projects",
    title: "近期作品",
    cards: [{}, {}, {}, {}],
  },
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
        <a v-for="s in socials" :href="s.href" :title="s.title" target="_blank">
          <img :src="s.path" alt="" width="20" />
        </a>
      </div>
      <go-button inner-text="了解更多" @click="goDown"></go-button>
      <div class="image-shell"></div>
    </section>
  </section>
  <section class="recently">
    <div v-for="t in recents">
      <h1 :style="`--logo: '${t.logo}';`">{{ t.title }}</h1>
      <div :class="`cards-shell ${t.logo}`">
        <div v-for="c in t.cards"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.start {
  position: relative;
  height: calc(100vh - 60px);
  background: var(--theme-1);
  --day: var(--light-tp-high);
  background-image: repeating-linear-gradient(
      45deg,
      var(--day),
      var(--day) 15px,
      transparent 0,
      transparent 30px
    ),
    repeating-linear-gradient(
      -45deg,
      var(--day),
      var(--day) 15px,
      transparent 0,
      transparent 30px
    );
  text-align: center;
  overflow: hidden;
  perspective: 2333px;
}

.dark .start {
  --day: var(--dark-tp-high);
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
  z-index: 800;
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
  background: var(--light-tp-low);
  border-radius: 15px;
  transform-style: preserve-3d;
  transform: translateZ(233px) rotateX(var(--xDeg)) rotateY(var(--yDeg));
  transition: background 0.5s;
}

.dark .nameplate {
  background: var(--dark-tp-low);
}

.nameplate > * {
  position: absolute;
  left: 45px;
  user-select: none;
}

.nameplate > p:nth-child(1) {
  top: 50px;
  color: var(--light-c-sub);
  font-size: 18px;
}

.nameplate > h1 {
  top: 100px;
  color: var(--light-c);
  font-size: 80px;
  transform: translateZ(36px);
  transition: all 0.5s;
}

.dark .nameplate > h1 {
  color: var(--dark-c);
}

.nameplate > .line {
  bottom: 180px;
  color: var(--light-c-sub);
}

.nameplate > .socials {
  bottom: 128px;
}

.nameplate > .socials img {
  margin-right: 12px;
  filter: grayscale(1);
  transition: all 0.2s;
}

.nameplate > .socials a:hover img {
  filter: grayscale(0);
}

.nameplate > button {
  bottom: 50px;
}

.nameplate > .image-shell {
  top: -45px;
  left: calc(var(--np-width) * 0.45);
  width: calc(var(--np-height) * 1.44 * 0.55);
  height: calc(var(--np-height) * 1.44);
  background: url("//prts.wiki/images/0/0c/立绘_阿米娅_skin1.png") center /
    cover;
  transform: translateZ(36px);
}

.recently {
  position: relative;
  padding: 15vh 12vw;
  background: url("//img1.imgtp.com/2023/07/26/2kw8xtPm.png") right / contain
    no-repeat;
  background-attachment: fixed;
  background-color: var(--theme-0);
}

.dark .recently {
  background-color: var(--theme-2);
}

.recently h1 {
  position: relative;
  color: var(--theme-1);
  text-shadow: 0.1em 0.1em 0 var(--light);
  font-size: 48px;
  user-select: none;
}

.dark .recently h1 {
  text-shadow: 0.1em 0.1em 0 var(--dark);
}

.recently h1::before {
  content: var(--logo);
  position: absolute;
  top: -1.4em;
  padding: 0.2em 0.8em;
  background: var(--theme-1);
  color: var(--light);
  text-shadow: none;
  font-size: 16px;
  font-family: "Novecento";
}

.dark .recently h1::before {
  color: var(--dark);
}

.recently .cards-shell {
  display: grid;
  grid-gap: 27px;
  margin: 9vh 0 18vh;
}

.recently .cards-shell.projects {
  margin-bottom: 0;
}

.cards-shell > div {
  display: inline-block;
  height: 333px;
  background: var(--light);
  border-radius: 15px;
  box-shadow: 0 0 18px var(--dark-tp-high);
  transition: all 0.5s;
}

.dark .cards-shell > div {
  background: var(--dark);
}

.cards-shell > div:hover {
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
  transform: translateY(-8px);
}

.recently .articles {
  grid-template-columns: repeat(3, 1fr);
}

.recently .pictures {
  grid-template-columns: repeat(4, 1fr);
}

.recently .projects {
  grid-template-columns: repeat(2, 1fr);
}

.recently .projects > div {
  height: 150px;
}

@media screen and (max-width: 1000px) {
  .start > img {
    left: -233vw;
  }

  .nameplate {
    --np-width: 85vw;
    overflow: hidden;
  }

  .nameplate > * {
    left: 35px;
  }

  .nameplate > h1 {
    top: 90px;
    font-size: 70px;
  }

  .nameplate > .image-shell {
    z-index: -1;
    left: calc(var(--np-width) * 0.21);
    opacity: 0.45;
    transform: translateZ(0);
  }

  .recently {
    padding: 15vh 6vw;
  }

  .recently .cards-shell {
    grid-template-columns: 1fr;
  }
}
</style>

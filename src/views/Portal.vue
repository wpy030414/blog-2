<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { Article } from "@/types/Article";
import type { Picture } from "@/types/Picture";
import type { Collection } from "@/types/Collection";
import { mdiChevronDown } from "@mdi/js";
import DynamicLine from "@/components/basis/DynamicLine.vue";
import GoButton from "@/components/basis/GoButton.vue";
import ContentsShell from "@/components/frame/ContentsShell.vue";
import TopicTitle from "@/components/basis/TopicTitle.vue";
import Loading from "@/components/basis/Loading.vue";
import ArticleCard from "@/components/container/ArticleCard.vue";
import PictureCard from "@/components/container/PictureCard.vue";
import Card from "@/components/basis/Card.vue";
import { useDataStore } from "@/stores/data";

/** 门户主人 */
const who = ref("Penyo");

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
    href: "//gitee.com/penyo/",
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

/** 是否已准备好数据 */
const isReady = ref([false, false, true]);

/** 最近动态 */
const recents: Ref<
  {
    logo: string;
    cards: unknown[];
  }[]
> = ref([
  {
    logo: "articles",
    cards: [],
  },
  {
    logo: "pictures",
    cards: [],
  },
  {
    logo: "projects",
    cards: [],
  },
]);

useDataStore()
  .getArticles(1, 2)
  .then((response) => {
    if (response) {
      recents.value[0].cards = response;
      isReady.value[0] = true;
    }
  });

useDataStore()
  .getPictures(1, 3)
  .then((response) => {
    if (response) {
      recents.value[1].cards = response;
      isReady.value[1] = true;
    }
  });
</script>

<template>
  <section class="start">
    <img src="//prts.wiki/images/1/1d/立绘_阿米娅_skin3.png" alt="" />
    <svg width="24" height="24">
      <path :d="mdiChevronDown"></path>
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
      <go-button :go="true" @click="goDown">了解更多</go-button>
      <div class="image-shell"></div>
    </section>
  </section>
  <contents-shell class="recently">
    <div class="topic-shell">
      <topic-title :logo="recents[0].logo">近期博客</topic-title>
      <loading v-if="!isReady[0]" />
      <div v-if="isReady[0]" class="cards-shell" :class="recents[0].logo">
        <article-card
          v-for="c in recents[0].cards"
          :data="c as Article"
          :isSimpleMode="true"
          @click="$router.push('/blog/' + (c as Article).id)"
        />
      </div>
    </div>
    <div class="topic-shell">
      <topic-title :logo="recents[1].logo">近期捕获</topic-title>
      <loading v-if="!isReady[1]" />
      <div v-if="isReady[1]" class="cards-shell" :class="recents[1].logo">
        <picture-card v-for="c in recents[1].cards" :data="c as Picture" />
      </div>
    </div>
    <div class="topic-shell">
      <topic-title :logo="recents[2].logo">近期作品</topic-title>
      <loading v-if="!isReady[2]" />
      <div v-if="isReady[2]" class="cards-shell" :class="recents[2].logo">
        <card v-for="c in 4" />
      </div>
    </div>
  </contents-shell>
</template>

<style scoped>
.start {
  position: relative;
  height: calc(100vh - 60px);
  background: var(--theme-main);
  background-image: repeating-linear-gradient(
      45deg,
      var(--g-tp-high),
      var(--g-tp-high) 15px,
      transparent 0,
      transparent 30px
    ),
    repeating-linear-gradient(
      -45deg,
      var(--g-tp-high),
      var(--g-tp-high) 15px,
      transparent 0,
      transparent 30px
    );
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
  background: var(--g-tp-low);
  border-radius: 15px;
  transform-style: preserve-3d;
  transform: translateZ(233px) rotateX(var(--xDeg)) rotateY(var(--yDeg));
}

.nameplate > * {
  position: absolute;
  left: 45px;
  user-select: none;
}

.nameplate > p:nth-child(1) {
  top: 50px;
  color: var(--g-c-sub);
  font-size: 18px;
}

.nameplate > h1 {
  top: 100px;
  color: var(--g-c-main);
  font-size: 80px;
  transform: translateZ(36px);
}

.nameplate > .line {
  bottom: 180px;
  color: var(--g-c-sub);
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

.topic-shell {
  margin-top: 27px;
  border: 1px solid transparent;
}

.topic-shell:first-child {
  margin-top: 0;
}

.topic-shell > .cards-shell {
  display: grid;
  grid-gap: 27px;
  margin: 7vh 0 14vh;
}

.topic-shell:last-child > .cards-shell {
  margin-bottom: 0;
}

.cards-shell > div {
  display: inline-block;
  transition: all 0.2s;
}

.cards-shell > div:hover {
  box-shadow: 0 8px 28px #00000026;
  transform: translateY(-8px);
}

.topic-shell:nth-child(1) > .cards-shell {
  grid-template-columns: repeat(2, 1fr);
}

.topic-shell:nth-child(2) > .cards-shell {
  grid-template-columns: repeat(3, 1fr);
}

.topic-shell:nth-child(3) > .cards-shell {
  grid-template-columns: repeat(2, 1fr);
}

.topic-shell:nth-child(3) > .cards-shell > div {
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

  .cards-shell {
    grid-template-columns: 1fr !important;
  }
}
</style>

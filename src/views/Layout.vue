<script lang="ts">
import {
  ElContainer,
  ElFooter,
  ElHeader,
  ElImage,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
} from "element-plus";
import { MoreFilled } from "@element-plus/icons-vue";
export default {
  name: "总布局",
  data() {
    return {
      whRatio: window.innerWidth / window.innerHeight,
      showOptions: false,
      github: "//github.com/penyoofficial/",
      githubPage: "//penyoofficial.github.io/",
      projects: [
        { displayName: "博客", href: "//penyoofficial.github.io/blog" },
        {
          displayName: "木星计划",
          href: "//github.com/penyoofficial/Jupiter.Project/",
        },
        {
          displayName: "MDHu Project",
          href: "//penyoofficial.github.io/mdhu-project/",
        },
      ],
      demos: [
        { displayName: "Penyo DB：NoSQL 数据库", name: "penyo-db" },
        { displayName: "REG：随机事件发生器", name: "random-event-generator" },
        { displayName: "Cyanidation：桌面课程表", name: "cyanidation" },
        {
          displayName: "PMSP：管理系统原型",
          name: "penyo-management-system-prototype",
        },
      ],
      socials: [
        {
          displayName: "网易云音乐",
          href: "//music.163.com/#/user/home?id=507084557",
          favicon: "//s1.music.126.net/style/favicon.ico",
        },
        {
          displayName: "哔哩哔哩",
          href: "//space.bilibili.com/92465406",
          favicon: "//www.bilibili.com/favicon.ico",
        },
        {
          displayName: "Steam",
          href: "//steamcommunity.com/id/penyoofficial/",
          favicon: "//store.steampowered.com/favicon.ico",
        },
      ],
      MoreFilled,
      carouselTheme: [
        {
          tag: "年度主题",
          title: "令技术造福普罗大众",
          subtitle: "为了理想的明天，Penyo 愿奉献一生于这项事业。",
          go: "https://penyoofficial.github.io/blog/article.html?id=2022-ending-summary",
          bgc: "#efefef",
          bgi: "https://pic.imgdb.cn/item/64b527c31ddac507cc02dd62.jpg",
          c: "#000",
        },
        {
          tag: "初试 Electron",
          title: "试试“随机事件发生器”吧！",
          subtitle: "真正的涉猎桌面应用开发，直面分发。",
          go: "https://github.com/penyoofficial/random-event-generator",
          bgc: "#1b1c26",
          bgi: "https://pic.imgdb.cn/item/64b527701ddac507cc01d559.png",
          c: "#fff",
        },
        {
          tag: "最近在听的歌",
          title: "Radiant",
          subtitle: "——《明日方舟》耀光角色曲",
          go: "https://monster-siren.hypergryph.com/music/048738",
          bgc: "#e3effb",
          bgi: "https://pic.imgdb.cn/item/64b529c11ddac507cc0993b8.jpg",
          c: "#000",
        },
      ],
    };
  },
  components: {
    ElContainer,
    ElHeader,
    ElImage,
    ElMain,
    ElFooter,
    ElMenu,
    ElMenuItem,
    ElSubMenu,
    ElLink,
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.setWidthHeightRatio();
    });
  },
  methods: {
    setWidthHeightRatio() {
      this.whRatio = window.innerWidth / window.innerHeight;
    },
    openNewPage(url: string) {
      window.open(url);
    },
  },
};
</script>

<template>
  <el-container>
    <el-header class="pd-header">
      <el-menu
        class="pd-header-menu"
        :mode="whRatio > 1.33 ? 'horizontal' : 'vertical'"
        :ellipsis="false"
      >
        <el-link class="pd-header-logo" :href="githubPage" :underline="false">
          <el-image
            class="pd-header-logo-pic"
            src="//pic.imgdb.cn/item/64b4f0ea1ddac507cc346950.png"
          />
        </el-link>
        <el-button
          class="pd-header-menu-c-mobile"
          v-if="whRatio <= 1.33"
          :icon="MoreFilled"
          @click="showOptions = !showOptions"
        >
        </el-button>
        <el-menu-item
          v-if="whRatio > 1.33 || showOptions"
          v-for="p in projects"
        >
          <el-link :href="p.href" :underline="false" target="_blank">{{
            p.displayName
          }}</el-link>
        </el-menu-item>
        <el-sub-menu v-if="whRatio > 1.33 || showOptions" index="1">
          <template #title>示范工程</template>
          <el-menu-item v-for="d in demos">
            <el-link
              :href="github + d.name"
              :underline="false"
              target="_blank"
              >{{ d.displayName }}</el-link
            >
          </el-menu-item>
        </el-sub-menu>
        <div style="flex-grow: 1"></div>
        <el-sub-menu v-if="whRatio > 1.33 || showOptions" index="2">
          <template #title>关注 Penyo</template>
          <el-menu-item v-for="s in socials">
            <el-link :href="s.href" :underline="false" target="_blank">
              <el-image
                class="pd-header-follow-icon"
                :src="s.favicon"
              ></el-image>
              {{ s.displayName }}
            </el-link>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-header>
    <el-main style="padding: 0">
      <el-carousel height="588px" :interval="8000">
        <el-carousel-item
          class="pd-main-carousel-item"
          v-for="t in carouselTheme"
          :style="`--bgc: ${t.bgc}; --bgi: url(${t.bgi}); --c: ${t.c};`"
        >
          <p class="tag">{{ t.tag }}</p>
          <h1 class="title">{{ t.title }}</h1>
          <p class="subtitle">{{ t.subtitle }}</p>
          <el-button type="info" size="large" @click="openNewPage(t.go)"
            >了解更多</el-button
          >
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <el-main> </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style scoped>
.pd-header {
  position: sticky;
  z-index: 999;
  top: 0;
  padding: 0;
  height: 56px;
}

.pd-header-menu {
  padding: 0 1em;
}

.pd-header-logo {
  margin: 0 2em;
}

.pd-header-logo-pic {
  height: 56px;
}

.pd-header-menu-c-mobile {
  position: absolute;
  right: 3em;
  top: 12px;
}

.pd-header-follow-icon {
  width: 1.5em;
  height: 1.5em;
  padding: 7.5px 0.5em 7.5px 0;
}

.pd-main-carousel-item {
  background: var(--bgi) center 20% / cover;
}

.pd-main-carousel-item::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, var(--bgc) 30%, transparent);
}

.pd-main-carousel-item > * {
  margin: 3em 10% 0;
}

.pd-main-carousel-item > .tag {
  margin-top: 4.5em;
  color: var(--c);
  font-size: 22px;
  font-weight: bold;
}

.pd-main-carousel-item > .title {
  margin-top: 0.5em;
  height: 2em;
  color: var(--c);
  font-size: 48px;
}

.pd-main-carousel-item > .subtitle {
  margin-top: 4.5em;
  height: 2em;
  color: var(--c);
  font-size: 20px;
}

@media screen and (max-width: 600px) and (min-height: 450px) {
  .pd-main-carousel-item > .subtitle {
    margin-top: 3.6em;
  }
}
</style>

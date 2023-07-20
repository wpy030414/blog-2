<script lang="ts">
export default {
  name: "总布局",
  data() {
    return {
      whRatio: window.innerWidth / window.innerHeight,
      github: "//github.com/penyoofficial/",
      githubPage: "//penyoofficial.github.io/",
      header: {
        showOptions: false,
        projects: [
          { displayName: "博客", href: "//penyoofficial.github.io/blog" },
          {
            displayName: "木星计划",
            href: "//github.com/penyoofficial/JupiterProject/",
          },
          {
            displayName: "MDHu Project",
            href: "/mdhu-project/",
          },
        ],
        demos: [
          { displayName: "Penyo DB：NoSQL 数据库", name: "penyo-db" },
          {
            displayName: "REG：随机事件发生器",
            name: "random-event-generator",
          },
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
            favicon: "//store.steamchina.com/favicon.ico",
          },
        ],
      },
      footer: {
        cards: [
          {
            title: "测试标题",
            links: [
              {
                displayName: "测试链接",
                url: "",
              },
            ],
          },
          {
            title: "测试标题",
            links: [
              {
                displayName: "测试链接",
                url: "",
              },
            ],
          },
        ],
      },
    };
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
        <el-link class="pd-header-logo" href="/" :underline="false">
          <el-image
            class="pd-header-logo-pic"
            src="//pic.imgdb.cn/item/64b4f0ea1ddac507cc346950.png"
          />
        </el-link>
        <el-button
          class="pd-header-menu-c-mobile"
          v-if="whRatio <= 1.33"
          @click="header.showOptions = !header.showOptions"
        >
          <el-icon>
            <EpArrowDown />
          </el-icon>
        </el-button>
        <el-menu-item
          v-if="whRatio > 1.33 || header.showOptions"
          v-for="p in header.projects"
        >
          <el-link :href="p.href" :underline="false" target="_blank">
            {{ p.displayName }}
          </el-link>
        </el-menu-item>
        <el-sub-menu v-if="whRatio > 1.33 || header.showOptions" index="1">
          <template #title>示范工程</template>
          <el-menu-item v-for="d in header.demos">
            <el-link :href="github + d.name" :underline="false" target="_blank">
              {{ d.displayName }}
            </el-link>
          </el-menu-item>
        </el-sub-menu>
        <div style="flex-grow: 1"></div>
        <el-sub-menu v-if="whRatio > 1.33 || header.showOptions" index="2">
          <template #title>关注 Penyo</template>
          <el-menu-item v-for="s in header.socials">
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
    <router-view></router-view>
    <el-footer class="pd-footer">
      <div class="pd-footer-siteinfo">
        <el-card
          class="pd-footer-card"
          v-for="c in footer.cards"
          shadow="hover"
        >
          <template #header>
            <span>{{ c.title }}</span>
          </template>
          <el-link v-for="l in c.links" :href="l.url">
            {{ l.displayName }}
          </el-link>
        </el-card>
      </div>
      <p class="pd-footer-copyright">
        版权归 Penyo 所有。保留所有权利。<br v-if="whRatio <= 1.33" />Copyright
        (c) Penyo. All rights reserved.
      </p>
    </el-footer>
  </el-container>
</template>

<style scoped>
.pd-header {
  position: sticky;
  z-index: 999;
  top: 0;
  padding: 0;
  --pd-header-height: 58px;
  height: var(--pd-header-height);
}

.pd-header-menu {
  padding: 0 1em;
}

.pd-header-logo {
  margin: 0 2em;
}

.pd-header-logo-pic {
  height: var(--pd-header-height);
}

.pd-header-menu-c-mobile {
  position: absolute;
  right: 3em;
  top: 14px;
}

.pd-header-follow-icon {
  width: 1.5em;
  height: 1.5em;
  padding: 7.5px 0.5em 7.5px 0;
}

.pd-footer {
  padding: 0;
}

.pd-footer-siteinfo {
  padding: 10vh 0;
  text-align: center;
}

.pd-footer-card {
  display: inline-block;
  margin: 1em 2em;
  width: 15em;
}

.pd-footer-copyright {
  padding: 1em 0 1.2em;
  background: var(--pd-bgc);
  color: var(--pd-sub-c);
  font-size: 14px;
  letter-spacing: 0.8px;
  text-align: center;
}
</style>

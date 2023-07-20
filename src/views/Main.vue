<script lang="ts">
export default {
  name: "主页面",
  data() {
    return {
      carouselThemes: [
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
          tag: "初见 Electron",
          title: "试试“随机事件发生器”！",
          subtitle: "真正的涉猎桌面应用开发，直面分发。",
          go: "https://github.com/penyoofficial/random-event-generator",
          bgc: "#1b1c26",
          bgi: "https://pic.imgdb.cn/item/64b527701ddac507cc01d559.png",
          c: "#fff",
        },
        {
          tag: "近期单曲循环最多次的歌",
          title: "Radiant",
          subtitle: "——《明日方舟》耀光角色曲",
          go: "https://monster-siren.hypergryph.com/music/048738",
          bgc: "#e3effb",
          bgi: "https://pic.imgdb.cn/item/64b529c11ddac507cc0993b8.jpg",
          c: "#000",
        },
      ],
      topics: [
        {
          title: "世界正在飞速发展",
          subtitle: "走出象牙塔，个人又该何去何从",
          selected: "0",
          contains: [
            {
              label: "信息技术",
              body: "1",
            },
            {
              label: "能源",
              body: "2",
            },
            {
              label: "生命科学",
              body: "3",
            },
            {
              label: "半导体制造",
              body: "4",
            },
          ],
        },
        {
          title: "对未来憧憬着",
          subtitle: "为了到达更美丽的明天，而不断前进",
          selected: "0",
          contains: [
            {
              label: "第一阶段",
              body: "1",
            },
            {
              label: "第二阶段",
              body: "2",
            },
            {
              label: "第三阶段",
              body: "3",
            },
          ],
        },
        {
          title: "闲来垂钓碧溪上",
          subtitle: "All work and no play makes Penyo a dull boy.",
          selected: "0",
          contains: [
            {
              label: "音乐",
              body: "1",
            },
            {
              label: "手工",
              body: "2",
            },
            {
              label: "游戏",
              body: "3",
            },
          ],
        },
      ],
    };
  },
  methods: {
    openNewPage(url: string) {
      window.open(url);
    },
  },
};
</script>

<template>
  <el-main class="pd-main">
    <el-carousel height="90vh" :interval="5000">
      <el-carousel-item
        class="pd-main-carousel-item"
        v-for="t in carouselThemes"
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
  <el-main class="pd-main-2" v-for="t in topics">
    <h1 class="pd-main-2-title">{{ t.title }}</h1>
    <p class="pd-main-2-subtitle">{{ t.subtitle }}</p>
    <el-tabs class="pd-main-2-tabs" v-model="t.selected">
      <el-tab-pane v-for="(c, i) in t.contains" :label="c.label" :name="`${i}`">
        <p>{{ c.body }}</p>
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>

<style scoped>
.pd-main {
  padding: 0;
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
  margin-top: 20vh;
  color: var(--c);
  font-size: 24px;
  font-weight: bold;
}

.pd-main-carousel-item > .title {
  margin-top: 3vh;
  min-height: 2em;
  color: var(--c);
  font-size: 45px;
}

.pd-main-carousel-item > .subtitle {
  margin-top: 5vh;
  min-height: 2em;
  color: var(--c);
  font-size: 20px;
}

.pd-main-2 {
  padding: 10vh 15vw;
  background: var(--pd-bgc);
}

.pd-main-2:nth-child(2n) {
  background: #fff;
}

.pd-main-2-title {
  color: var(--pd-c);
  font-size: 40px;
  text-align: center;
}

.pd-main-2-subtitle {
  margin: 1.8em 0;
  color: var(--pd-sub-c);
  font-size: 18px;
  text-align: center;
}

.pd-main-2-tabs {
  padding-bottom: 10vh;
  text-align: center;
  font-size: 18px;
}

@media screen and (max-width: 600px) and (min-height: 450px) {
  .pd-main-carousel-item > .tag {
    margin-top: 15vh;
  }

  .pd-main-carousel-item > .subtitle {
    margin-top: 10vh;
  }
}
</style>

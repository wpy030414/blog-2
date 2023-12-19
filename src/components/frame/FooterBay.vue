<script setup lang="ts">
import { ref } from "vue";
import { useLocationStore } from "@/stores/location";

/** 链接 */
const infos = ref([
  {
    title: "更多",
    items: [
      { name: "关于", href: "/about" },
      { name: "赞助", href: "/sponsor" },
      { name: "赤牧神社", href: "/shrine" },
      { name: "？", href: "/easter-egg" },
    ],
  },
  {
    title: "设计参考",
    items: [
      { name: "保罗的小窝 Beta", href: "//beta.paul.ren/" },
      { name: "Material Design 3", href: "//m3.material.io/" },
      { name: "PicToGrammers", href: "//pictogrammers.com/" },
    ],
  },
  {
    title: "服务支持",
    items: [
      { name: "聚合图床", href: "//www.superbed.cn/" },
      { name: "木星计划", href: "//pen-yo.github.io/project-jupiter/" },
    ],
  },
]);
</script>

<template>
  <footer>
    <div>
      <ul class="card h-card">
        <li>
          <h4>Penyo Development</h4>
          <p><i>To archive higher value.</i></p>
        </li>
      </ul>
      <ul class="card" v-for="i in infos.slice(0, 1)">
        <h4>{{ i.title }}</h4>
        <li v-for="c in i.items">
          <router-link :to="c.href">{{ c.name }}</router-link>
        </li>
      </ul>
      <ul class="card" v-for="i in infos.slice(1)">
        <h4>{{ i.title }}</h4>
        <li v-for="c in i.items">
          <a :href="c.href" target="_blank">{{ c.name }}</a>
        </li>
      </ul>
    </div>
    <p class="site-info">
      © {{ new Date().getFullYear() }} Penyo. All rights reserved.
      <a
        v-if="useLocationStore().isInChinaMainland"
        href="//beian.miit.gov.cn/"
        target="_blank"
      >
        互联网 ICP 备案：皖ICP备2023005063号
      </a>
    </p>
  </footer>
</template>

<style scoped>
@keyframes running {
  0% {
    left: 0;
  }

  100% {
    left: calc(100% - 16px);
  }
}

footer {
  padding: 8.1vh 12vw;
  background-color: var(--g-bg-c);
  background-image: radial-gradient(var(--theme-main-tp) 10%, transparent 0),
    radial-gradient(var(--theme-main-tp) 10%, transparent 0);
  background-size: 30px 30px;
  background-position:
    0 0,
    15px 15px;

  & > div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  & .card {
    display: inline-block;
    vertical-align: top;
    margin-bottom: 7.2vh;
    color: var(--g-c-main);

    & > h4 {
      margin-bottom: 1.2em;
      font-size: 20px;
    }

    & > li {
      margin-bottom: 1.2em;
      transform: translateX(1em);
      color: var(--theme-main);
    }

    & > li > a {
      position: relative;

      &:hover::before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 16px;
        height: 2px;
        background: var(--theme-main);
        color: var(--theme-main);
        text-decoration: none;
        animation: running 1s infinite;
      }
    }
  }

  & .h-card {
    width: 300px;
    user-select: none;

    & > li {
      list-style: none;
      transform: none;

      & > h4 {
        position: relative;
        margin-bottom: 1em;

        &::before {
          content: "";
          position: absolute;
          bottom: -0.6em;
          width: 70%;
          height: 1.5px;
          background: var(--theme-main);
        }
      }
    }
  }

  .site-info {
    color: var(--g-c-main);
    font-size: 15px;

    & > a {
      float: right;
      color: var(--g-c-sub);
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 1000px) {
  footer {
    & > div {
      grid-template-columns: 1fr;
    }

    & .site-info > a {
      float: none;
      display: block;
    }
  }
}
</style>

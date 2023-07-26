<script setup lang="ts">
import { ref } from "vue";

/** 句子 */
const lines = ref([
  "初见，可爱，结婚！（你",
  "JS 创造的世界并非完美......",
  "缺对象就 new 一个！",
  "宇宙万法的源头到底是什么？",
  "我知道你在想什么！",
  "阿噗噜派！",
  "喵喵喵喵喵？",
  "是时候本升专了！",
  "当你感觉很无聊时，就说明你无事可做了",
  "你感到有邪恶的东西在看着你......",
  "斯哈斯哈，嗅嗅嗅嗅！",
  "越靠近期末考试，手机越好玩",
  "我不会说其实我在木星计划里藏私货了",
  "怎么可能有人不疯，只是硬撑罢了（",
  "来线下找我玩吧！",
]);

/** 待渲染 */
const toRender = ref(
  lines.value[Math.round(Math.random() * 100) % lines.value.length],
);

(() => {
  /** 退格阻塞 */
  const blockB = 100;
  /** 进格阻塞 */
  const blockI = 250;
  /** 完成阻塞 */
  const blockD = 2000;
  /** 是否处于回退模式 */
  let isBackspacing = true;
  /** 渲染预备区 */
  let readyToRender = "";
  /** 渲染预备位 */
  let readyBit = 0;
  /** 行动线程 ID */
  let id = 0;
  /** 行动 */
  const action = async () => {
    if (isBackspacing)
      if (toRender.value.length > 0)
        toRender.value = toRender.value.slice(0, -1);
      else {
        readyToRender =
          lines.value[Math.round(Math.random() * 100) % lines.value.length];
        isBackspacing = !isBackspacing;
        clearInterval(id);
        await new Promise((resolve) => setTimeout(resolve, blockI));
        id = setInterval(action, blockI);
        toRender.value = readyToRender.charAt(readyBit++);
      }
    else if (readyBit < readyToRender.length)
      toRender.value += readyToRender.charAt(readyBit++);
    else {
      readyBit = 0;
      isBackspacing = !isBackspacing;
      clearInterval(id);
      await new Promise((resolve) => setTimeout(resolve, blockD));
      id = setInterval(action, blockB);
    }
  };
  setTimeout(() => {
    id = setInterval(action, blockB);
  }, blockD);
})();
</script>

<template>
  <p>{{ toRender }}</p>
</template>

<style scoped>
@keyframes shining {
  0% {
    opacity: 1;
  }

  49.9% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  99.9% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

p::after {
  content: " |";
  position: relative;
  top: -0.9px;
  animation: shining 1s infinite;
}
</style>

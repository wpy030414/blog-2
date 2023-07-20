<script lang="ts">
export default {
  name: "404 Not Found",
};
</script>

<template>
  <el-main class="pd-main">
    <el-row class="pd-main-shell">
      <el-image
        class="pd-main-404-pic"
        src="//pic.imgdb.cn/item/64b55f151ddac507cce63325.png"
      />
      <h1 class="pd-main-title">哎呀！没找到该网页！</h1>
    </el-row>
  </el-main>
</template>

<style scoped>
.pd-main {
  height: 90vh;
  padding: 0 30%;
  background: url(//prts.wiki/images/6/6d/Avg_bg_27_g2_inexport.png) center /
    cover;
}

.pd-main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
}

.pd-main-shell {
  margin-top: 28vh;
}

.pd-main-404-pic {
  margin: auto;
  height: 6em;
  font-size: 30px;
}

.pd-main-title {
  margin: auto;
  color: var(--pd-c);
  font-size: 30px;
  line-height: 6em;
  text-align: center;
}

@media screen and (max-width: 600px) and (min-height: 450px) {
  .pd-main {
    padding: 0;
  }

  .pd-main-shell {
    margin-top: 20vh;
  }

  .pd-main-title {
    margin-top: 8vh;
    line-height: 0;
  }
}
</style>

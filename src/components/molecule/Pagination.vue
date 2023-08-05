<script setup lang="ts">
import { ref } from "vue";
import GoButton from "@/components/atom/GoButton.vue";

const props = defineProps<{
  /** 页数 */
  pageNum: number;
  /** 页总量 */
  pageAmount: number;
}>();

const pageNum = ref(props.pageNum);

defineEmits(["update:pageNum"]);
</script>

<template>
  <div>
    <go-button
      :go="false"
      @click="$emit('update:pageNum', --pageNum)"
      :disabled="pageNum <= 1 ? true : false"
      >上一页</go-button
    >
    <span>{{ `${pageNum}/${pageAmount}` }}</span>
    <go-button
      :go="false"
      @click="$emit('update:pageNum', ++pageNum)"
      :disabled="pageNum >= pageAmount ? true : false"
      >下一页</go-button
    >
  </div>
</template>

<style scoped>
div {
  margin-top: 2em;
  text-align: center;
}

button {
  margin: 0;
}

span {
  margin: 0 2em;
  color: var(--g-c-main);
  user-select: none;
}
</style>

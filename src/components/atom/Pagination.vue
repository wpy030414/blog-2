<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<
  {
    /** 是否需要接管全部分页工作 */
    needTaken?: boolean;
    /** 页数 */
    pageNum?: number;
    /** 页容量 */
    pageSize?: number;
  } & (
    | {
        needTaken: true;
        /** 未分页的数据 */
        unpagedData: unknown[];
      }
    | {
        needTaken: false;
        /** 已分页的数据 */
        pagedData: unknown[];
        /** 未分页的数据尺寸 */
        fullSize: number;
      }
  )
>();

const pageNum = ref(props.pageNum || 1);
const pageSize = ref(props.pageSize || 10);
</script>

<template>
  <slot></slot>
  <div class="op"></div>
</template>

<style scoped></style>

import { defineStore } from "pinia";
import { ref } from "vue";

export const useLocationStore = defineStore("location", () => {
  /** 网站服务器是否在中国大陆 */
  const isInChinaMainland = ref(true);
  return { isInChinaMainland };
});

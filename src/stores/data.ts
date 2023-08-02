import { defineStore } from "pinia";
import { ref } from "vue";
import { type Article } from "@/types/Article";

export const useDataStore = defineStore("data", () => {
  /** 是否使用静态化数据 */
  const useStatic = ref(true);
  /** 静态数据地址 */
  const staticDataURL = ref({
    /** 通用前缀 */
    prefix: "//raw.githubusercontent.com/penyoofficial/penyo-portal-rd/main/",
  });
  /** 动态数据地址 */
  const dynamicDataURL = ref({});

  /**
   * 获取文章。
   * @param pageNum 页数。
   * @param pageSize 页容量。
   */
  async function getArticles(
    pageNum?: number,
    pageSize?: number,
  ): Promise<Article[] | null> {
    if (useStatic.value) {
      return await (
        await fetch(staticDataURL.value.prefix + "articles.json")
      ).json();
    } else {
      return null;
    }
  }
  return { getArticles };
});

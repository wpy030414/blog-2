import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import type { Article } from "@/types/Article";

export const useUniqueDataStore = defineStore("unique-store", () => {
  /** 静态数据地址 */
  const staticDataURL = ref({
    /** 通用前缀 */
    prefix: "//raw.githubusercontent.com/penyoofficial/penyo-portal-rd/main/",
  });

  /** 自述缓存 */
  const readmeCache: Ref<Article | undefined> = ref();

  /**
   * 获取自述。
   */
  async function getReadme(): Promise<Article> {
    if (!readmeCache.value) {
      readmeCache.value = await (
        await fetch(staticDataURL.value.prefix + "readme.json")
      ).json();
    }

    return readmeCache.value as Article;
  }

  /** 赞助页缓存 */
  const sponsorshipCache: Ref<Article | undefined> = ref();

  /**
   * 获取自述。
   */
  async function getSponsorship(): Promise<Article> {
    if (!sponsorshipCache.value) {
      sponsorshipCache.value = await (
        await fetch(staticDataURL.value.prefix + "sponsorship.json")
      ).json();
    }

    return sponsorshipCache.value as Article;
  }

  return { getReadme, getSponsorship };
});

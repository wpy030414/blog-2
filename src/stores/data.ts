import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import type { Article } from "@/types/Article";
import type { Picture } from "@/types/Picture";
import type { Project } from "@/types/Project";
import type { Collection } from "@/types/Collection";

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
   * 获取分页数据。
   *
   * @param unpagedData 未分页的数据
   * @param pageNum 页数。从 1 开始计算
   * @param pageSize 页容量。必须是正整数
   */
  function getPagedData(
    unpagedData: unknown[],
    pageNum: number,
    pageSize: number,
  ) {
    if (pageNum % 1 != 0 || pageNum < 1 || pageSize % 1 != 0 || pageSize < 1)
      throw new Error("Invalid parameter(s)! ");
    const start = (pageNum - 1) * pageSize;
    const end =
      start + pageSize > unpagedData.length
        ? unpagedData.length
        : start + pageSize;
    return unpagedData.slice(start, end);
  }

  /**
   * 获取总量。这常常被分页机制需要。
   *
   * @param target 目标
   */
  async function getAmount(target: "articles" | "pictures" | "collections") {
    switch (target) {
      case "articles":
        if (articlesTemp.value.length === 0)
          return (await getArticles()).length;
        return articlesTemp.value.length;
      case "pictures":
        if (picturesTemp.value.length === 0)
          return (await getPictures()).length;
        return picturesTemp.value.length;
      case "collections":
        if (collectionsTemp.value.length === 0)
          return (await getCollections()).length;
        return collectionsTemp.value.length;
      default:
        return -1;
    }
  }

  /** 文章缓存 */
  const articlesTemp: Ref<Article[]> = ref([]);

  /**
   * 获取文章。
   *
   * @param pageNum 页数。
   * @param pageSize 页容量。
   */
  async function getArticles(
    pageNum?: number,
    pageSize?: number,
  ): Promise<Article[]> {
    if (articlesTemp.value.length === 0)
      if (useStatic.value) {
        articlesTemp.value = await (
          await fetch(staticDataURL.value.prefix + "articles.json")
        ).json();
      } else {
      }

    if (pageNum && pageSize)
      return getPagedData(articlesTemp.value, pageNum, pageSize) as Article[];
    return articlesTemp.value;
  }

  /** 照片缓存 */
  const picturesTemp: Ref<Picture[]> = ref([]);

  /**
   * 获取图片。
   *
   * @param pageNum 页数。
   * @param pageSize 页容量。
   */
  async function getPictures(
    pageNum?: number,
    pageSize?: number,
  ): Promise<Picture[]> {
    if (picturesTemp.value.length === 0)
      if (useStatic.value) {
        let pictures: Picture[] = [];
        ((await getArticles()) as Article[]).forEach((a) => {
          const picsRaw = a.body.match(/!\[.*?\]\(.+?\)/g);
          if (picsRaw)
            picsRaw.forEach((p) => {
              pictures.push({
                id: a.id,
                date: new Date(a.date.$date),
                url: (p.match(/!\[.*?\]\((.+?)\)/) as RegExpMatchArray)[1],
              });
            });
        });
        picturesTemp.value = pictures;
      } else {
      }

    if (pageNum && pageSize)
      return getPagedData(picturesTemp.value, pageNum, pageSize) as Picture[];
    return picturesTemp.value;
  }

  /** 项目缓存 */
  const projectsTemp: Ref<Project[]> = ref([]);

  /**
   * 获取文章。
   *
   * @param pageNum 页数。
   * @param pageSize 页容量。
   */
  async function getProjects(
    pageNum?: number,
    pageSize?: number,
  ): Promise<Project[]> {
    if (projectsTemp.value.length === 0)
      if (useStatic.value) {
        projectsTemp.value = await (
          await fetch(staticDataURL.value.prefix + "projects.json")
        ).json();
      } else {
      }

    if (pageNum && pageSize)
      return getPagedData(projectsTemp.value, pageNum, pageSize) as Project[];
    return projectsTemp.value;
  }

  /** 收藏缓存 */
  const collectionsTemp: Ref<Collection[]> = ref([]);

  /**
   * 获取文章。
   *
   * @param pageNum 页数。
   * @param pageSize 页容量。
   */
  async function getCollections(
    pageNum?: number,
    pageSize?: number,
  ): Promise<Collection[]> {
    if (collectionsTemp.value.length === 0)
      if (useStatic.value) {
        collectionsTemp.value = await (
          await fetch(staticDataURL.value.prefix + "collections.json")
        ).json();
      } else {
      }

    if (pageNum && pageSize)
      return getPagedData(
        collectionsTemp.value,
        pageNum,
        pageSize,
      ) as Collection[];
    return collectionsTemp.value;
  }

  /** 节目缓存 */
  // const programsTemp: Ref<Program[]> = ref([]);

  return {
    getAmount,
    getArticles,
    getPictures,
    getProjects,
    getCollections,
  };
});

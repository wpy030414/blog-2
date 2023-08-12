import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import type { Article } from "@/types/Article";
import type { Picture } from "@/types/Picture";
import type { Project } from "@/types/Project";
import type { Collection } from "@/types/Collection";
import type { Program } from "@/types/Program";

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
        if (articlesCache.value.length === 0)
          return (await getArticles()).length;
        return articlesCache.value.length;
      case "pictures":
        if (picturesCache.value.length === 0)
          return (await getPictures()).length;
        return picturesCache.value.length;
      case "collections":
        if (collectionsCache.value.length === 0)
          return (await getCollections()).length;
        return collectionsCache.value.length;
      default:
        return -1;
    }
  }

  /** 文章缓存 */
  const articlesCache: Ref<Article[]> = ref([]);

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
    if (articlesCache.value.length === 0)
      if (useStatic.value) {
        type ArticleRawEx = {
          date: {
            $date: string;
          };
        };
        const raws: (Article | ArticleRawEx)[] = await (
          await fetch(staticDataURL.value.prefix + "articles.json")
        ).json();
        raws.forEach((r) => {
          r.date = new Date((r as ArticleRawEx).date.$date);
          articlesCache.value.push(r as Article);
        });
      } else {
      }

    if (pageNum && pageSize)
      return getPagedData(articlesCache.value, pageNum, pageSize) as Article[];
    return articlesCache.value;
  }

  /** 照片缓存 */
  const picturesCache: Ref<Picture[]> = ref([]);

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
    if (picturesCache.value.length === 0)
      if (useStatic.value) {
        let pictures: Picture[] = [];
        ((await getArticles()) as Article[]).forEach((a) => {
          const picsRaw = a.body.match(/!\[.*?\]\(.+?\)/g);
          if (picsRaw)
            picsRaw.forEach((p) => {
              pictures.push({
                id: a.id,
                date: new Date(a.date),
                url: (p.match(/!\[.*?\]\((.+?)\)/) as RegExpMatchArray)[1],
              });
            });
        });
        picturesCache.value = pictures;
      } else {
      }

    if (pageNum && pageSize)
      return getPagedData(picturesCache.value, pageNum, pageSize) as Picture[];
    return picturesCache.value;
  }

  /** 项目缓存 */
  const projectsCache: Ref<Project[]> = ref([]);

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
    if (projectsCache.value.length === 0)
      if (useStatic.value) {
        projectsCache.value = await (
          await fetch(staticDataURL.value.prefix + "projects.json")
        ).json();
      } else {
      }

    if (pageNum && pageSize)
      return getPagedData(projectsCache.value, pageNum, pageSize) as Project[];
    return projectsCache.value;
  }

  /** 收藏缓存 */
  const collectionsCache: Ref<Collection[]> = ref([]);

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
    if (collectionsCache.value.length === 0)
      if (useStatic.value) {
        collectionsCache.value = await (
          await fetch(staticDataURL.value.prefix + "collections.json")
        ).json();
      } else {
      }

    if (pageNum && pageSize)
      return getPagedData(
        collectionsCache.value,
        pageNum,
        pageSize,
      ) as Collection[];
    return collectionsCache.value;
  }

  /** 节目缓存 */
  const programsCache: Ref<Program[]> = ref([]);

  /**
   * 获取节目。
   */
  async function getPrograms(): Promise<Program[]> {
    if (programsCache.value.length === 0)
      if (useStatic.value) {
        type ProgramRawEx = {
          releaseDate: {
            $date: string;
          };
          urls: [string, string][];
        };
        const raws: (Program | ProgramRawEx)[] = await (
          await fetch(staticDataURL.value.prefix + "programs.json")
        ).json();
        raws.forEach((r) => {
          r.releaseDate = new Date((r as ProgramRawEx).releaseDate.$date);
          r.urls = new Map((r as ProgramRawEx).urls);
          programsCache.value.push(r as Program);
        });
      } else {
      }

    return programsCache.value;
  }

  return {
    getAmount,
    getArticles,
    getPictures,
    getProjects,
    getCollections,
    getPrograms,
  };
});

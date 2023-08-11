import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageTitleStore = defineStore("page-title", () => {
  /** 通用后缀 */
  const postfix = ref("Penyo 门户 | Penyo Portal");
  /** 页标题“持有者” */
  const holder = document.querySelector("#page-title") as HTMLTitleElement;

  /**
   * 设置页标题。
   *
   * @param parts 分级标题
   */
  function setPageTitle(parts: string[]) {
    let temp = postfix.value;
    parts.forEach((p) => {
      if (p) temp = p + " - " + temp;
    });
    holder.innerText = temp;
  }

  return { setPageTitle };
});

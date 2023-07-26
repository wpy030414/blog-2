import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  /** 是否处于白天模式 */
  const isLight = ref(
    localStorage.getItem("isLight") !== "false" ? true : false,
  );

  /**
   * 设置主题。
   */
  function setTheme() {
    if (isLight.value) document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
  }

  /**
   * 改变主题。
   */
  function changeTheme() {
    isLight.value = !isLight.value;
    localStorage.setItem("isLight", `${isLight.value}`);
    setTheme();
  }
  return { setTheme, changeTheme };
});

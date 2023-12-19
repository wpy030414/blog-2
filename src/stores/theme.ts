import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  /** 是否处于暗黑模式 */
  const isDark = ref(localStorage.getItem("isDark") === "true" ? true : false);

  /** 有色主题 */
  const coloredTheme = ref(["green", "vermillion"] as const);
  /** 有色主题类型 */
  type ColoredTheme = (typeof coloredTheme.value)[number];

  /**
   * 设置主题。
   *
   * @param color 有色主题
   */
  function setTheme(color?: ColoredTheme) {
    const holder = document.documentElement.classList;
    if (isDark.value) holder.add("dark");
    else holder.remove("dark");
    if (color) {
      coloredTheme.value.forEach((ct) => {
        holder.remove(ct);
      });
      holder.add(color);
    }
  }

  /**
   * 改变时间主题。
   */
  function changeDayTheme() {
    isDark.value = !isDark.value;
    localStorage.setItem("isDark", `${isDark.value}`);
    setTheme();
  }

  return { setTheme, changeDayTheme };
});

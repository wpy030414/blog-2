import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme: Ref<"light" | "dark"> = ref("light");
});

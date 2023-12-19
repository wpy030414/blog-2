import { defineStore } from "pinia";
import { ref } from "vue";

export const useDrawingStore = defineStore("drawing", () => {
  /** 上一次抽签时间 */
  const lastDrawing = ref(
    localStorage.getItem("lastDrawing")
      ? new Date(localStorage.getItem("lastDrawing") as string)
      : new Date("1970-01-01"),
  );

  /**
   * 抽签记录。
   */
  function draw() {
    lastDrawing.value = new Date();
    localStorage.setItem("lastDrawing", lastDrawing.value.toISOString());
  }

  /**
   * 判断能否抽签。
   */
  function canDraw() {
    const gap = new Date().getTime() - lastDrawing.value.getTime();
    if (gap / (1000 * 60 * 60) < 8) return false;
    return true;
  }

  return { draw, canDraw };
});

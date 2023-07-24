import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const slogans = ref(null);
  const blogs = ref(null);
  const aphorisms = ref(null);
  function update(
    offset: number,
    amount: number,
    type: "blogs" | "aphorisms" | "",
  ) {}
});

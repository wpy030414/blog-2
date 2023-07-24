import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const nickname = ref(null);
  const token = ref(null);
  function login(nickname: string, token: string) {}
});

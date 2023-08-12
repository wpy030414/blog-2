import { defineStore } from "pinia";
import { ref } from "vue";

export const useBGMStore = defineStore("bgm", () => {
  /** 流媒体供应商 */
  const vendor = ref({
    getNeteaseUnit: (id: string) => {
      return `//music.163.com/song/media/outer/url?id=${id}.mp3`;
    },
  });

  /** 默认背景音乐 */
  const defaultSong = ref(vendor.value.getNeteaseUnit("27461858"));
  /** 背景音乐“持有者” */
  const holder = document.querySelector(".player") as HTMLAudioElement;

  /**
   * 设置背景音乐。
   *
   * @param url 链接
   */
  function setBGM(url: string) {
    holder.src = url;
  }

  /**
   * 重置背景音乐。
   */
  function resetBGM() {
    holder.src = defaultSong.value;
  }

  /**
   * 播放 BGM。
   */
  function play() {
    if (holder.paused) holder.play();
  }

  /**
   * 暂停 BGM。
   */
  function pause() {
    if (holder.paused) holder.pause();
  }

  return { vendor, setBGM, resetBGM, play, pause };
});

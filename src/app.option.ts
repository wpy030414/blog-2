import type { AppOption } from "@/types/AppOption";
import { Theme } from "@/types/Theme";

export const option: AppOption = {
  owner: "Penyo",
  socialLinks: [
    {
      link: "//github.com/pen-yo/",
      icon: "//github.com/favicons/favicon.png",
      name: "GitHub",
    },
    {
      link: "//gitee.com/penyo/",
      icon: "//gitee.com/favicon.ico",
      name: "Gitee",
    },
    {
      link: "//steamcommunity.com/id/penyoofficial/",
      icon: "//store.steamchina.com/favicon.ico",
      name: "Steam",
    },
    {
      link: "//account.xbox.com/profile?gamertag=penyoofficial",
      icon: "//support.xbox.com/favicon.png",
      name: "Xbox",
    },
    {
      link: "//music.163.com/#/user/home?id=507084557",
      icon: "//s1.music.126.net/style/favicon.ico",
      name: "Netease Music",
    },
    {
      link: "//space.bilibili.com/92465406",
      icon: "//www.bilibili.com/favicon.ico",
      name: "Bilibili",
    },
    {
      link: "//t.me/penyoofficial",
      icon: "//web.tel.onl/assets/img/favicon-32x32.png",
      name: "Telegram",
    },
  ],
  dataSource: "//raw.githubusercontent.com/pen-yo/penyo-portal-rd/main/",

  bottomFunctions: {
    support: [
      { name: "聚合图床", link: "//www.superbed.cn/" },
      { name: "木星计划", link: "//pen-yo.github.io/project-jupiter/" },
    ],
  },

  global: {
    theme: Theme.GREEN,
    backgroundMusic: "//music.163.com/song/media/outer/url?id=1853327677.mp3",
  },

  projectName: "Project MDHu",
  icpInfo: "互联网 ICP 备案：皖ICP备2023005063号",
};

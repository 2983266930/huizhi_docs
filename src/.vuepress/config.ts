import { defineUserConfig } from "vuepress";

import theme from "./theme.js";


export default defineUserConfig({
  base: "/test_docs/",

  lang: "zh-CN",
  title: "慧治",
  description: "rxy的慧治演示",


  theme,
  // plugins: [
  //   docsearchPlugin({
  //     // 配置项
  //     appId: 
  //   })
  // ]

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
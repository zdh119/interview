import { defineUserConfig } from "vuepress";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "面试",
  description: "江鸟的面试总结",
  // 仓库地址
  base: "/",
  // 指定页面文件的 Patterns, 相对于 Source 目录
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules", "!Templates"],
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],
  
  theme,
  // 插件
  plugins: [
    
  ],
});


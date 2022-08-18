import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "Java",
    icon: "edit",
    link: "/Java/"
    
  },
  {
    text: "计算机网络",
    icon: "edit",
    link: "/计算机网络/"
  },
  {
    text: "操作系统",
    icon: "edit",
    link: "/操作系统/",
  },
  {
    text: "多线程",
    icon: "edit",
    link: "/多线程/"
  },
  {
    text: "数据库",
    icon: "edit",
    link: "/数据库/",
  },
  {
    text: "JVM",
    icon: "edit",
    link: "/JVM/"
  },
  {
    text: "Spring",
    icon: "edit",
    link: "/Spring/"
  },
  {
    text: "系统设计",
    icon: "edit",
    link: "/系统设计优化/"
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);

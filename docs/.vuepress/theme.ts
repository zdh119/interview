import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://interview.zhangdehong.site",

  author: {
    name: "江鸟",
    url: "https://zhangdehong.site",
  },

  iconPrefix: "iconfont icon-",
  // 网站图标
  logo: "/logo.svg",
  // 暗黑模式下的网站图标
  // logoDark: "",

  // 仓库地址
  repo: "zdh119/interview",
  // Github / GitLab / Gitee / Bitbucket
  repoLabel: "GitHub",
  // 导航栏是否显示仓库
  repoDisplay: true,

  // docsDir: "demo/src",

  // navbar 设置false可去掉
  navbar: navbar,

  // sidebar
  sidebar: sidebar,
  // 侧边栏标题深度
  headerDepth: 4,
  // 页脚
  footer: "默认页脚",
  // 是否显示页脚
  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  // 深色模式
  darkmode: "switch",
  // 主题颜色 可以直接设置themeColor: false禁用
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  // 全屏
  fullscreen: true,
  // 返回顶部按钮
  backToTop: 300,
  // 纯净模式
  pure: false,
  // 路径导航
  breadcrumb: true,
  // 页面信息
  pageInfo: ["Author", "Date", "ReadingTime", "Word"],
  
  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      Baidu: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "https://example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "https://example.com",
      Instagram: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "zdh119/blog-comments",
      repoId: "R_kgDOHVW8Tw",
      category: "Announcements",
      categoryId: "DIC_kwDOHVW8T84CPK-u",
      // mapping: "title"

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },
    // 复制代码
    copyCode: {
      showInMobile: true
    },
    // 图片预览
    // photoSwipe: false,
    
    //版权信息
    copyright: {
      author: "江鸟",
      license: "MIT"
    },
    
    // md增强
    mdEnhance: {
      // enableAll: true,
      // 提示、注释、信息和详情自定义容器
      container: false,
      // 代码块分组
      codegroup: false,
      // 脚注以及跳转
      footnote: true,
      // 任务列表
      tasklist: true,
      // 自定义对齐
      align: false,
      // 角标
      sub: true,
      sup: true,
      // 黄色标记
      mark: true,
      // 公式
      tex: true,
      // chart
      chart: false,
      // 流程图
      flowchart: true,
      // mermaid
      mermaid: true,
      // 代码展示
      demo: false,
      
      // 幻灯片
      presentation: false,
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      
      //
    },
  },
});

import { defineConfig } from 'vitepress'
import { generateSidebar } from "vitepress-sidebar";


const vitepressSidebarOptions = {
  documentRootPath: "/docs",
  collapsed: false, //折叠组关闭
  collapseDepth: 2, //折叠组2级菜单
  removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
  prefixSeparator: "_", //删除前缀的符号
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-doc/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: "docs",//等下需要新建一个目录，统一放这里
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/01_官方示例文件/markdown-examples', },
      { text: '其他', link: '/02_自己加的文件/01_测试图片', }
    ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: generateSidebar(vitepressSidebarOptions),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

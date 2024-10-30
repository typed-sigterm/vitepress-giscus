import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

export default defineConfig({
  vite: {
    plugins: [groupIconVitePlugin()],
    server: {
      port: 7108,
    },
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },

  title: 'VitePress Giscus',
  description: 'Out-of-the-box Giscus support for VitePress.',

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/typed-sigterm/vitepress-giscus' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Typed SIGTERM',
    },
    // @ts-expect-error upstream
    lastUpdated: false,
  },

  locales: {
    'en': {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Usage', link: '/en/usage' },
          { text: 'Changelog', link: '/en/changelog' },
        ],
      },
    },

    'zh-cn': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '开始使用', link: '/zh-cn/usage' },
          { text: '更新日志', link: '/zh-cn/changelog' },
        ],
      },
    },
  },
});

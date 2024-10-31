---
layout: home

hero:
  name: VitePress Giscus
  tagline: VitePress 开箱即用的 Giscus 集成
  image:
    light: /hero.light.svg
    dark: /hero.dark.svg
  actions:
    - theme: brand
      text: 快速开始
      link: /zh-cn/usage
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/typed-sigterm/vitepress-giscus
---

<script lang="ts" setup>
import Comments from '../.vitepress/theme/Comments.vue';
</script>

<Comments class="comments-demo" />

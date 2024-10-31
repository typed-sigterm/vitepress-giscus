---
layout: home

hero:
  name: VitePress Giscus
  tagline: Out-of-the-box Giscus support for VitePress.
  image:
    light: /hero.light.svg
    dark: /hero.dark.svg
  actions:
    - theme: brand
      text: Getting started
      link: /en/usage
    - theme: alt
      text: View on GitHub
      link: https://github.com/typed-sigterm/vitepress-giscus
features:
  - icon: 📦
    title: Out-of-the-box
  - icon:
      src: /vitepress.svg
    title: Customized for VitePress
  - icon: 🛠️
    title: Configurable
---

<script lang="ts" setup>
import Comments from '../.vitepress/theme/Comments.vue';
</script>

<Comments class="comments-demo" />

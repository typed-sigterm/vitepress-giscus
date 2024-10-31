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
      text: GitHub
      link: https://github.com/typed-sigterm/vitepress-giscus
---

<script lang="ts" setup>
import Comments from '../.vitepress/theme/Comments.vue';
</script>

<Comments class="comments-demo" />

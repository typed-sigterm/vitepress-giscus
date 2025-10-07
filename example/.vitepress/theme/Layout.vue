<script lang="ts" setup>
import { VPGiscus } from 'vitepress-giscus';
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <VPGiscus
        :giscus="{
          repo: 'typed-sigterm/vitepress-giscus',
          repoId: 'R_kgDONGOIig',
          category: 'Comments',
          categoryId: 'DIC_kwDONGOIis4CjtsS',
          mapping: 'pathname',
          strict: '1',
        }"
      />
    </template>
  </Layout>
</template>

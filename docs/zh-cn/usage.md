# 开始使用

不多废话，首先安装 `vitepress-giscus`：

::: code-group

```sh [npm]
npm install -D vitepress-giscus
```

```sh [yarn]
yarn add -D vitepress-giscus
```

```sh [pnpm]
pnpm add -D vitepress-giscus
```

```sh [deno]
deno add -D npm:vitepress-giscus
```

```sh [bun]
bun add -D vitepress-giscus
```

:::

在 VitePress 站点的 `.vitepress/theme` 目录下创建以下文件：

::: code-group

```ts [index.ts]
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme;
```

```vue [Layout.vue]
<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';
import { VPGiscus } from 'vitepress-giscus';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <VPGiscus
        :giscus="{ // [!code highlight:9]
          // 你的 Giscus 配置
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
```

:::

完成。Giscus 配置请参考[官网](https://giscus.app/)。

推荐**不要**在 props 中指定 `giscus.lang`，组件会自动处理 Giscus 的 UI 语言和响应式切换。

`<VPGiscus>` 所有的 props 都可以是响应式的。但当 props 有变更时（包括上文提到的 UI 语言响应式切换），组件会完全重新渲染，导致评论输入框清空。

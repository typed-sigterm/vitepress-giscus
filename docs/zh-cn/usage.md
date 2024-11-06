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

然后，在 `.vitepress/config.ts` 中添加一点配置：

```ts
import { defineConfig } from 'vitepress';

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['vitepress-giscus'], // [!code ++]
    },
  },
});
```

完成。Giscus 配置请参考[官网](https://giscus.app/)。

::: tip 推荐在 `giscus` prop 中去除以下属性

- `lang`
- `theme`

下文会描述，`<VPGiscus>` 有对这些属性的特殊处理，而显式传入这些属性会覆盖自动优化。

:::

## 响应式 props

`<VPGiscus>` 所有的 props 都可以是响应式的。

::: warning

当 props 有变更时，组件会完全重新渲染，评论输入框将清空，用户将丢失未发布的评论内容。

:::

## 国际化

不指定 `giscus.lang` 的情况下，`<VPGiscus>` 默认会自动处理 Giscus 的 UI 语言和响应式切换。

你也可以设置 `:auto-detect-lang="false"` 来禁用自动处理。

用户切换语言时，组件会重新渲染。

## 深色模式

你可以传入 `theme` prop 来控制 Giscus 的 UI 风格：

```vue
<VPGiscus theme="purple_dark" />
<VPGiscus :theme="{ light: 'light_high_contrast', dark: 'dark_high_contrast' }" />
```

`theme` 的可选值可以在[官网](https://giscus.app/)找到。

用户打开或关闭深色模式时，组件会重新渲染。

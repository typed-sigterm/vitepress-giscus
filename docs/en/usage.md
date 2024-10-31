# Getting Started

Let's cut to the chase and install `vitepress-giscus` first:

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

In your VitePress site's `.vitepress/theme` directory, create the following files:

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
          // Your Giscus configuration
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

You're done. For Giscus configuration, please refer to the [official website](https://giscus.app/).

::: tip Recommended to omit the following properties from the `giscus` prop

- `lang`
- `theme`

The text below will describe that `<VPGiscus>` has special handling for these properties, and explicitly passing these properties will override the automatic optimization.

:::

## Reactive Props

All props of `<VPGiscus>` can be reactive.

::: warning

When props change, the component will fully re-render, the comment input box will be cleared, and users will lose any unposted comment content.

:::

## I18n

If `giscus.lang` is not specified, `<VPGiscus>` will automatically handle Giscus's UI language and reactive switching.

You can also set `:auto-detect-lang="false"` to disable automatic handling.

When users switch languages, the component will re-render.

## Dark Mode

You can pass the `theme` prop to control Giscus's UI style:

```vue
<VPGiscus theme="purple_dark" />
<VPGiscus :theme="{ light: 'light_high_contrast', dark: 'dark_high_contrast' }" />
```

The possible values for `theme` can be found on the [official website](https://giscus.app/).

When users enable or disable dark mode, the component will re-render.

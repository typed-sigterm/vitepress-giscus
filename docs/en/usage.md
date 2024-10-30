# Usage

Let's cut to the chase and start by installing `vitepress-giscus`:

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

Next, create the following files in the `.vitepress/theme` directory of your VitePress site:

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

That's it. For Giscus configuration, please refer to the [official website](https://giscus.app/).

It is recommended **not** to specify `giscus.lang` in the props, as the component will automatically handle the UI language of Giscus and responsive switching.

All props of `<VPGiscus>` can be reactive. However, when props change (including the responsive UI language switching mentioned above), the component will fully re-render, causing the comment input box to be cleared.

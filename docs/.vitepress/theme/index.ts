import type { EnhanceAppContext, Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import 'virtual:group-icons.css';

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme;

<script lang="ts" setup>
import type { GiscusProps } from '@giscus/vue';
import type { VPGiscusProps } from './utils';
import Giscus from '@giscus/vue';
import { useData } from 'vitepress';
import { computed, nextTick, ref, watch } from 'vue';
import { getGiscusLanguage } from './utils';

const props = withDefaults(defineProps<VPGiscusProps>(), {
  autoDetectLang: true,
  theme: () => ({
    light: 'light',
    dark: 'dark',
  }),
});

const emit = defineEmits<{
  reload: []
}>();

const vpData = useData();

const mergedProps = computed((): GiscusProps => {
  return {
    lang: props.autoDetectLang ? getGiscusLanguage(vpData.lang.value) : undefined,
    theme: props.theme !== undefined
      ? typeof props.theme === 'object'
        ? (vpData.isDark.value ? props.theme.dark : props.theme.light)
        : props.theme
      : undefined,
    ...props.giscus,
  };
});
watch(mergedProps, forceUpdate, { deep: true });

const show = ref(true);
function forceUpdate() {
  if (!show.value)
    return;
  show.value = false;
  nextTick(() => {
    show.value = true;
    emit('reload');
  });
}
</script>

<template>
  <Giscus
    v-if="show"
    style="margin-top: 12px;"
    v-bind="mergedProps"
  />
</template>

<style>
.VPDocFooter:has(> nav):has(~giscus-widget) {
  margin-bottom: 12px;
}
</style>

<script lang="ts" setup>
import type { VPGiscusProps } from './utils';
import Giscus from '@giscus/vue';
import { useData } from 'vitepress';
import { computed, nextTick, ref, watch } from 'vue';
import { getGiscusLanguage } from './utils';

const props = withDefaults(defineProps<VPGiscusProps>(), {
  autoDetectLang: true,
});

const vpData = useData();

const mergedProps = computed(() => {
  return {
    lang: getGiscusLanguage(props.giscus.lang ?? vpData.lang.value),
    ...props.giscus,
  };
});
watch(mergedProps, forceUpdate, { deep: true });

const show = ref(true);
function forceUpdate() {
  show.value = false;
  nextTick(() => show.value = true);
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

<template>
  <div :class="$style.filterPage">
    <FilterCommon />
    <FilterExpanded />
    <FilterControls />
    <FilterResult />
  </div>
</template>

<script lang="ts" setup>
import FilterCommon from '@/components/Filter/FilterCommon.vue'
import FilterExpanded from '@/components/Filter/FilterExpanded.vue'
import FilterControls from '@/components/Filter/FilterControls.vue'
import FilterResult from '@/components/Filter/FilterResult.vue'
</script>

<style module>
.filterPage {
  padding-top: 12px;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div :class="$style.filterPage">
    <div v-if="isResultLoading">Loading...</div>
    <template v-else>
      <FilterCommon :specs="specs as RealtyObjectFitlerSpecsDto" />
      <FilterExpanded :specs="specs as RealtyObjectFitlerSpecsDto" />
      <FilterControls />
      <FilterResult
        :data="filter?.data ?? []"
        :loading="isResultLoading"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {
  getRealtyObjects,
  getRealtyObjectsFilterSpecs,
  GetRealtyObjectsResponse,
  RealtyObjectFitlerSpecsDto,
} from '@/api/realty-object'
import FilterCommon from '@/components/Filter/FilterCommon.vue'
import FilterExpanded from '@/components/Filter/FilterExpanded.vue'
import FilterControls from '@/components/Filter/FilterControls.vue'
import FilterResult from '@/components/Filter/FilterResult.vue'

const isResultLoading = ref(true)
const filter = ref<GetRealtyObjectsResponse | null>(null)
const specs = ref<RealtyObjectFitlerSpecsDto>()

onMounted(async () => {
  try {
    filter.value = await getRealtyObjects()
    specs.value = await getRealtyObjectsFilterSpecs()
  } catch (error) {
    console.error('ERROR', error)
  } finally {
    isResultLoading.value = false
  }
})
</script>

<style module>
.filterPage {
  padding-top: 12px;
  display: flex;
  flex-direction: column;
}
</style>

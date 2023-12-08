<template>
  <div :class="$style.filterPage">
    <div v-if="isResultLoading">Loading...</div>
    <template v-else>
      <FilterCommon
        v-model="values"
        :specs="specs as RealtyObjectFitlerSpecsDto"
        @change="handleChange"
      />
      <FilterExpanded
        v-model="values"
        :specs="specs as RealtyObjectFitlerSpecsDto"
      />
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
import qs from 'qs'
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

interface Values {
  type?: string
  furnish?: string
  property?: string
  rooms?: number[]
  minPrice?: number
  maxPrice?: number
  minFloor?: number
  maxFloor?: number
}

const isResultLoading = ref(true)
const filter = ref<GetRealtyObjectsResponse | null>(null)
const specs = ref<RealtyObjectFitlerSpecsDto>()

const values = ref<Values>({
  type: undefined,
  furnish: undefined,
  rooms: [],
  property: undefined,
  minPrice: undefined,
  maxPrice: undefined,
  minFloor: undefined,
  maxFloor: undefined,
})

onMounted(async () => {
  try {
    filter.value = await getRealtyObjects()
    specs.value = await getRealtyObjectsFilterSpecs()

    values.value.minPrice = specs.value.price.min
    values.value.maxPrice = specs.value.price.max
    values.value.maxFloor = specs.value.floor.max
    values.value.minFloor = specs.value.floor.min
  } catch (error) {
    console.error('ERROR', error)
  } finally {
    isResultLoading.value = false
  }
})

const handleChange = async () => {
  const copyValues = JSON.parse(JSON.stringify(values.value))
  Object.keys(copyValues).forEach((key) => {
    if (copyValues[key] === null) {
      delete copyValues[key]
    }
  })
  const queryParams = qs.stringify(copyValues)
  try {
    isResultLoading.value = true
    filter.value = await getRealtyObjects(queryParams)
  } catch (error) {
    console.error('ERROR', error)
  } finally {
    isResultLoading.value = false
  }
}
</script>

<style module>
.filterPage {
  padding-top: 12px;
  display: flex;
  flex-direction: column;
}
</style>

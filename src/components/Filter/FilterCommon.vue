<template>
  <div :class="$style.filter">
    <VSelect
      v-model="data.type"
      :class="$style.select"
      :items="specs.type"
      item-value="id"
      item-title="name"
      clearable
      label="Тип недвижимости"
    />
    <RoomsFilter
      v-model:rooms="data.rooms"
      :specs="specs.rooms"
    />
    <RangeFilter
      v-model:model-max="data.maxPrice"
      v-model:model-min="data.minPrice"
      min-label="Цена от"
      max-label="Цена до"
    />

    <!-- <RangeFilter
      :min="specs?.area.min"
      :max="specs?.area.max"
      >Площадь, м2</RangeFilter
    > -->
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useVModel } from '@vueuse/core'
import { RealtyObjectFitlerSpecsDto } from '@/api/realty-object'
import RoomsFilter from '@/components/Filter/RoomsFilter.vue'
import RangeFilter from '@/components/Filter/RangeFilter.vue'

interface Values {
  type?: string
  rooms?: number[]
  minPrice?: number
  maxPrice?: number
}

export interface Props {
  modelValue: Values
  specs: RealtyObjectFitlerSpecsDto
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'change'): void
  (event: 'update:modelValue', props: Props['modelValue']): void
}>()

const data = useVModel(props, 'modelValue', emit)

watch(
  () => data.value,
  () => {
    emit('change')
  },
  {
    deep: true,
  },
)
</script>

<style module>
.filter {
  display: inline-flex;
  gap: 18px;
}
.select {
  width: 400px;
  max-width: 400px;
  height: 56px;
}
</style>

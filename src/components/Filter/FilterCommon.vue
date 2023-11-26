<template>
  <div :class="$style.filter">
    <VSelect
      :class="$style.select"
      :items="specs?.type"
      item-value="id"
      item-title="name"
      clearable
      label="Тип недвижимости"
    />
    <RoomsFilter :specs="specs.rooms" />
    <RangeFilter
      :min="specs?.price.min"
      :max="specs?.price.max"
      >Стоимость, млн. ₽</RangeFilter
    >

    <RangeFilter
      :min="specs?.area.min"
      :max="specs?.area.max"
      >Площадь, м2</RangeFilter
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RealtyObjectFitlerSpecsDto } from '@/api/realty-object'
import RoomsFilter from '@/components/Filter/RoomsFilter.vue'
import RangeFilter from '@/components/Filter/RangeFilter.vue'

defineProps<{
  specs: RealtyObjectFitlerSpecsDto
}>()
</script>

<style module>
.filter {
  display: inline-flex;
  justify-content: center;
  gap: 18px;
}
.select {
  width: 400px;
  max-width: 400px;
  height: 56px;
}
</style>

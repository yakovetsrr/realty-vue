<template>
  <div :class="$style.filter">
    <VSelect
      :class="$style.select"
      :items="flatOptions"
      label="Тип недвижимости"
    />
    <RoomsFilter />
    <RangeFilter
      :min="0"
      :max="100"
      >Стоимость, млн. ₽</RangeFilter
    >

    <RangeFilter
      :min="0"
      :max="100"
      >Площадь, м2</RangeFilter
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import RoomsFilter from '@/components/Filter/RoomsFilter.vue'
import RangeFilter from '@/components/Filter/RangeFilter.vue'

const flatOptions = ref(['Квартира', 'Апартаменты'])
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

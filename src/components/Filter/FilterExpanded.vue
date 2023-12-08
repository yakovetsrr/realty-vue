<template>
  <div>
    <button @click="expanded = !expanded">Расширенный фильтр</button>
    <BaseCollapse>
      <div
        v-if="expanded"
        :class="$style.expanded"
      >
        <div :class="$style.collapse">
          <RangeFilter
            max-label="Этаж до"
            min-label="Этаж от"
            :min="specs?.floor.min"
            :max="specs?.floor.max"
          />
          <VSelect
            :class="$style.select"
            :items="specs.furnish"
            item-title="name"
            item-value="id"
            clearable
            label="Отделка"
          />
          <VSelect
            :class="$style.select"
            :items="specs.property"
            item-title="name"
            item-value="id"
            clearable
            label="Класс недвижимости"
          />
        </div>
      </div>
    </BaseCollapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RealtyObjectFitlerSpecsDto } from '@/api/realty-object'
import BaseCollapse from '@/components/BaseComponents/BaseCollapse.vue'
import RangeFilter from '@/components/Filter/RangeFilter.vue'

defineProps<{
  specs: RealtyObjectFitlerSpecsDto
}>()

const finishingOptions = ref(['Черновая отделка', 'Чистовая отделка'])
const propertyOptios = ref(['Бизнес', 'Комфорт'])
const expanded = ref(false)
</script>

<style module>
.expanded {
  padding-top: 12px;
}
.collapse {
  display: flex;
  gap: 18px;
}
.select {
  width: 400px;
  max-width: 400px;
  height: 56px;
}
</style>

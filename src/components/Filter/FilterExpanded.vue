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
            :min="1"
            :max="26"
            >Этаж</RangeFilter
          >
          <VSelect
            :class="$style.select"
            :items="finishingOptions"
            label="Отделка"
          />
          <VSelect
            :class="$style.select"
            :items="propertyOptios"
            label="Тип недвижимости"
          />
        </div>
      </div>
    </BaseCollapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BaseCollapse from '@/components/BaseComponents/BaseCollapse.vue'
import RangeFilter from '@/components/Filter/RangeFilter.vue'

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

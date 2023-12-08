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
            v-model:model-max="data.maxFloor"
            v-model:model-min="data.minFloor"
            max-label="Этаж до"
            min-label="Этаж от"
            :max="specs?.floor.max"
          />
          <VSelect
            v-model="data.furnish"
            :class="$style.select"
            :items="specs.furnish"
            item-title="name"
            item-value="id"
            clearable
            label="Отделка"
          />
          <VSelect
            v-model="data.property"
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
import { ref, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import { RealtyObjectFitlerSpecsDto } from '@/api/realty-object'
import BaseCollapse from '@/components/BaseComponents/BaseCollapse.vue'
import RangeFilter from '@/components/Filter/RangeFilter.vue'

interface Values {
  furnish?: string
  property?: string
  minFloor?: number
  maxFloor?: number
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

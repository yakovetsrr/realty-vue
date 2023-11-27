<template>
  <div :class="$style.wrapper">
    <slot />
    <div :class="$style.inputs">
      <input
        v-model="minValue"
        :class="$style.input"
        type="number"
      />
      <input
        v-model="maxValue"
        :class="[$style.input, $style.sliderTextRight]"
        type="number"
      />
    </div>
    <!-- <VRangeSlider
      v-model="value"
      :min="min"
      :max="max"
      :step="1"
    /> -->
  </div>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

export interface Props {
  min?: number
  max?: number
  modelMin?: any
  modelMax?: any
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'change'): void
  (event: 'update:modelMin', props: Props['modelMin']): void
  (event: 'update:modelMax', props: Props['modelMax']): void
}>()

// const value = ref([props.min, props.max])

// watch(
//   () => value.value,
//   () => {
//     emit('update:modelValue', value.value)
//   },
// )
const minValue = useVModel(props, 'modelMin', emit)
const maxValue = useVModel(props, 'modelMax', emit)
</script>

<style module>
.wrapper {
  width: 400px;
}

.inputs {
  width: 100%;
}

.input {
  width: 50%;
}
.sliderTextRight {
  text-align: right;
}
</style>

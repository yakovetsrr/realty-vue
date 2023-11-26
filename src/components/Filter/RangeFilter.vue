<template>
  <div :class="$style.wrapper">
    <slot />
    <div :class="$style.inputs">
      <input
        v-model="value[0]"
        :class="$style.input"
        type="number"
      />
      <input
        v-model="value[1]"
        :class="[$style.input, $style.sliderTextRight]"
        type="number"
      />
    </div>
    <VRangeSlider
      v-model="value"
      :min="min"
      :max="max"
      :step="1"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{ min: number; max: number }>()
const value = ref([props.min, props.max])
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

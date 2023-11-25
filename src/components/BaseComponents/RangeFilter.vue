<template>
  <div>
    <slot />
    <div>
      <input
        v-model="value[0]"
        type="number"
      />
      <input
        v-model="value[1]"
        :class="$style.sliderTextRight"
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
.sliderTextRight {
  text-align: right;
}
</style>

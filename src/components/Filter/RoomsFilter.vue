<template>
  <div :class="$style.wrapper">
    <VBtn
      v-for="item in specs"
      :key="item.id"
      :class="$style.roomsBtn"
      >{{ item.id === 0 ? 'Студия' : item.name }}</VBtn
    >
  </div>
</template>
<script lang="ts" setup>
import { RealtyObjectFitlerSpecsDto } from '@/api/realty-object'

defineProps<{
  specs: RealtyObjectFitlerSpecsDto['rooms']
}>()
</script>

<style module>
.wrapper {
  display: flex;
  gap: 12px;
  width: 400px;
}
.roomsBtn {
  height: 56px !important;
}
</style>

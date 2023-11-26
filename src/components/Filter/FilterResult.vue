<template>
  <div :class="$style.cardContainer">
    <RealtyObjectCard />
    <RealtyObjectCard />
    <RealtyObjectCard />
    <RealtyObjectCard />
  </div>
</template>
<script lang="ts" setup>
import { RealtyObjectDto } from '@/api/realty-object'
import RealtyObjectCard from '@/components/RealtyObjectCard.vue'

defineProps<{
  data: RealtyObjectDto[]
}>()
</script>

<style module>
.cardContainer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-top: 12px;
}
</style>

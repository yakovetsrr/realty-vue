<template>
  <div :class="$style.wrapper">
    <VBtn
      v-for="item in specs"
      :key="item.id"
      :class="$style.roomsBtn"
      @click="() => handleClick(item.id)"
      >{{ item.id === 0 ? 'Студия' : item.name }}</VBtn
    >
  </div>
</template>
<script lang="ts" setup>
import { RealtyObjectFitlerSpecsDto } from '@/api/realty-object'
import { returnStatement } from '@babel/types'
import { useVModel } from '@vueuse/core'

export interface Props {
  rooms?: number[]
  specs: RealtyObjectFitlerSpecsDto['rooms']
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'update:rooms', props: Props['rooms']): void
}>()
const rooms = useVModel(props, 'rooms', emit)

const pushRoom = (room: number) => rooms.value?.push(room)

const removeRoom = (room: number) => {
  if (!rooms.value?.length) return

  const idx = rooms.value.indexOf(room)
  return rooms.value.splice(idx, 1)
}

const handleClick = (room: number) => {
  rooms.value?.includes(room) ? removeRoom(room) : pushRoom(room)

  console.log('rooms', rooms.value)
}
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

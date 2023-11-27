<template>
  <div :class="$style.cardFlatContent">
    <div :class="$style.header">
      <div>
        <p>Этаж {{ realtyObject.floor }}</p>
      </div>

      <BaseTag> {{ realtyObject.property.name }} </BaseTag>
    </div>
    <div :class="$style.divCardImg">
      <img
        src="../assets/img.png"
        :class="$style.img"
      />
    </div>
    <div :class="$style.params">
      <p>
        {{ realtyObject.rooms }}-комнатная {{ realtyObject.area }} м<sup>2</sup>
      </p>
      <p>Номер {{ realtyObject.number }}</p>
      <p :class="$style.costText">
        Стоимость {{ splitThousands(realtyObject.price) }} ₽
      </p>
    </div>
    <div
      v-if="realtyObject.benefits?.length"
      :class="$style.tags"
    >
      <BaseTag
        v-for="benefit in benefits"
        :key="benefit.id"
      >
        {{ benefit.name }}</BaseTag
      >
      <BaseTag v-if="other?.length"> + {{ other.length }}</BaseTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RealtyObjectDto } from '@/api/realty-object'
import { splitThousands } from '@/utils/splitThousands'
import BaseTag from '@/components/BaseComponents/BaseTag.vue'
import { computed } from 'vue'

const props = defineProps<{
  realtyObject: RealtyObjectDto
}>()

const benefits = computed(() => {
  return props.realtyObject.benefits?.slice(0, 2)
})

const other = computed(() => {
  return props.realtyObject.benefits?.slice(2) ?? []
})
</script>

<style module>
.cardFlatContent {
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 400px;
  border-radius: 6px;
  border: 1px solid black;
  padding: 18px 20px;
}

.header {
  display: flex;
  justify-content: space-between;
}
.cardFlat {
  height: 800px;
  width: 100%;
  border-radius: 3px;
}

.costText {
  font-weight: bold;
  font-size: 24px;
}

.divCardImg {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 90%;
  height: 90%;
}

.params {
  margin-top: auto;
}

.tags {
  display: flex;
  gap: 6px;
  margin-top: 12px;
}
</style>

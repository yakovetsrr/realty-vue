<template>
  <div :class="$style.cardFlatContent">
    <div :class="$style.header">
      <div>
        <p>Ключи в 2025 года</p>
        <p>2 этаж</p>
      </div>

      <BaseTag> Комфорт </BaseTag>
    </div>
    <div :class="$style.divCardImg">
      <img
        src="../assets/img.png"
        :class="$style.img"
      />
    </div>
    <div :class="$style.params">
      <p>1-комнатная квартира 35,2 м<sup>2</sup></p>
      <p>Номер квартиры 14</p>
      <p :class="$style.costText">14 768 000 Р</p>
    </div>
    <div :class="$style.tags">
      <BaseTag> предложение</BaseTag>
      <BaseTag> Лучшее</BaseTag>
      <BaseTag> +1</BaseTag>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseTag from '@/components/BaseComponents/BaseTag.vue'

export default defineComponent({
  components: { BaseTag },
})
</script>

<style module>
.cardFlatContent {
  display: flex;
  flex-direction: column;
  height: 564px;
  width: 342px;
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

<template>
  <div :class="$style.container">
    <div :class="$style.hero">
      <div :class="$style.flat">
        <div :class="$style.flatContent"></div>
      </div>
      <div :class="$style.specifications">
        <div :class="$style.titel">2-x комнатная квартира, метраж</div>
        <div>
          <p :class="$style.price">17 669 632 ₽</p>
          <p :class="$style.originalPrice">21 669 632 ₽</p>
        </div>
        <div :class="$style.tags">
          <BaseTag> Лучшее предложение</BaseTag>
          <BaseTag> Лучшее предложение</BaseTag>
          <BaseTag> Лучшее предложение</BaseTag>
          <BaseTag> предложение</BaseTag>
          <BaseTag> Лучшее</BaseTag>
        </div>

        <div class="specificationsList">
          <div :class="$style.specificationsItem">
            <span>Тип недвижимости</span>
            <span>Value</span>
          </div>
          <div :class="$style.specificationsItem">
            <span>Номер квартиры</span>
            <span>Value</span>
          </div>
          <div :class="$style.specificationsItem">
            <span>Этаж</span>
            <span>Value</span>
          </div>
          <div :class="$style.specificationsItem">
            <span>Отделка</span>
            <span>Value</span>
          </div>
          <div :class="$style.specificationsItem">
            <span>Стоимость за м<sup>2</sup></span>
            <span>Value</span>
          </div>
        </div>
        <div :class="$style.buttonBlock">
          <v-btn>Забронирова</v-btn>
          <v-btn>Заказать звонок</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BaseTag from '../components/BaseTag.vue'

export default defineComponent({
  components: { BaseTag },
})
</script>

<style module>
.container {
  padding-top: 20px;
}
.hero {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 810px;
}

.flat {
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  min-width: 854px;
  height: 100%;
  padding: 42px;
}

.flatContent {
  background-image: url('../assets/img.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
}
.specifications {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  height: 100%;
  padding: 12px;
}

.titel {
  font-size: 24px;
}
.specificationsItem {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(180, 177, 177);
  padding: 12px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.container {
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
}

.price {
  font-size: 24px;
}

.originalPrice {
  font-size: 16px;
  text-decoration: line-through;
  color: grey;
}

.buttonBlock {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: auto;
}
</style>

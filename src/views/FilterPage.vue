<template>
  <div :class="$style.container">
    <div :class="$style.filterPage">
      <div :class="$style.filter">
        <VSelect
          :class="$style.select"
          :items="flatOptions"
          label="Тип недвижимости"
        />
        <VBtn>1</VBtn>
        <VBtn>2</VBtn>
        <VBtn>3</VBtn>
        <VBtn>4</VBtn>
        <div>
          <label>Стоимость, млн. ₽</label>
          <div>
            <input
              type="text"
              value="100"
            />
            <input
              :class="$style.inputAlignTextRight"
              type="text"
              value="200"
            />
          </div>
          <VRangeSlider />
        </div>
        <div :class="$style.slider">
          <label>Площадь, м2</label>
          <div>
            <input
              type="text"
              value="1"
            />
            <input
              :class="$style.inputAlignTextRight"
              type="text"
              value="2"
            />
          </div>
          <VRangeSlider :class="$style.slider" />
        </div>
      </div>
    </div>
    <VExpansionPanels>
      <VExpansionPanel>
        <VExpansionPanelTitle>Item</VExpansionPanelTitle>
        <VExpansionPanelText>
          <div :class="$style.expationPanelText">
            <VSelect
              :class="$style.select"
              :items="doneOptions"
              label="Готовность"
            />
            <VSelect
              :class="$style.select"
              :items="finishingOptions"
              label="Отделка"
            />
            <VSelect
              :class="$style.select"
              :items="viewWindowOptios"
              label="Вид из окна"
            />
            <div :class="$style.slider">
              <label>Этаж</label>
              <div>
                <input
                  type="text"
                  value="1"
                />
                <input
                  :class="$style.inputAlignTextRight"
                  type="text"
                  value="10"
                />
              </div>
              <VRangeSlider :class="$style.slider" />
            </div>
          </div>
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
    <div :class="$style.filterResults">
      <div :class="$style.divSelect">
        <VSelect
          :class="$style.select"
          :items="sortOptions"
          label="Сортировать"
        />
      </div>
      <span> 10 квартир</span>
      <div :class="$style.switch">
        <label>Карточка</label>
        <VSwitch />
        <label>Список</label>
      </div>
    </div>
    <div :class="$style.cardContainer">
      <RealtyObjectCard />
      <RealtyObjectCard />
      <RealtyObjectCard />
      <RealtyObjectCard />
    </div>
  </div>
</template>

<script lang="ts">
import RealtyObjectCard from '@/components/RealtyObjectCard.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FilterPage',
  components: { RealtyObjectCard },
  data() {
    return {
      flatOptions: ['Квартира', 'Апартаменты'],
      doneOptions: ['Вторичка', 'Новостройка'],
      finishingOptions: ['Черновая отделка', 'Чистовая отделка'],
      viewWindowOptios: ['Во двор', 'На улицу'],
      sortOptions: [
        'По росту стоимости',
        'По убыванию стоимости',
        'По росту площади',
        'По убыванию стоимосит',
      ],
    }
  },
})
</script>

<style module>
.select {
  width: 330px;
}
.filterPage {
  padding: 12px 12px;
}

.filter {
  display: inline-flex;
  justify-content: center;
  gap: 18px;
}
.divSlider {
  width: 50%;
}
.divInput {
  display: flex;
  justify-content: space-between;
}
.inputAlignTextRight {
  text-align: right;
}
.expationPanelText {
  display: inline-flex;
  justify-content: center;
  gap: 14px;
}
.container {
  margin: 0 auto;
  width: 1460px;
}

.filterResults {
  padding: 12px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.divSelect {
  width: 200px;
}

.switch {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cardContainer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
</style>

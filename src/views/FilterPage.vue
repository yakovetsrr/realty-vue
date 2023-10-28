<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FilterPage',
})
</script>

<template>
  <div>
    <div :class="$style.filterPage">
      <div :class="$style.filter">
        <VSelect
          :class="$style.select"
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
              label="Готовность"
            />
            <VSelect
              :class="$style.select"
              label="Отделка"
            />
            <VSelect
              :class="$style.select"
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
  </div>
</template>

<style module>
.select {
  width: 250px;
}
.filterPage {
  padding-top: 12px;
}

.filter {
  display: inline-flex;
  justify-content: start;
  gap: 14px;
}
.divSlider {
  width: 250px;
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
  justify-content: start;
  gap: 14px;
}
</style>

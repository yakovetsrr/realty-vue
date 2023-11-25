<template>
  <div :class="$style.homePageFiler">
    <span :class="$style.filterTitel">Выбрать квартиру</span>
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
            :class="$style.inputSlider"
            type="text"
            value="200"
          />
        </div>
        <VRangeSlider :class="$style.slider" />
      </div>
      <div>
        <label>Площадь, м2</label>
        <div>
          <input
            type="text"
            value="1"
          />
          <input
            :class="$style.inputSlider"
            type="text"
            value="2"
          />
        </div>
        <VRangeSlider :class="$style.slider" />
      </div>
      <RouterLink
        :class="$style.routerlink"
        to="/filter"
      >
        Показать
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTag',
})
</script>
<style module>
.homePageFiler {
  padding: 12px 12px;
  margin: 12px auto;
  width: 1460px;
}
.filter {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}

.select {
  width: 330px;
}

.inputSlider {
  text-align: right;
}

.slider {
  width: 360px;
}

.filterTitel {
  font-size: 34px;
}

.routerlink {
  width: 200px;
  height: 60px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  border-radius: 8px;
}
</style>

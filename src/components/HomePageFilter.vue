<template>
  <div :class="$style.homePageFiler">
    <div :class="$style.filter">
      <VSelect label="Тип недвижимости" />
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
            type="text"
            value="200"
          />
        </div>
        <VRangeSlider />
      </div>
      <div>
        <label>Площадь, м2</label>
        <div>
          <input
            type="text"
            value="1"
          />
          <input
            type="text"
            value="2"
          />
        </div>
        <VRangeSlider />
      </div>
      <vBtn>Показать</vBtn>
    </div>
  </div>
</template>

<script></script>
<style module>
.homePageFiler {
  padding: 12px 12px;
  margin-top: 3px;
  border-radius: 20px;
  border-width: 3px;
  border-color: black;
  border-style: solid;
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
</style>

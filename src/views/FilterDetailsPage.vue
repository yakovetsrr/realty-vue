<template>
  <div :class="$style.container">
    <div :class="$style.hero">
      <div :class="$style.flat">
        <div :class="$style.flatContent"></div>
      </div>
      <div :class="$style.specifications">
        <div>
          <p>2-x комнатная квартира, метраж</p>
          <p>Номер квартиры</p>
          <p>Цена</p>
        </div>
        <div>Tegs</div>
        <div>specifications</div>
        <div>checkBox</div>
        <div>Button</div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style module>
.hero {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 810px;
  padding: 20px;
}

.flat {
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  min-width: 854px;
  height: 100%;
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
  width: 100%;
  height: 100%;
}

.container {
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
}
</style>

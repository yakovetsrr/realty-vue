<template>
  <div :class="$style.wrapper">
    <VBtn :class="$style.roomsBtn">Студия</VBtn>
    <VBtn :class="$style.roomsBtn">1</VBtn>
    <VBtn :class="$style.roomsBtn">2</VBtn>
    <VBtn :class="$style.roomsBtn">3</VBtn>
    <VBtn :class="$style.roomsBtn">4</VBtn>
  </div>
</template>
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

<template>
  <div :class="$style.first">
    <div :class="$style.card">
      <h7>Заголовок</h7>
      <span>Здесь должен быть Ваш текст</span>
    </div>
    <div :class="$style.card">
      <h8>Заголовок</h8>
      <span>Здесь должен быть Ваш текст</span>
    </div>
    <div :class="$style.card">
      <h9>Заголовок</h9>
      <span>Здесь должен быть Ваш текст</span>
    </div>
    <div :class="$style.card">
      <h10>Заголовок</h10>
      <span>Здесь должен быть Ваш текст</span>
    </div>
  </div>
</template>

<style module>
.first {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
.card {
  display: flex;
  padding: 2.8rem;
  border-radius: 0.8rem;
  background-color: #f5f5f8;
  flex-direction: column;
}
</style>

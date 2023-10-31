<template>
  <div :class="$style.firstdiv">
    <div :class="$style.Block">
      <span :class="$style.titeLeftBlocklSpan">Онлайн - покупка - </span>
      <span :class="$style.leftBlocklSpan"> это просто</span>
      <RouterLink
        :class="$style.routerlink"
        to="/filter"
      >
        Выбрать квартиру
      </RouterLink>
    </div>
    <div :class="$style.Block">
      <div :class="$style.topRightTextBlock">
        <h3>Что такое онлайн сделка?</h3>
        <span
          >Онлайн-сделка включает в себя бронирование квартиры, выбор способа<br />
          покупки, заполнение данных участников сделки, подачу ипотечной
          заявки,<br />
          в случае покупки в ипотеку, онлайн-выпуск электронной цифровой
          подписи<br />
          и регистрацию в Росреестре.</span
        >
      </div>
    </div>
  </div>
</template>

<style module>
.firstdiv {
  display: flex;
  justify-content: space-between;
  height: 500px;
}

.Block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  align-items: center;
  gap: 20px;
}
.titeLeftBlocklSpan {
  color: black;
  font-size: 24px;
}
.leftBlocklSpan {
  color: grey;
  font-size: 24px;
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

.topRightTextBlock {
  border-radius: 12px;
  background-color: gray;
  width: 40%;
  gap: 20px;
}
</style>

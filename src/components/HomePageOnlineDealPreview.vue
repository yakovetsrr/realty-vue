<template>
  <div :class="$style.firstdiv">
    <div :class="$style.leftBlock">
      <span :class="$style.titeLeftBlocklSpan">Онлайн - покупка - </span>
      <span :class="$style.leftBlocklSpan"> это просто</span>
      <RouterLink
        :class="$style.routerlink"
        to="/filter"
      >
        Выбрать квартиру
      </RouterLink>
    </div>
    <div :class="$style.rightBlock">
      <div :class="$style.topRightTextBlock">
        <h3 :class="$style.titel">Что такое онлайн сделка?</h3>
        <span :class="$style.span"
          >Онлайн-сделка включает в себя бронирование квартиры, выбор способа<br />
          покупки, заполнение данных участников сделки, подачу ипотечной
          заявки,<br />
          в случае покупки в ипотеку, онлайн-выпуск электронной цифровой
          подписи<br />
          и регистрацию в Росреестре.</span
        >
      </div>
      <div :class="$style.bottomBlock">
        <div :class="$style.bottomleftBlock">
          <h4 :class="$style.titel">Ипотека онлайн</h4>
          <span :class="$style.span"
            >Перейдите на страницу выбора квартир. Для бронирования квартиры<br />
            необходимо нажать кнопку «Забронировать» в карточке объекта,
            перейти<br />
            в личный кабинет, ввести свои персональные данные и перейти к<br />
            оплате. Забронированные объекты будут всегда доступны к просмотру
            в<br />
            личном кабинете.</span
          >
        </div>
        <div :class="$style.bottomRightBlock">
          <h5 :class="$style.titel">Как забронировать квартиру?</h5>
          <span :class="$style.percent">99,9 %</span>
          <span :class="$style.span"
            >наших клиентов получают одобрения на самых выгодных условиях всего
            за 1 день.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.firstdiv {
  display: flex;
  justify-content: space-between;
  height: 700px;
  background-color: #f5f5f5;
}
.leftBlock {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 20px;
}
.rightBlock {
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 50%;
  gap: 20px;
}
.titeLeftBlocklSpan {
  color: black;
  font-size: 40px;
}
.leftBlocklSpan {
  color: grey;
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

.topRightTextBlock {
  border-radius: 12px;
  padding: 20px;
  height: 30%;
  width: 82%;
  display: grid;
  align-items: end;
}

.titel {
  font-size: 34px;
  text-align: top;
}

.span {
  font-size: 22px;
}

.bottomBlock {
  display: flex;
  justify-content: start;
  gap: 2%;
}

.percent {
  font-size: 120px;
  color: crimson;
}

.bottomleftBlock {
  width: 40%;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
  height: 400px;
}
.bottomRightBlock {
  width: 40%;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
}
</style>

<template>
  <div :class="$style.image">
    <div :class="$style.card">
      <div :class="$style.titel">
        <span :class="$style.titelText"> Офис продаж</span>
      </div>
      <div :class="$style.cardBody">
        <div :class="$style.address">
          <p>Москва улица Пушкина дом Колотушкина</p>
          <p>Пн–Вс с 9:00 до 21:00</p>
        </div>
        <div>
          <VTextField
            :class="$style.inoput"
            label="Имя"
          ></VTextField>
          <VTextField
            :class="$style.inoput"
            label="Номер телефона"
          ></VTextField>
          <VBtn :class="$style.btn"> Записаться на встречу </VBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.image {
  background-image: url('../assets/homeimg1.webp');
  width: 100%;
  padding: 6.4rem;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.card {
  height: 648px;
  width: 510px;
  background-color: #fff;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
}

.btn {
  background-color: black;
  color: #fff;
}
.inoput {
  width: 100%;
}

.titel {
  height: 50px;
  border-bottom: 1px solid #e7e7f0;
}

.titelText {
  font-size: 2rem;
  font-weight: 500;
  color: black;
}

.address {
  padding-top: 20px;
  color: #7d7d86;
  margin-bottom: auto;
}

.cardBody {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

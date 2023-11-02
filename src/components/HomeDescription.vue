<template>
  <div :class="$style.first">
    <h11 :class="$style.h11">
      Титульник с заванием компании <br />
      <span :class="$style.h11span"> Дополнительный текст титульника </span>
    </h11>
    <p :class="$style.p">
      Жилой район ÁLIA расположен на северо-западе столицы, на живописном берегу
      Москвы-реки. Здесь авторская архитектура от международного бюро SOM
      (Skidmore, Owings & Merrill) органично вписана в природный ландшафт, а
      урбанистическая концепция
    </p>
    <p :class="$style.p">
      выражает основные преимущества и философию ÁLIA. На территории жилого
      района есть всё, чтобы продуктивно работать, наслаждаться комфортом
      «15-минутного города» и природой, расширить возможности для занятий
      спортом и учиться по программе лучших московских вузов.
    </p>
  </div>
</template>

<style module>
.first {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: auto;
  width: 100%;
  padding: 60px 400px;
}

.h11 {
  font-size: 40px;
  color: black;
  padding-bottom: 30px;
}

.h11span {
  font-size: 34px;
  color: #bebec5;
}

.p {
  padding-bottom: 30px;
  color: #8b8d98;
  font-size: 16px;
}
</style>

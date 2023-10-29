<template>
  <swiper
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="pagination"
    :modules="modules"
    navigation
    centered-slides
    loop
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <swiper-slide>
      <div :class="[$style.slide, $style.one]">
        <div :class="$style.slideText">
          <h2 :class="$style.h2">Квартиры комфорт класса</h2>
          <span :class="$style.span"
            >Отличается более удобной планировкой, <br />
            расширенным метражом, привлекательностью <br />дизайна общественных
            зон</span
          >
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div :class="[$style.slide, $style.two]">
        <div :class="$style.slideText">
          <h2 :class="$style.h2">Типовая застройка</h2>
          <span :class="$style.span"
            >Готовые квартиры с отделкой и мебелью</span
          >
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div :class="[$style.slide, $style.three]">
        <div :class="$style.slideText">
          <h2 :class="$style.h2">Квартиры бизнес класса</h2>
          <span :class="$style.span"
            >Высокий уровень комфорта и качества жилья</span
          >
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div :class="[$style.slide, $style.four]">
        <div :class="$style.slideText">
          <h2 :class="$style.h2">Апартаменты</h2>
          <span :class="$style.span"
            >Роскошные премиум решения <br />
            с гостиничным обслуживанием</span
          >
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { type PaginationOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default defineComponent({
  name: 'HomeSlider',
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    }
  },

  computed: {
    pagination(): PaginationOptions {
      return {
        clickable: true,
        bulletActiveClass: 'is-active',
      }
    },
  },

  methods: {
    onSwiper() {
      console.log('onSwiper')
    },
    onSlideChange() {
      console.log('onSlideChange')
    },
  },
})
</script>

<style module>
.swiper {
  width: 600px;
  height: 300px;
}

.slide {
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.slideText {
  position: absolute;
  left: 7%;
  top: 10%;
  color: aliceblue;
  background: hsla(0, 0%, 100%, 0.15);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(14px);
  padding: 20px;
  border-radius: 14px;
}

.h2 {
  font-size: 40px;
  margin-bottom: 20px;
}

.span {
  font-size: 24px;
}

.one {
  background-image: url('../assets/slide9.webp');
}

.two {
  background-image: url('../assets/slide7.webp');
}
.three {
  background-image: url('../assets/slider4.jpg');
}
.four {
  background-image: url('../assets/slide6.webp');
}
</style>

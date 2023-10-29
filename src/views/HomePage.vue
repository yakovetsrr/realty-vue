<template>
  <div>
    <swiper
      :space-between="30"
      :centered-slides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide>
        <div :class="[$style.slide, $style.one]"></div>
      </swiper-slide>
      <swiper-slide>
        <div :class="[$style.slide, $style.two]"></div>
      </swiper-slide>
      <swiper-slide>
        <div :class="[$style.slide, $style.three]"></div>
      </swiper-slide>
      <swiper-slide>
        <div :class="[$style.slide, $style.four]"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default defineComponent({
  name: 'HomePage',
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    }
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

.one {
  background-image: url('../assets/slider1.jpg');
}

.two {
  background-image: url('../assets/slider3.jpg');
}
.three {
  background-image: url('../assets/slider4.jpg');
}
.four {
  background-image: url('../assets/slider5.jpg');
}
</style>

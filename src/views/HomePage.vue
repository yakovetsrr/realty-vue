<template>
  <div :class="$style.homePage">
    <HomeSlider />
    <HomePageFilter />
    <HomeTags />
    <HomeDescription />
    <HomeMakeAnAppointment />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeSlider from '../components/HomeSlider.vue'
import HomePageFilter from '../components/HomePageFilter.vue'
import HomeTags from '../components/HomeTags.vue'
import HomeDescription from '../components/HomeDescription.vue'
import HomeMakeAnAppointment from '../components/HomeMakeAnAppointment.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeSlider,
    HomePageFilter,
    HomeTags,
    HomeDescription,
    HomeMakeAnAppointment,
  },
})
</script>

<style module>
.homePage {
  margin-top: -90px;
}
</style>

<template>
  <div :class="$style.homePage">
    <HomeSlider />
    <HomePageFilter />
    <HomePageOnlineDealPreview />
    <HomeMakeAnAppointment />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeSlider from '../components/HomeSlider.vue'
import HomePageFilter from '../components/HomePageFilter.vue'
import HomePageOnlineDealPreview from '../components/HomePageOnlineDealPreview.vue'
import HomeMakeAnAppointment from '../components/HomeMakeAnAppointment.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeSlider,
    HomePageFilter,
    HomePageOnlineDealPreview,
    HomeMakeAnAppointment,
  },
})
</script>

<style module>
.homePage {
  margin-top: -90px;
}
</style>

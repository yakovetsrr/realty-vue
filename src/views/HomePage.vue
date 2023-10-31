<template>
  <div :class="$style.homePage">
    <HomeSlider />
    <HomePageFilter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeSlider from '../components/HomeSlider.vue'
import HomePageFilter from '../components/HomePageFilter.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeSlider,
    HomePageFilter,
  },
})
</script>

<style module>
.homePage {
  margin-top: -90px;
}
</style>

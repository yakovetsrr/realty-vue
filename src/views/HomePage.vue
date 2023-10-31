<template>
  <div :class="$style.homePage">
    <HomeSlider />
    <HomePageFilter />
    <HomePageOnlineDealPreview />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeSlider from '../components/HomeSlider.vue'
import HomePageFilter from '../components/HomePageFilter.vue'
import HomePageOnlineDealPreview from '../components/HomePageOnlineDealPreview.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeSlider,
    HomePageFilter,
    HomePageOnlineDealPreview,
  },
})
</script>

<style module>
.homePage {
  margin-top: -90px;
}
</style>

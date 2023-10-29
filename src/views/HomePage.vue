<template>
  <div :class="$style.homePage">
    <HomeSlider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeSlider from '../components/HomeSlider.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeSlider,
  },
})
</script>

<style module>
.homePage {
  margin-top: -90px;
}
</style>

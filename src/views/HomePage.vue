<template>
  <div>
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

<style module></style>

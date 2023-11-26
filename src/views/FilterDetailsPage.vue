<template>
  <div :class="['container', $style.container]">
    <FlatDetailsHero />
    <FlatSimilar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FlatDetailsHero from './components/FlatDetailsHero.vue'
import FlatSimilar from './components/FlatsSimilar.vue'

export default defineComponent({
  components: { FlatDetailsHero, FlatSimilar },
})
</script>

<style module>
.container {
  padding-top: 20px;
}
</style>

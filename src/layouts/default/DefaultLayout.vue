<script lang="ts">
import { defineComponent } from 'vue'
import DefaultHeader from '@/layouts/default/DefaultHeader.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { DefaultHeader },
})
</script>

<template>
  <div>
    <DefaultHeader />
    <div :class="$style.page">
      <RouterView />
    </div>
  </div>
</template>

<style module>
.page {
  margin-top: 90px;
}
</style>

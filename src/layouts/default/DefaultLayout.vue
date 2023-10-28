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
    <RouterView />
  </div>
</template>

<style module></style>

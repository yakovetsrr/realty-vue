<template>
  <div :class="$style.tag">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTag',
})
</script>
<style module>
.tag {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid black;
  color: black;
}
</style>

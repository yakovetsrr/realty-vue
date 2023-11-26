<template>
  <div :class="$style.wrapper">
    <div>
      <VSelect
        :class="$style.select"
        :items="value"
        label="Сортировать"
      />
    </div>
    <div :class="$style.count">
      <span> 10 квартир</span>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([
  'По росту стоимости',
  'По убыванию стоимости',
  'По росту площади',
  'По убыванию стоимосит',
])
</script>

<style module>
.wrapper {
  position: relative;
  display: flex;
  padding-top: 12px;
}

.count {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.select {
  width: 400px;
  max-width: 400px;
  height: 56px;
}
</style>

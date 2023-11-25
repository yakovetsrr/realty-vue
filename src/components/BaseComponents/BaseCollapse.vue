<template>
  <transition
    name="collapse"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot />
  </transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const cachedStyles = ref<any>(null)

function enter(el: any, done: () => void) {
  detectAndCacheDimensions(el)

  setClosedDimensions(el)
  forceRepaint(el)
  setOpenedDimensions(el)

  setTimeout(done, 500)
}

function afterEnter(el: any) {
  unsetDimensions(el)
  clearCachedDimensions()
}

function leave(el: any, done: () => void) {
  detectAndCacheDimensions(el)

  setOpenedDimensions(el)
  forceRepaint(el)
  setClosedDimensions(el)

  setTimeout(done, 500)
}

function afterLeave(el: any) {
  unsetDimensions(el)
  clearCachedDimensions()
}

function detectAndCacheDimensions(el: any) {
  if (cachedStyles.value) return

  cachedStyles.value = detectRelevantDimensions(el)
}

function clearCachedDimensions() {
  cachedStyles.value = null
}

function detectRelevantDimensions(el: any) {
  return {
    height: el.offsetHeight + 'px',
  }
}

function setClosedDimensions(el: any) {
  Object.keys(cachedStyles.value).forEach((key) => {
    el.style[key] = '0'
  })
}

function setOpenedDimensions(el: any) {
  Object.keys(cachedStyles.value).forEach((key) => {
    el.style[key] = cachedStyles.value[key]
  })
}

function unsetDimensions(el: any) {
  Object.keys(cachedStyles.value).forEach((key) => {
    el.style[key] = ''
  })
}

function forceRepaint(el: HTMLElement) {
  getComputedStyle(el)['height']
}
</script>

<style>
.collapse-enter-active {
  overflow: hidden;
  transition: height 0.5s ease-in-out;
}

.collapse-leave-active {
  overflow: hidden;
  transition: height 0.5s ease-in-out;
}
</style>

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

<script setup>
import { ref } from 'vue'

const cachedStyles = ref(null)

function enter(el, done) {
  detectAndCacheDimensions(el)

  setClosedDimensions(el)
  forceRepaint(el)
  setOpenedDimensions(el)

  setTimeout(done, 500)
}

function afterEnter(el) {
  unsetDimensions(el)
  clearCachedDimensions()
}

function leave(el, done) {
  detectAndCacheDimensions(el)

  setOpenedDimensions(el)
  forceRepaint(el)
  setClosedDimensions(el)

  setTimeout(done, 500)
}

function afterLeave(el) {
  unsetDimensions(el)
  clearCachedDimensions()
}

function detectAndCacheDimensions(el) {
  if (cachedStyles.value) return

  cachedStyles.value = detectRelevantDimensions(el)
}

function clearCachedDimensions() {
  cachedStyles.value = null
}

function detectRelevantDimensions(el) {
  return {
    height: el.offsetHeight + 'px',
  }
}

function setClosedDimensions(el) {
  Object.keys(cachedStyles.value).forEach((key) => {
    el.style[key] = '0'
  })
}

function setOpenedDimensions(el) {
  Object.keys(cachedStyles.value).forEach((key) => {
    el.style[key] = cachedStyles.value[key]
  })
}

function unsetDimensions(el) {
  Object.keys(cachedStyles.value).forEach((key) => {
    el.style[key] = ''
  })
}

function forceRepaint(el) {
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

<template>
  <transition
    name="collapse"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div
      v-if="visible"
      class="collapse-content"
    >
      <!-- Ваш контент, который должен появиться/исчезнуть -->
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    toggleCollapse() {
      this.visible = !this.visible
    },
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el, done) {
      el.offsetHeight // активирует рефлоу
      el.style.height = el.scrollHeight + 'px'
      done()
    },
    leave(el, done) {
      el.style.height = '0'
      done()
    },
  },
}
</script>

<style>
.collapse-content {
  overflow: hidden;
  transition: height 0.3s ease;
}
</style>

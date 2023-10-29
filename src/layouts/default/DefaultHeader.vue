<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultHeader',
})
</script>

<template>
  <header :class="$style.header">
    <div :class="$style.right">
      <div>
        <RouterLink to="/"> Logo </RouterLink>
      </div>

      <nav>
        <ul :class="$style.menu">
          <li>
            <RouterLink to="/filter"> Filter </RouterLink>
          </li>

          <li>
            <RouterLink to="/filter"> Item 1 </RouterLink>
          </li>

          <li>
            <RouterLink to="/filter"> Item 2 </RouterLink>
          </li>

          <li>
            <RouterLink to="/filter"> Item 3 </RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <span>123</span>
    </div>
  </header>
</template>

<style module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 90px;
  border-bottom: 1px solid black;
}

.right {
  display: flex;
  gap: 36px;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>

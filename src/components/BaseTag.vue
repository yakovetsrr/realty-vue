<template>
  <div :class="$style.tag">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script></script>
<style module>
.tag {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid black;
  color: black;
}
</style>

<template>
  <div class="bullet" :style="style"></div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  x: Number,
  y: Number
})
const style = computed(() => ({
  transform: `translate(${props.x}px, ${props.y}px)`
}))
</script>

<style scoped>
.bullet {
  position: absolute;
  width: 5px;
  height: 10px;
  background: yellow;
}
</style>

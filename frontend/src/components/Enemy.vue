<template>
  <div class="enemy" :style="style"></div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  x: Number,
  y: Number,
  type: String
})
const style = computed(() => ({
  transform: `translate(${props.x}px, ${props.y}px)`
}))
</script>

<style scoped>
.enemy {
  position: absolute;
  width: 30px;
  height: 30px;
  background: url('../assets/enemy.svg') no-repeat center/contain;
}
</style>

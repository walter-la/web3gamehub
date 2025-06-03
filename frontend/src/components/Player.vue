<template>
  <div class="player" :style="style"></div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  x: { type: Number, required: true },
  y: { type: Number, required: true }
})
const style = computed(() => ({
  transform: `translate(${props.x}px, ${props.y}px)`
}))
</script>

<style scoped>
.player {
  position: absolute;
  width: 40px;
  height: 40px;
  background: url('../assets/player.svg') no-repeat center/contain;
}
</style>

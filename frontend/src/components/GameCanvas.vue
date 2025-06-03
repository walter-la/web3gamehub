<template>
  <canvas ref="canvas" class="game-canvas"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import useGameLoop from '../composables/useGameLoop'

const props = defineProps({
  running: Boolean
})

const canvas = ref(null)
let loop

onMounted(() => {
  loop = useGameLoop(canvas.value)
  if (props.running) loop.start()
})

watch(() => props.running, (val) => {
  if (!loop) return
  if (val) loop.start()
  else loop.stop()
})

onUnmounted(() => {
  if (loop) {
    loop.stop()
    loop.cleanup()
  }
})
</script>

<style scoped>
.game-canvas {
  width: 100%;
  height: 100%;
  background: #000;
}
</style>

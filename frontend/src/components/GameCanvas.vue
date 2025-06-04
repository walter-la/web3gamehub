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
const loop = ref(null)

onMounted(() => {
  loop.value = useGameLoop(canvas.value)
  if (props.running) loop.value.start()
})

defineExpose({ loop })

watch(
  () => props.running,
  (val) => {
    if (!loop.value) return
    if (val) loop.value.start()
    else loop.value.stop()
  }
)

onUnmounted(() => {
  if (loop.value) {
    loop.value.stop()
    loop.value.cleanup()
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

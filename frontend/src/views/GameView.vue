<template>
  <div class="game-view">
    <GameCanvas ref="canvas" :running="status==='playing'" />
    <UI :score="score" :status="status" @start="start" @restart="restart" />
    <TouchControls
      v-if="status==='playing' && isTouch && canvas?.loop"
      :controls="canvas.loop"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GameCanvas from '../components/GameCanvas.vue'
import UI from '../components/UI.vue'
import TouchControls from '../components/TouchControls.vue'

const score = ref(0)
const status = ref('start')
const canvas = ref(null)
const isTouch =
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0)

function start() {
  status.value = 'playing'
}

function restart() {
  score.value = 0
  status.value = 'playing'
}
</script>

<style scoped>
.game-view {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>

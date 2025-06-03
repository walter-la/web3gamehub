<template>
  <div class="game-view">
    <GameCanvas ref="canvas" :running="status==='playing'" />
    <UI :score="score" :status="status" @start="start" @restart="restart" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GameCanvas from '../components/GameCanvas.vue'
import UI from '../components/UI.vue'

const score = ref(0)
const status = ref('start')

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

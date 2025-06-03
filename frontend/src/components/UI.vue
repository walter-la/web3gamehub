<template>
  <div class="ui">
    <div v-if="status === 'start'" class="screen" @click="$emit('start')">Start Game</div>
    <div v-else-if="status === 'over'" class="screen" @click="$emit('restart')">Game Over - Click to Restart</div>
    <div v-else class="score">Score: {{ score }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  score: Number,
  status: String
})
const emits = defineEmits(['start', 'restart'])
</script>

<style scoped>
.ui {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  font-family: sans-serif;
  text-align: center;
  pointer-events: none;
}
.screen {
  pointer-events: auto;
  padding: 20px;
  background: rgba(0,0,0,0.5);
}
.score {
  padding: 10px;
}
</style>

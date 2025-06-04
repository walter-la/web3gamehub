<template>
  <div class="touch-controls">
    <button class="control" @touchstart.prevent="controls.pressLeft" @touchend.prevent="controls.releaseLeft">◀</button>
    <button class="control" @touchstart.prevent="controls.shoot">●</button>
    <button class="control" @touchstart.prevent="controls.pressRight" @touchend.prevent="controls.releaseRight">▶</button>
  </div>
</template>

<script setup>
const props = defineProps({
  controls: { type: Object, required: true }
})
</script>

<style scoped>
.touch-controls {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  pointer-events: none;
}
.control {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 24px;
  pointer-events: auto;
}
</style>

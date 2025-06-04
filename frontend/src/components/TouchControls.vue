<template>
  <div class="touch-controls">
    <button
      class="control"
      @pointerdown.prevent="controls.pressLeft"
      @pointerup.prevent="controls.releaseLeft"
      @pointercancel.prevent="controls.releaseLeft"
      @pointerleave.prevent="controls.releaseLeft"
    >◀</button>
    <button
      class="control"
      @pointerdown.prevent="controls.shoot"
    >●</button>
    <button
      class="control"
      @pointerdown.prevent="controls.pressRight"
      @pointerup.prevent="controls.releaseRight"
      @pointercancel.prevent="controls.releaseRight"
      @pointerleave.prevent="controls.releaseRight"
    >▶</button>
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
  touch-action: none;
}
</style>

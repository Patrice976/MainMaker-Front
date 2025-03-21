
<template>
<div class="hexagone">
  <img :src="godData.imageUrl" :alt="godData.name" />
</div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

defineProps({
  godData : {
    type: Object,
    required: true,
  }
})

</script>

<style scoped>
.hexagon {
  width: 100px;
  height: 100px;
  clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  overflow: hidden;
  cursor: pointer;
}
.hexagon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<template>
<h1>MainMaker</h1>
<div class="searchbar">
  <input type="text" placeholder="Cherchez votre divinité">
  <button>Go!</button>
</div>


</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

const gods =ref([])

onMounted(async () => {
  try {
    //On va chercher dans l'API
    const resp = await fetch('http://localhost:8000/api/champions')
    gods.value = await resp.json()
    console.log(gods.value)
  } catch (error) {
    console.error("Erreur lors du fetch :", error)
  }
})


</script>

<style scoped>

</style>

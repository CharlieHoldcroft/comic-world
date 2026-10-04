<script setup>
import { computed } from 'vue'
import ComicCard from '../components/ComicCard.vue'

import { comics, collection, collectionCount } from '../store.js'

const collectedComics = computed(() => comics.filter(comic => collection.value.includes(comic.name)))
</script>

<template>

  <div id="title">
    <h1>Collection</h1>
    <p>You have {{collectionCount}} comics in your collection</p>
  </div>

  <div id="menu">
    <RouterLink id="home" class="menuButton" to="/" aria-label="Home">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11l8-7 8 7M6 9.5V20h4.5v-5h3v5H18V9.5"/></svg>
    </RouterLink>
  </div>

  <div class="comicList">
    <ComicCard v-for="comic in collectedComics" :key="comic.name" :comic="comic" />
  </div>

</template>

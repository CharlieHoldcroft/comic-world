<script setup>
import { computed } from 'vue'
import ComicCard from '../components/ComicCard.vue'

import { comics, wishlist, wishlistCount } from '../store.js'

const wishedComics = computed(() => comics.filter(comic => wishlist.value.includes(comic.name)))
</script>

<template>

  <div id="title">
    <h1>Wishlist</h1>
    <p>You have {{wishlistCount}} comics in your wishlist</p>
  </div>

  <div id="menu">
    <RouterLink id="home" class="menuButton" to="/" aria-label="Home">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11l8-7 8 7M6 9.5V20h4.5v-5h3v5H18V9.5"/></svg>
    </RouterLink>
  </div>

  <div class="comicList">
    <ComicCard v-for="comic in wishedComics" :key="comic.name" :comic="comic" />
  </div>
</template>

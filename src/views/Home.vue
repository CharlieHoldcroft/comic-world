<script setup>
import ComicCard from '../components/ComicCard.vue'

import { comics, collectionCount, wishlistCount } from '../store.js'
</script>

<template>

  <div id="title">
    <h1>Comic World</h1>
    <p>Perfect place to track your comic collection</p>
  </div>

  <div id="menu">

    <div class="menuItem">
      <RouterLink id="collection" class="menuButton" to="/collection" aria-label="Collection">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h4v15H4zM10 5h4v15h-4zM16.5 5.5l3.8-1 3 14.5-3.8 1z"/></svg>
        <span v-if="collectionCount" class="menuBadge">{{ collectionCount }}</span>
      </RouterLink>
      <p class="menuTooltip">{{ collectionCount }} {{ collectionCount === 1 ? 'comic' : 'comics' }} in your collection</p>
    </div>

    <div class="menuItem">
      <RouterLink id="wishlist" class="menuButton" to="/wishlist" aria-label="Wishlist">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>
        <span v-if="wishlistCount" class="menuBadge">{{ wishlistCount }}</span>
      </RouterLink>
      <p class="menuTooltip">{{ wishlistCount }} {{ wishlistCount === 1 ? 'comic' : 'comics' }} in your wishlist</p>
    </div>

  </div>


  <div class="comicList">

    <ComicCard v-for="comic in comics" :key="comic.name" :comic="comic" />

  </div>

  <div id="information">
  </div>

</template>
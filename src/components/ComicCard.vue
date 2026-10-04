<script setup>
import { computed } from 'vue'
import comicPlaceHolder from '../assets/comicplaceholder.svg'

import { collection, wishlist, toggleCollection, toggleWishlist } from '../store.js'

const props = defineProps({
  comic: { type: Object, required: true }
})

const inCollection = computed(() => collection.value.includes(props.comic.name))
const inWishlist = computed(() => wishlist.value.includes(props.comic.name))
</script>

<template>

  <div class="comicRow">

    <div class="details">
      <img :src="comicPlaceHolder" alt="Comic Placeholder" width="150" height="225">
      <p>{{ comic.name }}</p>

      <div class="toolbar">
        <button
          class="toolbarButton"
          :class="{ active: inCollection }"
          :aria-pressed="inCollection"
          :aria-label="`${comic.name} in collection`"
          :title="inCollection ? 'Remove from collection' : 'Add to collection'"
          @click="toggleCollection(comic.name)"
        >
          <svg v-if="inCollection" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
          <span>{{ inCollection ? 'Owned' : 'Collect' }}</span>
        </button>
        <button
          class="toolbarButton wishlistButton"
          :class="{ active: inWishlist }"
          :aria-pressed="inWishlist"
          :aria-label="`${comic.name} in wishlist`"
          :title="inWishlist ? 'Remove from wishlist' : 'Add to wishlist'"
          @click="toggleWishlist(comic.name)"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>
          <span>{{ inWishlist ? 'Want' : 'Want' }}</span>
        </button>
      </div>

    </div>

  </div>

</template>

import { ref, computed, watch } from 'vue'

export const comics = [
    { name: 'Spider-man' },
    { name: 'Batman' },
    { name: 'Superman' },
    { name: 'X-men' },
    { name: 'Iron Man' },
    { name: 'Captain America' },
    { name: 'Thor' },
    { name: 'Hulk' },
    { name: 'Wonder Woman' },
    { name: 'The Flash' },
    { name: 'Green Lantern' },
    { name: 'Aquaman' },
    { name: 'Black Panther' },
    { name: 'Deadpool' },
    { name: 'Wolverine' },
    { name: 'Venom' },
    { name: 'Daredevil' },
    { name: 'Doctor Strange' },
    { name: 'Fantastic Four' },
    { name: 'Green Arrow' },
    { name: 'The Joker' },
    { name: 'Harley Quinn' },
    { name: 'Spawn' },
    { name: 'Hellboy' },
    { name: 'Judge Dredd' }
]

// A list of comic names, saved to localStorage so it survives a page reload
function savedList(key) {
    let initial = []
    try {
        initial = JSON.parse(localStorage.getItem(key)) ?? []
    } catch { }

    const list = ref(initial)
    watch(list, value => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch { }
    }, { deep: true })
    return list
}

export const collection = savedList('collection')
export const wishlist = savedList('wishlist')

export const collectionCount = computed(() => collection.value.length)
export const wishlistCount = computed(() => wishlist.value.length)

function toggle(list, name) {
    const index = list.value.indexOf(name)
    if (index === -1) {
        list.value.push(name)
    } else {
        list.value.splice(index, 1)
    }
}

export const toggleCollection = name => toggle(collection, name)
export const toggleWishlist = name => toggle(wishlist, name)

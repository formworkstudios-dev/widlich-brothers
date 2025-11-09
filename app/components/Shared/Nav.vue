<script
  setup
  lang="ts"
>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
const appConfig = useAppConfig()
const siteName = appConfig.siteName
const siteLogo = appConfig.siteLogo
const menuOpen = ref(false)
const navVisible = ref(true)
// Desktop dropdown state
const servicesOpen = ref(false)
const locationsOpen = ref(false)
let lastScrollY = 0
if (typeof window !== 'undefined') {
  lastScrollY = window.scrollY
}

const scrolled = ref(false)
const route = useRoute()

const scrollThreshold = computed(() => {
  return 400
})

const useLightText = computed(() => !scrolled.value)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function toggleServices() {
  servicesOpen.value = !servicesOpen.value
  if (servicesOpen.value) locationsOpen.value = false
}
function toggleLocations() {
  locationsOpen.value = !locationsOpen.value
  if (locationsOpen.value) servicesOpen.value = false
}
function closeDropdowns() {
  servicesOpen.value = false
  locationsOpen.value = false
}
function handleScroll() {
  if (typeof window === 'undefined') return
  const currentY = window.scrollY
  navVisible.value = currentY < lastScrollY || currentY < 10
  lastScrollY = currentY
  scrolled.value = currentY > scrollThreshold.value
}
onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
  }
})
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})

// Close dropdowns after navigation
watch(() => route.path, () => {
  closeDropdowns()
  // Re-evaluate scroll position on route change
  if (typeof window !== 'undefined') {
    handleScroll()
  }
})
</script>

<template>
  <nav
    class="p-2 mb-4 fixed top-0 left-0 w-full z-50 transition-all duration-500"
    :style="navVisible ? 'transform: translateY(0);' : 'transform: translateY(-100%);'"
    :class="[useLightText ? 'text-white' : 'text-amber-950', useLightText ? 'bg-transparent' : 'bg-amber-50', 'backdrop-blur']"
  >
    <div class="flex justify-between items-center w-full">
      <NuxtLink
        class="font-bold flex items-center gap-3"
        to="/"
        :class="useLightText ? 'text-white' : 'text-amber-950'"
        style="color: inherit !important;"
      >
        <img
          v-if="siteLogo"
          :src="siteLogo"
          alt="Logo"
          :class="[useLightText ? 'invert' : '', 'h-12 w-12 object-contain transition-all duration-300']"
        />
        <span class="text-xl md:text-2xl font-bold fancy-text">{{ siteName }}</span>
      </NuxtLink>
      <div class="hidden md:flex gap-8 items-center">
        <NuxtLink
          to="/"
          class="nav-link"
          :class="[useLightText ? 'text-white' : 'text-amber-950']"
          style="color: inherit !important;"
        >Home</NuxtLink>
        <NuxtLink
          to="/about"
          class="nav-link"
          :class="[useLightText ? 'text-white' : 'text-amber-950']"
          style="color: inherit !important;"
        >About</NuxtLink>
        <NuxtLink
          to="/contact"
          class="nav-link"
          :class="[useLightText ? 'text-white' : 'text-amber-950']"
          style="color: inherit !important;"
        >Contact</NuxtLink>
        <div class="relative dropdown">
          <button
            class="nav-link flex items-center gap-1"
            type="button"
            @click="toggleServices"
          >
            Services
            <span class="text-xs">{{ servicesOpen ? '▲' : '▼' }}</span>
          </button>
          <transition name="fade">
            <div
              v-if="servicesOpen"
              class="menu absolute left-0 top-full bg-white dark:bg-amber-900 text-amber-900 dark:text-amber-100 border border-amber-200 dark:border-amber-800 shadow-lg rounded-none min-w-[200px] z-40"
            >
              <NuxtLink
                to="/tree-removal-services"
                class="block px-4 py-2 hover:bg-amber-100 dark:hover:bg-amber-800"
              >Tree Removal Services</NuxtLink>
              <NuxtLink
                to="/tree-removal-services/tree-stump-gridning"
                class="block px-4 py-2 hover:bg-amber-100 dark:hover:bg-amber-800"
              >Stump Grinding</NuxtLink>
              <NuxtLink
                to="/tree-removal-services/tree-trimming-and-pruning"
                class="block px-4 py-2 hover:bg-amber-100 dark:hover:bg-amber-800"
              >Trimming & Pruning</NuxtLink>
              <NuxtLink
                to="/tree-removal-services/land-clearing"
                class="block px-4 py-2 hover:bg-amber-100 dark:hover:bg-amber-800"
              >Land Clearing</NuxtLink>
            </div>
          </transition>
        </div>
        <div class="relative dropdown">
          <button
            class="nav-link flex items-center gap-1"
            type="button"
            @click="toggleLocations"
          >
            Locations
            <span class="text-xs">{{ locationsOpen ? '▲' : '▼' }}</span>
          </button>
          <transition name="fade">
            <div
              v-if="locationsOpen"
              class="menu absolute left-0 top-full bg-white dark:bg-amber-900 text-amber-900 dark:text-amber-100 border border-amber-200 dark:border-amber-800 shadow-lg rounded-none min-w-[200px] z-40"
            >
              <NuxtLink
                to="/tree-removal-services/northeastern-pa"
                class="block px-4 py-2 hover:bg-amber-100 dark:hover:bg-amber-800"
              >Northeastern PA</NuxtLink>
              <NuxtLink
                to="/tree-removal-services/northeastern-pa/pittston"
                class="block px-4 py-2 hover:bg-amber-100 dark:hover:bg-amber-800"
              >Pittston</NuxtLink>
              <NuxtLink
                to="/tree-removal-services/northeastern-pa/scranton"
                class="block px-4 py-2 hover:bg-amber-100 dark:hover:bg-amber-800"
              >Scranton</NuxtLink>
              <NuxtLink
                to="/tree-removal-services/northeastern-pa/poconos"
                class="block px-4 py-2 hover:bg-amber-100 dark:hover:bg-amber-800"
              >Poconos</NuxtLink>
            </div>
          </transition>
        </div>
        <!-- <NuxtLink to="/posts" class="nav-link">Blog</NuxtLink> -->
        <UButton
          size="xl"
          class="ml-4 bg-green-700 hover:bg-green-800 active:bg-green-900 text-white border-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent transition-colors"
          to="tel:+15707033963"
          aria-label="Call 570-703-3963"
        >Call Now</UButton>
      </div>
      <button
        class="md:hidden p-2"
        @click="toggleMenu"
        aria-label="Open menu"
      >
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>
    <transition name="flyout">
      <div
        v-if="menuOpen"
        class="md:hidden fixed top-0 left-0 w-screen h-screen flex flex-col z-50 shadow-lg bg-default"
        style="padding-top: 4rem;"
      >
        <button
          class="absolute top-4 right-4 text-3xl p-2"
          @click="toggleMenu"
          aria-label="Close menu"
        >✕</button>
        <div class="flex flex-col gap-8 items-center mt-8">
          <UButton
            size="xl"
            class="mb-4 bg-green-700 hover:bg-green-800 active:bg-green-900 text-white border-0 shadow-sm w-11/12 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent transition-colors"
            to="tel:+15707033963"
            aria-label="Call 570-703-3963"
          >Call Now</UButton>
          <NuxtLink
            to="/"
            @click="toggleMenu"
          >Home</NuxtLink>
          <NuxtLink
            to="/about"
            @click="toggleMenu"
          >About</NuxtLink>
          <NuxtLink
            to="/contact"
            @click="toggleMenu"
          >Contact</NuxtLink>
          <div class="w-full">
            <div class=" mb-2">Services</div>
            <NuxtLink
              to="/tree-removal-services"
              @click="toggleMenu"
              class="block px-4 py-2"
            >Tree Removal Services</NuxtLink>
            <NuxtLink
              to="/tree-removal-services/tree-stump-gridning"
              @click="toggleMenu"
              class="block px-4 py-2"
            >Stump Grinding</NuxtLink>
            <NuxtLink
              to="/tree-removal-services/tree-trimming-and-pruning"
              @click="toggleMenu"
              class="block px-4 py-2"
            >Trimming & Pruning</NuxtLink>
            <NuxtLink
              to="/tree-removal-services/land-clearing"
              @click="toggleMenu"
              class="block px-4 py-2"
            >Land Clearing</NuxtLink>
          </div>
          <div class="w-full mt-4">
            <div class="mb-2">Locations</div>
            <NuxtLink
              to="/tree-removal-services/northeastern-pa"
              @click="toggleMenu"
              class="block px-4 py-2"
            >Northeastern PA</NuxtLink>
            <NuxtLink
              to="/tree-removal-services/northeastern-pa/pittston"
              @click="toggleMenu"
              class="block px-4 py-2"
            >Pittston</NuxtLink>
            <NuxtLink
              to="/tree-removal-services/northeastern-pa/scranton"
              @click="toggleMenu"
              class="block px-4 py-2"
            >Scranton</NuxtLink>
            <NuxtLink
              to="/tree-removal-services/northeastern-pa/poconos"
              @click="toggleMenu"
              class="block px-4 py-2"
            >Poconos</NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>
<style scoped>
.flyout-enter-active,
.flyout-enter-from,
.flyout-leave-to {
  transform: translateX(100%);
}

.flyout-enter-to,
.flyout-leave-from {
  transform: translateX(0);
}

.nav-link {
  position: relative;
  padding-bottom: 2px;
  transition: color 0.5s;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  opacity: 0;
  transform: scaleX(0);
  transition: opacity 0.5s, transform 0.5s;
}

.nav-link:hover::after {
  opacity: 1;
  transform: scaleX(1);
}

/* Dropdown hover bridge to keep menu open when moving cursor */
.dropdown {
  position: relative;
}

/* (legacy hover selector removed since click now controls visibility) */

/* (hover bridge removed) */
/* Fade transition for dropdown */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

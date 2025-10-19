<script
  setup
  lang="ts"
>
import { ref, onMounted, onUnmounted } from 'vue'
const appConfig = useAppConfig()
const siteName = appConfig.siteName
const siteLogo = appConfig.siteLogo
const menuOpen = ref(false)
const navVisible = ref(true)
let lastScrollY = 0
if (typeof window !== 'undefined') {
  lastScrollY = window.scrollY
}
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function handleScroll() {
  if (typeof window === 'undefined') return
  const currentY = window.scrollY
  navVisible.value = currentY < lastScrollY || currentY < 10
  lastScrollY = currentY
}
onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll)
  }
})
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <nav
    class="p-2 mb-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300"
    :style="navVisible ? 'transform: translateY(0);' : 'transform: translateY(-100%);'"
  >
    <div class="flex justify-between items-center w-full">
      <NuxtLink
        class="font-bold"
        to="/"
      >{{ siteLogo ? siteLogo : siteName }}</NuxtLink>
      <div class="hidden md:flex gap-8 items-center">
        <NuxtLink
          to="/"
          class="nav-link"
        >Home</NuxtLink>
        <NuxtLink
          to="/about"
          class="nav-link"
        >About</NuxtLink>
        <NuxtLink
          to="/contact"
          class="nav-link"
        >Contact</NuxtLink>
        <!-- <NuxtLink to="/posts" class="nav-link">Blog</NuxtLink> -->
        <UButton
          size="xl"
          color="primary"
          class="ml-4 text-white"
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
            color="primary"
            class="mb-4"
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
          <!-- <NuxtLink to="/posts" @click="toggleMenu">Blog</NuxtLink> -->
        </div>
      </div>
    </transition>
  </nav>
</template>
<style scoped>
.flyout-enter-active,
.flyout-leave-active {
  transition: transform 0.3s cubic-bezier(.4, 0, .2, 1);
}

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
  transition: color 0.2s;
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
  transition: opacity 0.2s, transform 0.2s;
}

.nav-link:hover::after {
  opacity: 1;
  transform: scaleX(1);
}
</style>

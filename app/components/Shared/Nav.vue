<script
  setup
  lang="ts"
>
import { ref } from 'vue'
const appConfig = useAppConfig()
const siteName = appConfig.siteName
const siteLogo = appConfig.siteLogo
const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <nav class="border-b p-2 mb-4">
    <div class="flex justify-between items-center">
      <NuxtLink to="/">{{ siteLogo ? siteLogo : siteName }}</NuxtLink>
      <button
        class="md:hidden p-2"
        @click="toggleMenu"
        aria-label="Open menu"
      >
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>
        <div class="hidden md:flex gap-8">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
          <!-- <NuxtLink to="/posts">Blog</NuxtLink> -->
        </div>
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
            <NuxtLink to="/" @click="toggleMenu">Home</NuxtLink>
            <NuxtLink to="/about" @click="toggleMenu">About</NuxtLink>
            <NuxtLink to="/contact" @click="toggleMenu">Contact</NuxtLink>
            <!-- <NuxtLink to="/posts" @click="toggleMenu">Blog</NuxtLink> -->
          </div>
      </div>
    </transition>
  </nav>
</template>
<style scoped>
nav {
  position: relative;
}

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
</style>

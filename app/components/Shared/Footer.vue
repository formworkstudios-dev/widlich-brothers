<script
  setup
  lang="ts"
>
const colorMode = useColorMode()
function toggleColorMode() {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <footer
    class="border-t w-full bg-amber-100/30 border-amber-200 text-amber-800 dark:bg-amber-950/30 dark:border-amber-950 dark:text-amber-200"
  >
    <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
      <!-- Top Row -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 md:gap-0">
        <!-- Left: Company -->
        <div class="flex flex-col items-start min-w-[180px] text-left">
          <div class="font-bold text-lg fancy-text">Weidlich Brothers Tree Care</div>
          <div class="text-sm mt-1 dark:text-amber-100">Professional tree care and removal services in Northeastern PA.
          </div>
        </div>
        <!-- Middle: Main Links -->
        <div class="flex flex-col items-start gap-1 text-left min-w-[120px]">
          <div class="text-lg font-semibold fancy-text mb-1 tracking-wide text-amber-700 dark:text-amber-200">
            Information
          </div>
          <NuxtLink
            to="/"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >Home</NuxtLink>
          <NuxtLink
            to="/about"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >About</NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >Contact</NuxtLink>
        </div>
        <!-- Middle: Services -->
        <div class="flex flex-col items-start gap-1 min-w-[120px] text-left">
          <div class="text-lg font-semibold fancy-text mb-1 tracking-wide text-amber-700 dark:text-amber-200">
            Services
          </div>
          <NuxtLink
            to="/tree-removal-services"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >Tree Removal Services</NuxtLink>
          <NuxtLink
            to="/tree-removal-services/tree-stump-gridning"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >Stump Grinding</NuxtLink>
          <NuxtLink
            to="/tree-removal-services/tree-trimming-and-pruning"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >Trimming & Pruning</NuxtLink>
          <NuxtLink
            to="/tree-removal-services/land-clearing"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >Land Clearing</NuxtLink>
        </div>
        <!-- Right: Locations -->
        <div class="flex flex-col items-start gap-1 min-w-[180px] text-left">
          <div class="text-lg font-semibold mb-1 fancy-text tracking-wide text-amber-700 dark:text-amber-200">
            Locations
          </div>
          <NuxtLink
            to="/tree-removal-services/northeastern-pa"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >Northeastern PA</NuxtLink>
          <NuxtLink
            to="/tree-removal-services/northeastern-pa/pittston"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >Pittston</NuxtLink>
          <NuxtLink
            to="/tree-removal-services/northeastern-pa/poconos"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >Poconos</NuxtLink>
          <NuxtLink
            to="/tree-removal-services/northeastern-pa/scranton"
            class="text-amber-800 dark:text-amber-100 hover:underline transition-colors text-sm"
          >Scranton</NuxtLink>
        </div>
      </div>
      <!-- Bottom Row -->
      <div
        class="flex flex-col md:flex-row justify-between items-center mt-4 gap-2 border-t border-amber-200 dark:border-amber-950 pt-4"
      >
        <div class="text-xs dark:text-amber-100">&copy; {{ new Date().getFullYear() }} Weidlich Brothers Tree Care. All
          rights reserved.
        </div>
        <button
          @click="toggleColorMode"
          class="flex items-center gap-2 px-3 py-1 rounded-none bg-amber-100 dark:bg-amber-900 border border-amber-200 dark:border-amber-800 hover:bg-amber-300 dark:hover:bg-amber-800 transition-colors text-xs cursor-pointer"
          style="font-size: 0.85rem;"
        >
          <UIcon
            :name="colorMode.value === 'dark' ? 'i-mdi-weather-night' : 'i-mdi-white-balance-sunny'"
            class="text-base text-amber-800 dark:text-amber-100"
          />
          <span class="dark:text-amber-100">{{ colorMode.value === 'dark' ? 'Dark' : 'Light' }} Mode</span>
        </button>
      </div>
    </div>
  </footer>
</template>

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
    class="border-t p-4 text-sm w-full flex flex-col items-center bg-amber-200/50 border-amber-300 text-amber-800 dark:bg-amber-950 dark:border-amber-900 dark:text-amber-200"
  >
    <div class="mb-2">&copy; {{ new Date().getFullYear() }} Weidlich Brothers Tree Care</div>
    <button
      @click="toggleColorMode"
      class="mt-2 flex items-center"
      style="background:none;border:none;padding:0;"
    >
      <UIcon
        :name="colorMode.value === 'dark' ? 'i-mdi-weather-night' : 'i-mdi-white-balance-sunny'"
        class="text-2xl text-amber-800 dark:text-amber-200"
      />
    </button>
  </footer>
</template>

<style scoped>
footer {
  min-height: 60px;
}

button:active {
  background: none !important;
}
</style>

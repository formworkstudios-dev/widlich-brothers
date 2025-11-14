<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <SharedNav class="fixed" />
    <main>
      <NuxtPage />
    </main>
    <footer>
      <SharedFooter />
    </footer>
  </UApp>
</template>

<script setup>
definePageMeta({
  colorMode: 'light',
})
</script>
<script
  setup
  lang="ts"
>

import { definePageMeta } from '#imports'

// Note: does not work for dynamic pages, only accepts strings
definePageMeta({
  title: '#1 Tree Service in Northeastern PA'
})

</script>

<template>
  <HomeHero />
  <div
    id="content-wrapper"
    class="flex flex-col py-18 md:py-26 gap-22 md:gap-26 "
  >
    <HomeAbout />
    <HomeEquipment />
    <HomeServices />
    <HomeContact />
    <HomeFAQ />
    <HomeCTA />

  </div>
</template>

<style scoped></style>

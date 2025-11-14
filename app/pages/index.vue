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
    class="flex flex-col pt-20 md:pt-32"
  >
    <HomeAbout />
    <HomeEquipment />
    <HomeServices />
    <HomeContact />
    <section class="bg-amber-50/10 py-32 flex flex-col gap-20">
      <HomeCTA />
      <HomeFAQ />
    </section>
  </div>
</template>

<style scoped></style>

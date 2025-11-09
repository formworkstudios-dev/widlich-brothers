<script
  setup
  lang="ts"
>
const imageUrl = '/tree-trunk-hero-weidlich-brothers.webp'
</script>

<template>
  <div class="flex justify-center px-4 md:px-0">
    <div
      class="max-w-4xl w-full flex flex-col-reverse md:flex-row items-stretch gap-0 rounded-none p-0 border border-amber-200 dark:border-amber-800 bg-transparent overflow-hidden"
    >
      <div class="flex flex-col justify-center items-start flex-1 p-6 md:p-10 bg-amber-50">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-amber-900 dark:text-white">Ready for Expert Tree Care?</h2>
        <p class="text-base md:text-lg mb-6 text-gray-700 dark:text-gray-200">Call Weidlich Brothers today for expert
          tree care services. Our team is fully insured and ready to help with any tree removal or trimming
          needs in Northeast PA.</p>
        <UButton
          size="xl"
          color="primary"
          to="tel:+15707033963"
          class="font-semibold w-full md:w-auto text-center md:text-left"
        ><span class="w-full">Call 570-703-3963</span></UButton>
      </div>
      <div class="flex-1 flex p-0 min-h-[180px] md:min-h-0 px-6 md:px-0 justify-start">
        <img
          :src="imageUrl"
          alt="Tree Care CTA"
          class="w-full h-40 md:h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

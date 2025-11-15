<script
  setup
  lang="ts"
></script>

<template>
  <div class=" bg-amber-50/10 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
    <UContainer class="flex flex-col-reverse md:flex-row items-stretch justify-between gap-8 px-4">
      <div class="flex-1 text-left flex flex-col justify-center">
        <h2 class="text-3xl font-bold mb-4 hidden md:flex">About Weidlich Brothers Tree Care</h2>

        <h2 class="text-3xl font-bold mb-4 flex md:hidden">About Us</h2>
        <p class="text-lg text-toned">Weidlich Brothers Tree Care is based in Pittston, PA. We specialize in safe and
          professional tree removal, trimming, and care for your property.</p>
        <p class="text-lg text-toned mt-4">Founded in 1995, our team has been doing tree work since 1986, bringing
          decades of experience to every job.</p>
        <NuxtLink
          to="/about"
          class="mt-6 inline-flex items-center gap-2 text-amber-700 dark:text-amber-200 hover:underline font-semibold group"
        >
          Learn more about us
          <UIcon
            name="i-mdi-chevron-double-right"
            class="transition-transform duration-300 group-hover:translate-x-1"
          />
        </NuxtLink>
      </div>
      <div class="flex-1 flex w-full">
        <NuxtImg
          src="/webp/tree-removal-and-cutting-northeastern-pa.webp"
          alt="About Weidlich Brothers Tree Care"
          class="w-full h-48 md:h-full object-cover border border-amber-100 dark:border-amber-800"
        />
      </div>
    </UContainer>


  </div>
</template>

<style scoped>
section {
  min-height: 350px;
}
</style>
<style scoped></style>

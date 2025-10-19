<script
  setup
  lang="ts"
></script>

<template>
  <div class="py-16 bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-100">
    <UContainer class="flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 md:px-12">
      <div class="flex-1 text-left">
        <h2 class="text-3xl font-bold mb-4">About Weidlich Brothers Tree Care</h2>
        <p class="text-lg text-toned">Weidlich Brothers Tree Care is based in Pittston, PA. We specialize in safe and
          professional tree removal, trimming, and care for your property.</p>
        <p class="text-lg text-toned mt-4">Founded in 1995, our team has been doing tree work since 1986, bringing
          decades of experience to every job.</p>
      </div>
      <div class="flex-1 flex justify-center">
        <NuxtImg
          src="/tree-removal-pittson.webp"
          alt="About Weidlich Brothers Tree Care"
          class="w-full max-w-sm md:max-w-md object-cover ml-auto"
        />
      </div>
    </UContainer>
    <UContainer class="flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 md:px-12">
      <div class="flex-1 flex justify-center">
        <NuxtImg
          src="/tree-removal-pittson.webp"
          alt="Tree Service Equipment"
          class="w-full max-w-sm md:max-w-md object-cover mr-auto"
        />
      </div>
      <div class="flex-1 text-right">
        <h2 class="text-3xl font-bold mb-4">Our Equipment</h2>
        <p class="text-lg text-toned">We use state-of-the-art equipment to ensure every job is completed safely and
          efficiently, no matter the size or complexity.</p>
      </div>
    </UContainer>
    <UContainer class="flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 md:px-12">
      <div class="flex-1 text-left">
        <h2 class="text-3xl font-bold mb-4">Commitment to Our Neighborhood</h2>
        <p class="text-lg text-toned">We take pride in serving Pittston and the surrounding communities, treating every
          property as if it were our own. Our commitment is to safety, quality, and the well-being of our neighbors.</p>
      </div>
      <div class="flex-1 flex justify-center">
        <NuxtImg
          src="/tree-removal-pittson.webp"
          alt="Neighborhood Commitment"
          class="w-full max-w-sm md:max-w-md object-cover ml-auto"
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

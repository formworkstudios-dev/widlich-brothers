<template>
  <div class="relative w-full min-h-screen flex flex-col">
    <div class="relative w-full h-72 md:h-96 flex items-center justify-center mb-8 overflow-hidden">
      <NuxtImg
        src="/tree-trunk-hero-weidlich-brothers.webp"
        alt="Weidlich Brothers Tree Care Hero"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="absolute inset-0 z-10 bg-black/40" />
      <div
        class="relative z-10 flex flex-col items-center justify-center w-full h-full"
        style="padding-top:4.5rem;"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">About Weidlich Brothers
          Tree Care</h1>
      </div>
    </div>
    <UContainer class="flex-1 flex justify-center mb-20">
      <div class="w-full max-w-2xl mx-auto">
        <div class="mb-6 w-full h-64 md:h-80 overflow-hidden border border-amber-200 dark:border-amber-800">
          <NuxtImg
            src="/webp/tree-removal-and-cutting-northeastern-pa.webp"
            alt="Weidlich Brothers Tree Care"
            class="w-full h-full object-cover object-top"
            fit="cover"
            :height="320"
          />
        </div>
        <h2 class="text-2xl font-bold mb-4">Our Story</h2>
        <p class="text-lg mb-4">
          Weidlich Brothers Tree Care is a family-owned business serving Pittston, Olyphant, and the surrounding areas
          since 1995. We specialize in safe, professional tree removal, trimming, and care for your property.
        </p>
        <p class="text-lg">
          Our team brings decades of experience, a commitment to safety, and a passion for helping our neighbors keep
          their properties beautiful and secure.
        </p>
        <p>We are fully insured and work with only the best equipment and techniques to ensure the highest quality of
          service. We don't take shortcuts. We see tree removal as an art.</p>
      </div>
    </UContainer>
  </div>
</template>

<script
  setup
  lang="ts"
></script>

<style scoped>
.bg-black\/40 {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

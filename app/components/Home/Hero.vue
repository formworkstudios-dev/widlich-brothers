<script
  setup
  lang="ts"
>
import { NuxtImg } from '#components'
</script>

<template>
  <div
    id="homehero"
    class="min-h-screen w-screen flex flex-col justify-center items-center text-center relative overflow-hidden border-b border-muted"
  >
    <div
      class="absolute inset-0 z-0 w-full h-full"
      style="background: url('/tree-trunk-hero-weidlich-brothers.webp') center center / cover no-repeat;"
    ></div>
    <div
      class="absolute inset-0 z-10 bg-black"
      style="opacity:0.45;"
    ></div>

    <div class="relative z-10 w-full flex flex-col justify-center items-center px-4">
      <div class="flex flex-col justify-center items-center gap-8 max-w-2xl w-full mx-auto">
        <NuxtImg
          src="/weidlich-logo.png"
          alt="Weidlich Brothers Logo"
          class="mx-auto w-48 h-48 mb-2"
          style="filter: invert(1);"
        />
        <div class="flex flex-col items-center w-full gap-1">
          <h1 class="text-5xl md:text-6xl font-bold text-white max-w-full break-words">Best Tree Removal and Care
            Services in Northeastern PA</h1>
          <p class="text-xl md:!text-2xl text-white/90 max-w-xl mx-auto font-semibold">Professional Tree Removal and
            Care Serving
            Pittston, Scranton, the Poconos, and all of Northeast PA</p>
        </div>
        <UFieldGroup
          size="xl"
          class="gap-4 text-white mt-2 flex-col md:flex-row w-full mx-auto items-center justify-center"
        >
          <UButton class="text-white w-full md:w-auto">
            <span class="w-full text-center block">Our Services</span>
          </UButton>
          <UButton
            variant="outline"
            class="text-white w-full md:w-auto"
            to="tel:+15707033963"
          >
            <span class="w-full text-center block">Call Now 1-570-7033963</span>
          </UButton>
        </UFieldGroup>
      </div>

    </div>
  </div>
</template>

<style scoped>
#homehero {
  min-height: 100vh;
  position: relative;
  width: 100vw;
}

.fade-slide-enter-active {
  transition: opacity 0.7s cubic-bezier(.4, 0, .2, 1), transform 0.7s cubic-bezier(.4, 0, .2, 1);
}

.fade-slide-leave-active {
  transition: opacity 0.3s cubic-bezier(.4, 0, .2, 1), transform 0.3s cubic-bezier(.4, 0, .2, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>

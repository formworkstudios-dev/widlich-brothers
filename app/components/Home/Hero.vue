<script
  setup
  lang="ts"
></script>

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
      style="opacity:0.25;"
    ></div>

    <div class="relative z-10 w-full flex flex-col justify-center items-center gap-8">
      <div>
        <h1 class="!text-6xl font-bold mb-4 text-white">Weidlich Brothers Tree Care</h1>
        <p class="!text-2xl text-white max-w-xl mx-auto">Professional Tree Removal and Care Serving Pittston, Scranton,
          the
          Poconos, and
          all of Northeast PA</p>
      </div>
      <UFieldGroup
        size="xl"
        class="gap-4 text-white"
      >
        <UButton
          label="Our Services"
          class="text-white"
        />

        <UButton
          variant="outline"
          class="text-white"
          label="Call Now"
        />

      </UFieldGroup>

    </div>
  </div>
</template>

<style scoped>
#homehero {
  min-height: 100vh;
  position: relative;
  width: 100vw;
}
</style>

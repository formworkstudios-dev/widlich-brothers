<template>
  <div class="relative w-full min-h-screen flex flex-col">
    <div class="relative w-full h-72 md:h-96 flex items-center justify-center overflow-hidden">
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
        <h1 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">Tree Service in
          Northeastern PA</h1>
      </div>
    </div>
    <SharedWrapper>
      <div class="w-full max-w-2xl mx-auto">
        <LocationsIntro
          service-name="Professional Tree Care in Northeastern PA"
          description="Expert tree removal, trimming, stump grinding, and land clearing services throughout Northeastern Pennsylvania. Serving Scranton, Pittston, the Poconos, and surrounding areas with professional, insured tree care."
        />
        <LocationsDetails
          service-name="Our Tree Services"
          :details="[
            'Complete tree removal and cutting',
            'Professional tree trimming and pruning',
            'Stump grinding and removal',
            'Land and lot clearing',
            'Emergency storm damage response',
            'Crane-assisted tree removal',
            'Fully insured and experienced crews'
          ]"
        />
        <LocationsCustom header="Why Choose Weidlich Brothers">
          <p class="text-lg leading-relaxed">
            Add your custom content here for Northeastern PA.
          </p>
        </LocationsCustom>
      </div>
    </SharedWrapper>
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

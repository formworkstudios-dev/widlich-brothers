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
        <h1 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">Tree Removal Services in
          Pittston</h1>
      </div>
    </div>
    <SharedWrapper show-cta>
      <div class="w-full max-w-2xl mx-auto">
        <LocationsIntro
          service-name="Tree Removal Services in Pittston, PA"
          description="Professional tree care serving Pittston and the Greater Pittston area. From residential tree removal to commercial land clearing, we provide expert tree services with a focus on safety and customer satisfaction."
        />
        <LocationsDetails
          service-name="Tree Services in Pittston"
          :details="[
            'Residential and commercial tree removal',
            'Tree trimming and pruning',
            'Stump grinding services',
            'Emergency tree removal',
            'Land clearing for construction',
            'Storm damage cleanup',
            'Free estimates and consultations'
          ]"
        />
        <LocationsCustom header="Serving Pittston with Professional Tree Care">
          <p class="text-lg leading-relaxed">
            Add your custom content here for Pittston.
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

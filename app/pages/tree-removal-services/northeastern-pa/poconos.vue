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
          the Poconos</h1>
      </div>
    </div>
    <SharedWrapper>
      <div class="w-full max-w-2xl mx-auto">
        <LocationsIntro
          service-name="Tree Removal Services in the Poconos"
          description="Expert tree care for the Pocono Mountains region. We understand the unique challenges of mountain properties and provide professional tree removal, trimming, and land management services for residential and commercial clients."
        />
        <LocationsDetails
          service-name="Tree Services in the Poconos"
          :details="[
            'Mountain property tree removal',
            'Scenic view restoration and trimming',
            'Stump grinding on challenging terrain',
            'Land clearing for development',
            'Storm and ice damage removal',
            'Access road and driveway clearing',
            'Experience with mountain properties'
          ]"
        />
        <LocationsCustom header="Pocono Mountain Tree Specialists">
          <p class="text-lg leading-relaxed">
            Add your custom content here for the Poconos.
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

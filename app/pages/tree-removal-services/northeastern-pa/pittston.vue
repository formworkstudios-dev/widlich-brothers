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
      <div class="w-full max-w-3xl mx-auto">
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
          <section class="space-y-4">
            <p class="leading-relaxed">
              Pittston is a city with a mix of older homes, city streets, and small green spaces, where trees add
              charm but can create hazards if not properly maintained. Homeowners often face overgrown yards,
              branches near rooftops, and trees competing for sunlight in close lots. Our team provides careful
              assessment and safe removal designed for Pittston’s urban and suburban environment.
            </p>

            <p>
              Many Pittston properties have mature trees near buildings, fences, and utility lines. Proper tree
              cutting is essential to prevent storm damage, remove dead or diseased trees, and enhance the
              health and appearance of your landscape. We handle everything from hazardous removals to precise pruning.
            </p>

            <p>
              We understand the unique challenges of city and small-town landscapes: roots affecting sidewalks,
              branches overhanging streets or homes, and trees in tight spaces. Our equipment and techniques
              allow us to work safely and efficiently without disrupting your property or neighbors.
            </p>

            <p>
              From full-scale removal to routine trimming, we help Pittston homeowners keep their properties
              safe, accessible, and visually appealing—while maintaining the beauty of the local urban landscape.
            </p>
          </section>

        </LocationsCustom>
      </div>
    </SharedWrapper>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { definePageMeta } from '#imports'

// Note: does not work for dynamic pages, only accepts strings
definePageMeta({
  title: 'Tree Removal Service in Pittston, PA'
})

</script>

<style scoped>
.bg-black\/40 {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

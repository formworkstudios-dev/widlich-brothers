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
        <h1 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">Tree Removal Services in
          Scranton</h1>
      </div>
    </div>
    <SharedWrapper show-cta>
      <div class="w-full max-w-3xl mx-auto">
        <LocationsIntro
          service-name="Tree Removal Services in Scranton, PA"
          description="Trusted tree care professionals serving Scranton and the surrounding communities. We specialize in safe tree removal, expert trimming, and complete property cleanup for homes and businesses throughout the Scranton area."
        />
        <LocationsDetails
          service-name="Tree Services in Scranton"
          :details="[
            'Safe tree removal for any size tree',
            'Professional trimming and pruning',
            'Complete stump grinding',
            '24/7 emergency tree services',
            'Lot clearing and site preparation',
            'Debris removal and cleanup',
            'Fully licensed and insured'
          ]"
        />
        <LocationsCustom header="Expert Tree Care for Scranton">
          <section class="space-y-4">
            <p>
              Scranton neighborhoods feature a mix of historic homes, city streets, and small wooded areas—
              lovely greenery, but often interspersed with tight yards, aging trees, and limited space for equipment.
              Homeowners in the city face challenges like overgrown trees near sidewalks, branches encroaching on roofs,
              and trees competing for sunlight in closely packed lots. Our team provides careful assessment and safe
              removal tailored to urban and suburban settings.
            </p>

            <p>
              Many properties in Scranton are older, with established trees near structures, fences, and power lines.
              Proper tree cutting is essential to prevent damage during storms, manage dead or diseased trees, and
              improve sunlight and airflow for yards and gardens. We handle everything from hazardous tree removal
              to pruning for safety and aesthetics.
            </p>

            <p>
              We understand the demands of maintaining city and suburban landscapes: roots disrupting sidewalks,
              large branches overhanging streets or homes, and trees growing too close to buildings or utility lines.
              Our equipment and techniques are designed for tight spaces and minimal disruption to your property and
              neighbors.
            </p>

            <p>
              From complete removal to regular trimming, we help Scranton homeowners keep their properties safe,
              accessible, and visually appealing—while enhancing the natural beauty of the urban landscape.
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
></script>

<style scoped>
.bg-black\/40 {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

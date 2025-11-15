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
      <div class="w-full max-w-3xl mx-auto">
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
          <section class="space-y-4">
            <p>
              Northeastern Pennsylvania offers a diverse mix of landscapes—from city streets and suburban neighborhoods
              to forested hills and farmland. Trees here can be stunning, but they also present challenges: overgrown
              yards, leaning or dead trees, and branches threatening homes, fences, or power lines. Our team provides
              thorough assessment and safe removal suited to the varied terrain of the region.
            </p>

            <p>
              Whether you live in a bustling town, a quiet suburb, or on a rural property, proper tree cutting protects
              structures, driveways, and neighboring land. We handle storm-damaged trees, remove diseased or dying
              trees, and perform selective pruning to improve sunlight, airflow, and overall landscape health.
            </p>

            <p>
              We understand the challenges of maintaining properties across Northeastern PA: rocky or uneven soil,
              trees growing close to homes or utilities, and tight spaces in urban yards. Our equipment and techniques
              are designed to work safely and efficiently in all settings, minimizing disruption while ensuring
              precision.
            </p>

            <p>
              From complete removals to routine trimming, we help landowners across the region keep their properties
              safe, clean, and visually appealing—while preserving the natural beauty of Northeastern Pennsylvania.
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

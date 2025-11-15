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
      <div class="w-full max-w-3xl mx-auto">
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

          <section class="space-y-4">

            <p>
              Mountain forests in the Poconos are dominated by hemlock, oak, maple, and pine—
              beautiful trees, but often vulnerable to wind damage, heavy snow, invasive pests,
              and shallow rocky soil. Homeowners in the region frequently deal with leaning
              trees, branches threatening rooftops, overcrowded woodlots, and blocked scenic
              views. Our team provides careful assessment and safe removal designed specifically
              for mountain environments.
            </p>

            <p>
              Many Pocono properties sit on steep grades or uneven terrain, making proper tree
              cutting essential for protecting structures, driveways, and neighboring lots.
              Whether you need hazardous trees removed before winter storms, dead pines taken
              down due to beetle infestation, or selective trimming to improve sunlight and
              airflow, we deliver precise work tailored to your landscape.
            </p>

            <p>
              We understand the challenges of maintaining forested mountain homes: fallen limbs
              after ice storms, root systems shifting in rocky ground, and tall trees growing
              too close to cabins or power lines. Our equipment and techniques are designed for
              tight, hard-to-reach areas without damaging the surrounding property.
            </p>

            <p>
              From full-scale clearance to routine health trimming, we help landowners keep
              their Pocono properties safe, clean, and visually open—while preserving the
              natural beauty of the mountains.
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
  title: 'Tree Removal Service in the Poconos'
})

</script>

<style scoped>
.bg-black\/40 {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

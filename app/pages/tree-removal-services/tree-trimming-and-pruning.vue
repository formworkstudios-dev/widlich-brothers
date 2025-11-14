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
        <h1 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">Tree Trimming & Pruning
        </h1>
      </div>
    </div>
    <SharedWrapper
      show-cta
      service-name="Tree Trimming & Pruning"
    >
      <div class="w-full max-w-2xl mx-auto">
        <ServiceIntro
          service-name="Tree Trimming & Pruning"
          description="Health-focused trimming and structural pruning to improve safety, shape, sunlight penetration, and long-term tree vitality."
        />
        <ServiceDetails
          service-name="Tree Trimming & Pruning"
          :details="[
            'Deadwood and hazard limb removal',
            'Canopy thinning & crown raising',
            'Structural & corrective pruning',
            'Storm damage mitigation cuts'
          ]"
        />
        <ServiceArea
          service-name="Tree Trimming & Pruning"
          description="Serving Pittston, Scranton, the Poconos and broader Northeast PA residential and commercial properties."
        />
        <div class="mt-10">
          <ServiceFAQ
            title="Trimming & Pruning FAQs"
            :items="faqItems"
          />
        </div>
        <ServiceOtherServices
          class="mt-12"
          self="trimming-pruning"
        />
      </div>
    </SharedWrapper>
  </div>
</template>

<script
  setup
  lang="ts"
>
// Trimming & pruning page using shared service components
interface FaqItem { label: string; content: string }
const faqItems: FaqItem[] = [
  {
    label: 'How often should I trim my trees?',
    content: 'Most mature trees benefit from trimming every 2–3 years; fast growers or hazard-prone species may need more frequent attention.'
  },
  {
    label: 'Is pruning safe for the tree?',
    content: 'Yes—when done correctly. We follow industry best practices (ANSI A300) to protect tree health.'
  },
  {
    label: 'Do you haul away branches?',
    content: 'All debris is chipped and hauled unless you request mulch left onsite.'
  },
  {
    label: 'Can trimming help with storm prevention?',
    content: 'Proper structural pruning reduces weak branch unions and canopy wind load.'
  },
  {
    label: 'Do you offer emergency service?',
    content: 'Yes, we handle storm damage and hazardous limb removal as priority calls.'
  }
]
</script>

<style scoped>
.bg-black\/40 {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

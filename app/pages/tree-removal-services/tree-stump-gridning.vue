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
        <h1 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">Stump Grinding</h1>
      </div>
    </div>
    <SharedWrapper
      show-cta
      service-name="Stump Grinding"
    >
      <div class="w-full max-w-2xl mx-auto">
        <ServiceIntro
          service-name="Stump Grinding"
          description="Precision stump grinding to remove hazards, improve curb appeal, and prepare ground for replanting or landscaping upgrades."
        />
        <ServiceDetails
          service-name="Stump Grinding"
          :details="[
            'Depth grinding below grade',
            'Surface root mitigation',
            'Clean-up and optional backfill',
            'Multiple stump discounts'
          ]"
        />
        <ServiceArea
          service-name="Stump Grinding"
          description="Available across NEPA: Pittston, Scranton, Poconos and surrounding areas. Contact us for rural property availability."
        />
        <div class="mt-10">
          <ServiceFAQ
            title="Stump Grinding FAQs"
            :items="faqItems"
          />
        </div>
        <ServiceOtherServices
          class="mt-12"
          self="stump-grinding"
        />
      </div>
    </SharedWrapper>
  </div>
</template>

<script
  setup
  lang="ts"
>
// Stump grinding page using shared service components
interface FaqItem { label: string; content: string }
const faqItems: FaqItem[] = [
  {
    label: 'How deep do you grind the stump?',
    content: 'We typically grind 6–12 inches below grade depending on replanting or surface needs.'
  },
  {
    label: 'What about surface roots?',
    content: 'We can grind visible surface roots in the work area upon request.'
  },
  {
    label: 'Do you remove the chips?',
    content: 'Chips can be left to backfill or hauled away—your preference.'
  },
  {
    label: 'Can I replant after grinding?',
    content: 'Yes. After removing chips and adding soil, the area can be replanted or seeded.'
  },
  {
    label: 'Is there a discount for multiple stumps?',
    content: 'Yes, we offer competitive pricing for multiple stumps at the same site.'
  }
]
</script>

<style scoped>
.bg-black\/40 {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

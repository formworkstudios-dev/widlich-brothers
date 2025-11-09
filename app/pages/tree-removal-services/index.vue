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
        <h1 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">Tree Removal Services</h1>
      </div>
    </div>
    <SharedWrapper show-cta>
      <div class="w-full max-w-2xl mx-auto">
        <ServiceIntro
          service-name="Tree Removal Services"
          description="Professional tree removal, trimming, and emergency care across Northeastern PA. Fully insured, safety-first crews, and clean job sites."
        />
        <ServiceDetails
          service-name="Tree Removal Services"
          :details="[
            'Safe dismantling and removal including large/dangerous trees',
            'Brush and debris hauling, site clean-up',
            'Stump grinding available on request',
            'Free estimates and flexible scheduling'
          ]"
        />
        <ServiceArea
          service-name="Tree Removal Services"
          description="We serve Pittston, Scranton, the Poconos, and all of Northeast PA. Call to confirm availability for your address."
        />
        <div class="mt-10">
          <ServiceFAQ
            title="Tree Removal FAQs"
            :items="faqItems"
          />
        </div>
        <ServiceOtherServices
          class="mt-12"
          self="tree-removal"
        />
      </div>
    </SharedWrapper>
  </div>
</template>

<script
  setup
  lang="ts"
>
// Using Service components with props
interface FaqItem { label: string; content: string }
const faqItems: FaqItem[] = [
  {
    label: 'Do you offer free estimates?',
    content: 'Yes. We provide free, no-obligation estimates for all tree removal work.'
  },
  {
    label: 'Are you fully insured?',
    content: 'Yes, Weidlich Brothers Tree Care is fully insured. Proof of insurance is available upon request.'
  },
  {
    label: 'Will you remove all debris?',
    content: 'We chip and haul away brush and limbs and leave the site tidy unless you request otherwise.'
  },
  {
    label: 'Can you grind the stump too?',
    content: 'Absolutely. Stump grinding can be added to any removal and scheduled the same day when possible.'
  },
  {
    label: 'Do you use cranes when needed?',
    content: 'Yes. For large or hazardous trees we use crane-assisted removals to improve safety and efficiency.'
  }
]
</script>

<style scoped>
.bg-black\/40 {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

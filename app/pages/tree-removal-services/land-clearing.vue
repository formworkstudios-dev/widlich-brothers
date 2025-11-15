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
        <h1 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">Land Clearing</h1>
      </div>
    </div>
    <SharedWrapper
      show-cta
      service-name="Land Clearing"
    >
      <div class="w-full max-w-3xl mx-auto">
        <ServiceIntro
          service-name="Land Clearing"
          description="Comprehensive land and lot clearing for construction prep, view restoration, and property expansion. Efficient debris handling and selective removal."
        />
        <ServiceDetails
          service-name="Land Clearing"
          :details="[
            'Selective tree and brush removal',
            'Debris chipping and hauling',
            'Stump grinding options',
            'Erosion-conscious clean-up'
          ]"
        />
        <ServiceArea
          service-name="Land Clearing"
          description="Serving residential lots, commercial sites, and rural acreage throughout Northeast PA including Pittston, Scranton, and the Poconos."
        />
        <div class="mt-10">
          <ServiceFAQ
            title="Land Clearing FAQs"
            :items="faqItems"
          />
        </div>
        <ServiceOtherServices
          class="mt-12"
          self="land-clearing"
        />
      </div>
    </SharedWrapper>
  </div>
</template>

<script
  setup
  lang="ts"
>
// Land clearing page composed of shared service components
interface FaqItem { label: string; content: string }
const faqItems: FaqItem[] = [
  {
    label: 'Do you clear lots for new construction?',
    content: 'Yes. We prepare residential and commercial lots by removing trees, brush, and grinding stumps.'
  },
  {
    label: 'Can you do selective clearing?',
    content: 'Absolutely. We can preserve desirable trees while removing overgrowth and unwanted vegetation.'
  },
  {
    label: 'What happens to the debris?',
    content: 'Brush is chipped, logs can be hauled or left per your request, and the site is raked clean.'
  },
  {
    label: 'Do you handle erosion concerns?',
    content: 'We avoid unnecessary disturbance and can leave ground cover or chips to help stabilize exposed soil.'
  },
  {
    label: 'Is stump grinding included?',
    content: 'It can be added. We offer grinding for all stumps created during clearing.'
  }
]
</script>

<style scoped>
.bg-black\/40 {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

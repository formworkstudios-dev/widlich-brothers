<script
  setup
  lang="ts"
>
const faqItems = [
  {
    label: 'What is your minimum service charge?',
    content: 'Our minimum charge depends on the scope and location of the job. For single tree trimming or small jobs, please contact us for a quick quote.'
  },
  {
    label: 'I only need to trim one very tall tree of dead branches. Can you help?',
    content: 'Absolutely! We specialize in trimming and removing dead branches from tall trees. Contact us for a free estimate.'
  },
  {
    label: 'Are you fully insured?',
    content: 'Yes, Weidlich Brothers Tree Care is fully insured for your peace of mind. We can provide proof of insurance upon request.'
  },
  {
    label: 'Do you offer free estimates?',
    content: 'Yes, we offer free, no-obligation estimates for all tree care and removal services.'
  },
  {
    label: 'What areas do you serve?',
    content: 'We serve Pittston, Scranton, the Poconos, and all of Northeast PA.'
  },
  {
    label: 'How soon can you schedule my job?',
    content: 'Scheduling depends on the season and current workload. Contact us and we’ll do our best to accommodate your preferred timing.'
  },
  {
    label: 'Do you remove all debris after the job?',
    content: 'Yes, we clean up and haul away all debris unless you request otherwise.'
  }
]
</script>

<template>
  <UContainer class="flex justify-center">
    <UCard
      class="max-w-2xl w-full rounded-none bg-transparent border border-amber-200 dark:border-amber-800 bg-amber-50"
    >
      <template #header>
        <h2 class="text-3xl font-bold mb-4 text-amber-900">Frequently Asked Questions</h2>
      </template>
      <UAccordion
        :items="faqItems"
        class=""
      />
    </UCard>
  </UContainer>
</template>



<style scoped></style>

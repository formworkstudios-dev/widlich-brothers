<script
  setup
  lang="ts"
>
interface Props {
  serviceName: string
  description: string
}
const props = defineProps<Props>()
</script>

<template>
  <section class="mb-10">
    <h2 class="text-3xl font-bold mb-4 text-amber-900">{{ props.serviceName }}</h2>
    <p class="text-lg leading-relaxed text-gray-700">{{ props.description }}</p>
    <UButton
      to="tel:+15707033963"
      size="md"
      color="primary"
      class="mt-4 font-semibold w-full md:w-auto"
      aria-label="Call 570-703-3963"
    >
      <span class="w-full text-center">Call Now 570-703-3963</span>
    </UButton>
  </section>
</template>

<style scoped></style>

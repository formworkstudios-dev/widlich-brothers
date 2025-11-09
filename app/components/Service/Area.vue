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
  <section class="mb-12">
    <h3 class="text-2xl font-semibold mb-3 text-amber-800">Where We Offer {{ props.serviceName }}</h3>
    <p class="text-base text-gray-700">{{ props.description }}</p>
  </section>
</template>

<style scoped></style>

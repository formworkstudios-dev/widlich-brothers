<script
  setup
  lang="ts"
>
interface Props {
  serviceName: string
  details: string[]
}
const props = defineProps<Props>()
</script>

<template>
  <section class="mb-16">
    <h3 class="text-2xl font-semibold mb-4 text-amber-800">What’s included in {{ props.serviceName }}</h3>
    <ul class="space-y-2 text-gray-700">
      <SharedCheck
        v-for="(item, idx) in props.details"
        :key="idx"
        :label="item"
      />
    </ul>
  </section>
</template>

<style scoped></style>

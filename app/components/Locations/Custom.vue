<script
  setup
  lang="ts"
>
interface Props {
  header: string
}
const props = defineProps<Props>()
</script>

<template>
  <section class="pt-6 mb-4">
    <h3 class="text-2xl font-semibold mb-4 text-amber-800">{{ props.header }}</h3>
    <div class="text-gray-700">
      <slot />
    </div>
  </section>
</template>

<style scoped></style>

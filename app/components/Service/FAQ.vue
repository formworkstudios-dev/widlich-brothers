<script
  setup
  lang="ts"
>
interface FaqItem {
  label: string
  content: string
}

const props = withDefaults(
  defineProps<{
    items: FaqItem[]
    title?: string
  }>(),
  {
    title: 'Frequently Asked Questions'
  }
)
</script>

<template>
  <div class="flex justify-center accordion ">
    <UCard class="max-w-3xl w-full rounded-none">
      <template #header>
        <h2 class="text-3xl font-bold mb-4 text-amber-900">{{ props.title }}</h2>
      </template>
      <UAccordion
        :items="props.items"
        class=""
      />
    </UCard>
  </div>
</template>

<style scoped></style>

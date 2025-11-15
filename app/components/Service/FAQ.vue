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
  <div class="flex justify-center accordion w-full">
    <UCard
      class="w-full rounded-none bg-transparent border border-amber-200 dark:border-amber-800"
      :ui="{
        root: 'overflow-hidden bg-amber-50 dark:bg-amber-950',
        header: 'p-0 bg-amber-100 dark:bg-amber-900 border-b border-amber-200 dark:border-amber-800',
        body: 'p-0 bg-transparent'
      }"
    >
      <template #header>
        <h2 class="text-3xl font-bold text-amber-900 dark:text-amber-100 px-4 sm:px-6 py-4">{{ props.title }}</h2>
      </template>
      <UAccordion
        :items="props.items"
        :ui="{
          item: 'bg-transparent',
          trigger: 'px-4 sm:px-6 py-3.5',
          body: 'px-4 sm:px-6 pb-3.5'
        }"
      />
    </UCard>
  </div>
</template>

<style scoped></style>

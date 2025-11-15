<script
  setup
  lang="ts"
>
interface Props {
  label: string
  icon?: string
}
const props = withDefaults(defineProps<Props>(), {
  icon: 'i-mdi-check'
})
</script>

<template>
  <li class="flex items-center gap-3">
    <span
      class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300"
    >
      <UIcon
        :name="props.icon"
        class="text-sm"
      />
    </span>
    <span class=" dark:text-amber-100">{{ props.label }}</span>
  </li>

</template>

<style scoped></style>

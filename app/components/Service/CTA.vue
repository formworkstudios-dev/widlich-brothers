<script
  setup
  lang="ts"
>
interface Props {
  serviceName?: string
  imageUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  serviceName: 'Tree Care',
  imageUrl: '/tree-trunk-hero-weidlich-brothers.webp'
})
</script>

<template>
  <div class="flex justify-center pt-8">
    <div
      class="max-w-4xl w-full flex flex-col-reverse md:flex-row items-stretch gap-0 rounded-none p-0 border border-amber-200 dark:border-amber-800 bg-transparent overflow-hidden"
    >
      <div class="flex flex-col justify-center items-start flex-1 p-6 md:p-10 bg-amber-50">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-amber-900 dark:text-white">Ready for Expert {{
          props.serviceName }}?</h2>
        <p class="text-base md:text-lg mb-6 text-gray-700 dark:text-gray-200">
          Contact Weidlich Brothers today for an estimate on {{ props.serviceName }} services. Our team is fully insured
          and
          ready to help across Northeast PA.
        </p>
        <UButton
          size="xl"
          color="primary"
          to="tel:+15707033963"
          class="font-semibold w-full md:w-auto text-center md:text-left"
        >
          <span class="w-full">Call Now 570-703-3963</span>
        </UButton>
      </div>
      <div class="flex-1 flex p-0 min-h-[180px] md:min-h-0  justify-start">
        <img
          :src="props.imageUrl"
          :alt="`${props.serviceName} CTA`"
          class="w-full md:h-full object-fill"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<script
  setup
  lang="ts"
></script>

<script
  setup
  lang="ts"
>
import { computed } from '#imports'

const props = withDefaults(defineProps<{
  fluid?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  max?: number | string
  useContainer?: boolean
  containerClass?: string
  showCta?: boolean
  ctaClass?: string
  serviceName?: string
}>(), {
  fluid: false,
  padding: 'lg',
  max: 1440,
  useContainer: true,
  containerClass: 'flex-1 flex flex-col justify-center',
  showCta: false,
  ctaClass: 'mt-12',
  serviceName: 'Tree Care'
})

const padClass = computed(() => {
  switch (props.padding) {
    case 'none':
      return 'py-0 px-0'
    case 'sm':
      return 'py-8 px-4 md:px-6'
    case 'md':
      return 'py-12 px-4 md:px-8 lg:px-12'
    case 'lg':
    default:
      return 'py-20 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32'
  }
})

const wrapperStyle = computed(() => {
  if (props.fluid) return {}
  const max = typeof props.max === 'number' ? `${props.max}px` : (props.max || '1440px')
  return { maxWidth: max as string, marginLeft: 'auto', marginRight: 'auto' }
})
</script>

<template>
  <div
    :class="padClass"
    :style="wrapperStyle"
  >
    <UContainer
      v-if="props.useContainer"
      :class="props.containerClass"
      class="max-w-2xl mx-auto"
    >
      <slot />
      <ServiceCTA :service-name="props.serviceName" />
    </UContainer>
    <template v-else>
      <slot />
      <ServiceCTA :service-name="props.serviceName" />
    </template>
  </div>
</template>

<style scoped></style>

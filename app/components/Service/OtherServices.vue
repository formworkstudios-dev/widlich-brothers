<script
  setup
  lang="ts"
>
export type ServiceAlias = 'tree-removal' | 'land-clearing' | 'stump-grinding' | 'trimming-pruning'

interface ServiceItem {
  alias: ServiceAlias
  name: string
  description: string
  path: string
}

const allServices: ServiceItem[] = [
  {
    alias: 'tree-removal',
    name: 'Tree Removal',
    description: 'Safe dismantling of hazardous, dead, or unwanted trees with full debris haul-away.',
    path: '/tree-removal-services'
  },
  {
    alias: 'land-clearing',
    name: 'Land Clearing',
    description: 'Selective or full clearing for construction prep, access paths, or view restoration.',
    path: '/tree-removal-services/land-clearing'
  },
  {
    alias: 'stump-grinding',
    name: 'Stump Grinding',
    description: 'Below-grade grinding, surface root mitigation, and site clean-up for replanting.',
    path: '/tree-removal-services/tree-stump-gridning'
  },
  {
    alias: 'trimming-pruning',
    name: 'Tree Trimming & Pruning',
    description: 'Health-focused pruning, deadwood removal, and structural shaping for longevity & safety.',
    path: '/tree-removal-services/tree-trimming-and-pruning'
  }
]

const props = defineProps<{ self: ServiceAlias }>()

const otherServices = computed(() => allServices.filter(s => s.alias !== props.self))
</script>

<template>
  <section class="mt-12 mb-6">
    <h3 class="text-2xl font-semibold !mb-6 text-amber-900 dark:text-amber-100">Other Services We Offer</h3>
    <ul class="space-y-6">
      <li
        v-for="svc in otherServices"
        :key="svc.alias"
        class="flex flex-col"
      >
        <h4 class="text-amber-900 dark:text-amber-100 text-base md:text-lg font-semibold">
          {{ svc.name }}
        </h4>
        <p class="mt-1 text-sm md:text-base dark:text-amber-100/90 leading-relaxed">{{ svc.description }}</p>
        <NuxtLink
          :to="svc.path"
          class="mt-2 inline-flex items-center gap-2 text-amber-800 dark:text-amber-200 text-sm font-medium hover:underline group w-fit"
        >
          <span>Learn more</span>
          <UIcon
            name="i-mdi-chevron-double-right"
            class="transition-transform duration-300 group-hover:translate-x-1"
          />
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>

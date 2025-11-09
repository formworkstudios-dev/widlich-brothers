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
  <section class="mt-12">
    <h3 class="text-2xl font-semibold mb-6 text-amber-900 dark:text-amber-100">Other Services</h3>
    <ul class="space-y-5">
      <li
        v-for="svc in otherServices"
        :key="svc.alias"
        class="flex flex-col"
      >
        <NuxtLink
          :to="svc.path"
          class="text-amber-800 dark:text-amber-200 text-base md:text-lg font-semibold hover:underline"
        >
          {{ svc.name }}
        </NuxtLink>
        <p class="mt-1 text-sm md:text-base text-amber-900/85 dark:text-amber-100/90 leading-relaxed">{{ svc.description
          }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>

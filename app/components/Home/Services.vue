<script
  setup
  lang="ts"
>
const services = [
  {
    title: "Tree Removal",
    path: "/tree-removal-services",
    text: "Safe and efficient removal of unwanted or hazardous trees from your property.",
    image: "/webp/tree-removal-and-cutting-northeastern-pa.webp",
    features: [
      "Hazardous tree takedown",
      "Crane-assisted removals",
      "Brush and debris haul-away",
    ],
  },
  {
    title: "Stump Grinding",
    path: "/tree-removal-services/tree-stump-gridning",
    text: "Precision stump grinding to clear your yard and prepare areas for new landscaping.",
    image: "/webp/tree-removal-poconos.webp",
    features: [
      "Deep grind for replanting",
      "Surface root removal",
      "Backfill and grade",
    ],
  },
  {
    title: "Trimming & Pruning",
    path: "/tree-removal-services/tree-trimming-and-pruning",
    text: "Professional pruning to improve tree health, safety, and curb appeal.",
    image: "/webp/rope-assisted-tree-removal.webp",
    features: [
      "Crown thinning & shaping",
      "Deadwood removal",
      "Clearance from roofs & lines",
    ],
  },
  {
    title: "Land Clearing",
    path: "/tree-removal-services/land-clearing",
    text: "Full-site brush and tree clearing for construction, landscaping, and access.",
    image: "/webp/joseph-weidlich-tree-removal.webp",
    features: [
      "Lot & trail clearing",
      "Brush mowing & chipping",
      "Selective clearing available",
    ],
  }
]
</script>

<template>
  <div class=" bg-amber-50/10 dark:bg-amber-950 dark:border-amber-900 py-32">
    <UContainer>
      <div>
        <h2 class="text-3xl font-bold text-center text-amber-900 dark:text-amber-100">Our Services</h2>
        <div class="h-8"></div>
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[350px]">
          <article
            v-for="service in services"
            :key="service.title"
            class="border border-amber-200 dark:border-amber-800 bg-transparent overflow-hidden"
          >
            <NuxtImg
              :src="service.image"
              :alt="service.title + ' image'"
              class="w-full h-40 md:h-48 object-cover"
            />
            <div class="p-5 md:p-6">
              <h3 class="text-lg md:text-xl font-semibold text-amber-900 dark:text-amber-100">{{ service.title }}</h3>
              <p class="mt-2 text-sm md:text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">{{
                service.text }}</p>
              <ul
                v-if="service.features?.length"
                class="mt-4 space-y-2 text-sm md:text-[0.95rem]"
              >
                <SharedCheck
                  v-for="(feat, i) in service.features"
                  :key="i"
                  :label="feat"
                />
              </ul>
              <div class="mt-5">
                <NuxtLink
                  :to="service.path"
                  class="inline-flex items-center gap-2 text-amber-800 dark:text-amber-200 text-sm font-medium hover:underline"
                >
                  <span>Learn more</span>
                  <UIcon name="i-mdi-chevron-double-right" />
                </NuxtLink>
              </div>
            </div>
          </article>
        </section>

      </div>
    </UContainer>
  </div>
</template>

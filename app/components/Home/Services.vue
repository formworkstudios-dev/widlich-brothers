<script
  setup
  lang="ts"
>
const services = [
  {
    title: "Tree Removal",
    text: "Safe and efficient removal of unwanted or hazardous trees from your property."
  },
  {
    title: "Tree Trimming",
    text: "Professional trimming to keep your trees healthy and your landscape looking great."
  },
  {
    title: "Emergency Service",
    text: "Rapid response for storm damage or urgent tree care needs in Pittston and nearby areas."
  }
]
</script>

<template>
  <div class="border-y bg-amber-100 border-amber-300 dark:bg-amber-950 dark:border-amber-900">
    <UContainer>
      <div class="py-16">
        <h2 class="text-3xl font-bold text-center text-amber-900 dark:text-amber-100">Our Services</h2>
        <div class="h-8"></div>
        <section class="flex flex-col md:flex-row gap-12 min-h-[350px]">
          <div
            v-for="service in services"
            :key="service.title"
            class="flex-1 flex flex-col items-center bg-amber-50 border border-amber-300 w-full md:w-1/3 dark:bg-amber-900 dark:border-amber-800"
          >
            <img
              src="/tree-removal-pittson.webp"
              alt="Service image"
              class="w-full h-40 object-cover mb-4 rounded-none"
              style="border-radius:0;"
            />
            <div class="p-4 mb-4 px-6">
              <h3 class="text-xl font-bold mb-2 text-center text-amber-900 dark:text-amber-100">{{ service.title }}</h3>
              <p class="text-base text-center text-amber-800 dark:text-amber-200">{{ service.text }}</p>
            </div>
          </div>
        </section>
      </div>
    </UContainer>
  </div>
</template>

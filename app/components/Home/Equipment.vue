<script
  setup
  lang="ts"
>
const images = [
  '/webp/crane-tree-removal-NEPA.webp',
  '/webp/rope-assisted-tree-removal.webp',
  '/webp/tree-cutting-scranton-pittston-crane.webp',
  '/webp/tree-removal-and-cutting-northeastern-pa.webp',
  '/webp/tree-removal-poconos.webp'
]
</script>

<template>
  <div class="w-full">
    <div class="hidden md:flex flex-row gap-4">
      <div
        v-for="img in images"
        :key="img"
        class="flex-1 flex"
      >
        <NuxtImg
          :src="img"
          alt="Equipment photo"
          class="object-cover w-full h-[22vw] min-h-[160px] max-h-[320px]"
        />
      </div>
    </div>
    <div class="md:hidden grid grid-cols-2 gap-3 px-4">
      <div
        v-for="img in images.slice(0, 4)"
        :key="img"
        class="w-full flex"
      >
        <NuxtImg
          :src="img"
          alt="Equipment photo"
          class="object-cover w-full h-40 min-h-[120px] max-h-[200px]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

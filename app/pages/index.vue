<script
  setup
  lang="ts"
>

import { definePageMeta, ref, onMounted, onBeforeUnmount } from '#imports'

// Note: does not work for dynamic pages, only accepts strings
definePageMeta({
  title: '#1 Tree Service in Northeastern PA'
})

const sectionEl = ref<HTMLElement | null>(null)
const parallaxY = ref(0)
const sectionTop = ref(0)
const sectionHeight = ref(0)

let ticking = false
let mq: MediaQueryList | null = null
let reduceMotion = false

const measure = () => {
  if (!sectionEl.value) return
  const rect = sectionEl.value.getBoundingClientRect()
  sectionTop.value = rect.top + window.scrollY
  sectionHeight.value = rect.height
}

const handleScroll = () => {
  if (!sectionEl.value) return
  if (reduceMotion) {
    parallaxY.value = 0
    ticking = false
    return
  }
  const relative = window.scrollY - sectionTop.value
  // Adjust multiplier for stronger/weaker parallax
  parallaxY.value = Math.max(0, relative) * 0.3
  ticking = false
}

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(handleScroll)
}

const onMqChange = (e: MediaQueryListEvent) => {
  reduceMotion = e.matches
}

onMounted(() => {
  mq = window.matchMedia?.('(prefers-reduced-motion: reduce)') || null
  if (mq) {
    reduceMotion = mq.matches
    mq.addEventListener('change', onMqChange)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', measure, { passive: true } as AddEventListenerOptions)
  measure()
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', measure as any)
  mq?.removeEventListener('change', onMqChange)
})

</script>

<template>
  <HomeHero />
  <div
    id="content-wrapper"
    class="flex flex-col pt-20 md:pt-32"
  >
    <HomeAbout />
    <HomeEquipment />
    <HomeServices />
    <HomeContact />
    <section
      id="bottom-part"
      ref="sectionEl"
      class="relative overflow-hidden"
    >
      <!-- Parallax background layer -->
      <div
        class="absolute left-0 right-0 top-[-10%] h-[120%] -z-10 bg-cover bg-center will-change-transform pointer-events-none"
        aria-hidden="true"
        :style="{
          backgroundImage: 'url(\'/tree-trunk-hero-weidlich-brothers.jpg\')',
          transform: `translate3d(0, ${parallaxY}px, 0)`
        }"
      />
      <HomeCTA />
      <HomeFAQ />
    </section>
  </div>
</template>

<style scoped></style>

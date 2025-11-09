<script
  setup
  lang="ts"
>
import { onMounted, ref } from 'vue'
// Leaflet types are optional; fall back to any if @types/leaflet not installed
// import type { Map } from 'leaflet'
type Map = any

const mapContainer = ref<HTMLElement>()
let map: Map | null = null

// Structured Data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Weidlich Brothers Tree Care",
        "description": "Professional tree care and removal services in Pittston, PA",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "149 Johnson St",
          "addressLocality": "Pittston",
          "addressRegion": "PA",
          "postalCode": "18640",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.3252,
          "longitude": -75.7890
        },
        "telephone": "+15707033963",
        "email": "info@weidlichbrotherstreecare.com",
        "url": "https://weidlichbrotherstreecare.com",
        "openingHours": [
          "Mo-Fr 08:00-17:00",
          "Sa 09:00-15:00"
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 41.4687,
            "longitude": -75.6021
          },
          "geoRadius": "50000"
        },
        "priceRange": "$$",
        "areaServed": [
          "Pittston, PA",
          "Olyphant, PA",
          "Scranton, PA",
          "Luzerne County, PA"
        ]
      })
    }
  ]
})

onMounted(async () => {
  // Dynamic import; TS ignore to suppress missing types if @types/leaflet not installed
  // @ts-ignore
  const L = await import('leaflet')
  map = L.map(mapContainer.value!, {
    attributionControl: false
  }).setView([41.3252, -75.7890], 12)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // attribution intentionally removed
  }).addTo(map)

  // Fetch and add all counties from counties.geojson
  const response = await fetch('/counties.geojson')
  const countiesGeojson = await response.json()
  const countiesLayer = L.geoJSON(countiesGeojson as any, {
    style: {
      color: '#b45309', // amber-700
      fillColor: '#fbbf24', // amber-400
      fillOpacity: 0.2,
      weight: 2,
      opacity: 0.8
    },
    onEachFeature: function (feature: any, layer: any) {
      if (feature.properties && (feature.properties.NAME || feature.properties.COUNTY_NAME)) {
        const name = feature.properties.NAME || feature.properties.COUNTY_NAME
        layer.bindPopup(`<strong>${name} County</strong>`)
      }
    }
  }).addTo(map)

  // Fit map to all counties
  map.fitBounds(countiesLayer.getBounds(), { padding: [20, 20] })

  const businessMarker = L.marker([41.3252, -75.7890], {
    icon: L.divIcon({
      html: '<div style="background: #ef4444; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
      className: 'business-marker',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    })
  }).addTo(map)
  businessMarker.bindPopup(`
    <div class="text-center">
      <strong>Weidlich Brothers Tree Care</strong><br>
      149 Johnson St<br>
      Pittston, PA 18640<br>
      <small>📍 Our Office Location</small>
    </div>
  `)
})
</script>

<template>
  <div
    class="border-y py-6 md:py-16 border-amber-200 bg-amber-100/30 text-amber-900 dark:bg-amber-950 dark:text-amber-100 dark:border-amber-900"
  >
    <UContainer class="flex flex-col md:flex-row items-start justify-between gap-8 py-12 px-2 md:px-12">
      <div class="flex-1 self-start">
        <h3 class="text-amber-900 dark:text-amber-100 text-2xl font-bold mb-4">Contact Us</h3>
        <div class="space-y-3 mb-8">
          <div class="flex items-center gap-3">
            <UIcon
              name="i-mdi-phone"
              class="text-amber-700 dark:text-amber-200"
              size="20"
            />
            <a
              href="tel:+15707033963"
              class="text-lg text-toned hover:underline"
            >1-570-7033963</a>
          </div>
          <div class="flex items-center gap-3">
            <UIcon
              name="i-mdi-email"
              class="text-amber-700 dark:text-amber-200"
              size="20"
            />
            <a
              href="mailto:info@weidlichbrotherstreecare.com"
              class="text-lg text-toned hover:underline"
            >info@weidlichbrotherstreecare.com</a>
          </div>
          <div class="flex items-center gap-3">
            <UIcon
              name="i-mdi-map-marker"
              class="text-amber-700 dark:text-amber-200"
              size="20"
            />
            <p class="text-lg text-toned">149 Johnson St, Pittston, PA 18640</p>
          </div>
        </div>
        <h3 class="text-amber-900 dark:text-amber-100 text-2xl font-bold mb-4">Service Area</h3>
        <p class="text-lg text-toned mb-4">
          Professional tree care and removal services throughout Pittston, Poconos, Scranton, Wilkes-Barre, and
          surrounding communities in Luzerne and Lackawanna Counties.
        </p>
      </div>
      <div class="flex-1 flex flex-col items-center w-full md:w-auto">
        <div
          ref="mapContainer"
          class="w-full h-64 md:h-80 lg:h-96 bg-amber-50 border border-amber-200 dark:bg-amber-900 dark:border-amber-800"
          style="min-height: 220px;"
        />
        <p class="!text-sm text-amber-800 mt-2 text-center dark:text-amber-200">
          Out of our service area? <NuxtLink
            to="/contact"
            class="underline text-primary"
          >Contact us</NuxtLink>
        </p>
      </div>
    </UContainer>
  </div>
</template>

<style>
@import 'leaflet/dist/leaflet.css';

.leaflet-control-attribution img,
.leaflet-control-attribution a[href*="openstreetmap.org"] img,
.leaflet-control-attribution a img {
  display: none !important;
}
</style>

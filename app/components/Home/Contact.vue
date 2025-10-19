<script
  setup
  lang="ts"
>
import { onMounted, ref } from 'vue'
import type { Map } from 'leaflet'

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
          "streetAddress": "841 Spruce Street",
          "addressLocality": "Olyphant",
          "addressRegion": "PA",
          "postalCode": "18447",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.4687,
          "longitude": -75.6021
        },
        "telephone": "+15705551234",
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
  const L = await import('leaflet')
  map = L.map(mapContainer.value!).setView([41.45, -75.6], 10)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)
  const serviceAreaCoords = [
    [41.65, -75.85],
    [41.65, -75.35],
    [41.25, -75.25],
    [41.15, -75.75],
    [41.35, -75.95],
    [41.65, -75.85]
  ]
  const serviceArea = L.polygon(serviceAreaCoords, {
    color: '#b45309', // amber-700
    fillColor: '#fbbf24', // amber-400
    fillOpacity: 0.2,
    weight: 2,
    opacity: 0.8
  }).addTo(map)
  const businessMarker = L.marker([41.4687, -75.6021], {
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
      841 Spruce Street<br>
      Olyphant, PA 18447<br>
      <small>📍 Our Office Location</small>
    </div>
  `)
  serviceArea.bindPopup(`
    <div class="text-center">
      <strong>🌳 Service Area</strong><br>
      <small>Luzerne & Lackawanna Counties</small><br>
      <em>Pittston • Olyphant • Scranton<br>
      Wilkes-Barre & More</em>
    </div>
  `)
  map.fitBounds(serviceArea.getBounds(), { padding: [20, 20] })
})
</script>

<template>
  <div class="py-16 bg-amber-100 text-amber-900 border-y border-amber-300 dark:bg-amber-950 dark:text-amber-100 dark:border-amber-900">
    <UContainer class="flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 md:px-12">
      <div class="flex-1">
        <h3 class="text-amber-900 dark:text-amber-100 text-2xl font-bold mb-4">Contact Us</h3>
        <div class="space-y-3 mb-8">
          <div class="flex items-center gap-3">
            <UIcon name="i-mdi-phone" class="text-amber-700 dark:text-amber-200" size="20" />
            <a href="tel:+15705551234" class="text-amber-700 hover:underline dark:text-amber-200">(570) 555-1234</a>
          </div>
          <div class="flex items-center gap-3">
            <UIcon name="i-mdi-email" class="text-amber-700 dark:text-amber-200" size="20" />
            <a href="mailto:info@weidlichbrotherstreecare.com" class="text-amber-700 hover:underline dark:text-amber-200">info@weidlichbrotherstreecare.com</a>
          </div>
          <div class="flex items-center gap-3">
            <UIcon name="i-mdi-map-marker" class="text-amber-700 dark:text-amber-200" size="20" />
            <p class="text-amber-800 dark:text-amber-200">841 Spruce Street, Olyphant, PA 18447</p>
          </div>
        </div>
        <h3 class="text-amber-900 dark:text-amber-100 text-2xl font-bold mb-4">Service Area</h3>
        <p class="text-amber-800 mb-4 dark:text-amber-200">
          Professional tree care and removal services throughout Pittston, Olyphant, Scranton, Wilkes-Barre, and
          surrounding communities in Luzerne and Lackawanna Counties.
        </p>
      </div>
      <div class="flex-1 flex flex-col items-center">
        <div
          ref="mapContainer"
          class="w-full h-80 lg:h-96 bg-amber-50 border border-amber-300 dark:bg-amber-900 dark:border-amber-800"
          style="min-height: 320px;"
        />
        <p class="!text-sm text-amber-800 mt-2 text-center dark:text-amber-200">
          Brown area shows our service coverage • Red dot is our office location
        </p>
      </div>
    </UContainer>
  </div>
</template>

<style>
@import 'leaflet/dist/leaflet.css';
</style>

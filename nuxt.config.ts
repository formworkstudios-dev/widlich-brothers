import { defineLocalBusiness } from "nuxt-schema-org/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/seo",
    "nuxt-resend",
  ],

  colorMode: {
    preference: "light",
  },
  ui: {
    colorMode: false,
  },

  site: {
    url: "https://weidlichbrotherstreecare.com",
    name: "Weidlich Brothers Tree Care",
    description:
      "Weidlich Brothers Tree Care LLC, a family-owned contractor in Northeastern PA, delivers top-quality tree care services with expert craftsmanship, reliable service, and a commitment to exceeding client expectations.",
    defaultLocale: "en",
  },
  schemaOrg: {
    identity: defineLocalBusiness({
      "@type": "HomeAndConstructionBusiness",
      name: "Weidlich Brothers Tree Care",
      description:
        "Professional tree care and removal services in Pittston, PA. Family-owned, specializing in safe tree removal, trimming, and property care.",
      url: "https://weidlichbrotherstreecare.com",
      image:
        "https://weidlichbrotherstreecare.com/tree-trunk-hero-weidlich-brothers.webp",
      telephone: "+1-570-555-1234",
      address: {
        streetAddress: "149 Johnson St",
        addressLocality: "Pittston",
        addressRegion: "PA",
        postalCode: "18640",
        addressCountry: "US",
      },
    }),
  },
});

export default defineAppConfig({
  siteName: "Weidlich Brothers Tree Care",
  ui: {
    button: {
      slots: {
        base: "rounded-none cursor-pointer font-bold border-2",
      },
    },
    colors: {
      primary: "green",
      neutral: "stone",
    },
    components: {
      UButton: {
        rounded: "none",
      },
    },
  },
});

export default defineAppConfig({
  siteName: "Weidlich Brothers Tree Care",
  siteLogo: "/tree.png",
  ui: {
    card: {
      variants: {
        variant: {
          outline: {
            root: "bg-default ring ring-amber-100 divide-y divide-amber-100",
          },
        },
      },
    },

    accordion: {
      slots: {
        item: "border-b border-amber-100 last:border-b-0 leading-loose",
        trigger: "cursor-pointer",
        body: "leading-relaxed",
      },
    },
    button: {
      slots: {
        base: "rounded-none cursor-pointer font-bold border-2",
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "outline",
          class:
            "ring-1 ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        },
        {
          color: "secondary",
          variant: "outline",
          class:
            "ring-1 ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
        },
        {
          color: "success",
          variant: "outline",
          class:
            "ring-1 ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-success",
        },
        {
          color: "info",
          variant: "outline",
          class:
            "ring-1 ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-info",
        },
        {
          color: "warning",
          variant: "outline",
          class:
            "ring-1 ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-warning",
        },
        {
          color: "error",
          variant: "outline",
          class:
            "ring-1 ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-error",
        },
        {
          color: "neutral",
          variant: "outline",
          class:
            "ring-1 ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted",
        },
      ],
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

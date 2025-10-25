// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MediaUI Docs",
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/KcU9BnEKEK",
        },
      ],
      sidebar: [
        {
          label: "Quickstart",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Installation", slug: "get-started" },
            { label: "Supported APIs", slug: "apis" },
          ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});

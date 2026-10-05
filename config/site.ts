export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Chitepo School of Ideology",
  description:
    "Chitepo School of Ideology — Decolonising the Mind. To produce competent patriotic cadres with the correct Party Ideological orientation and necessary skills to meet the dynamic needs of the Zimbabwean nation.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    { label: "Curriculum", id: "curriculum" },
    { label: "Apply", id: "apply" },
    { label: "Student Portal", id: "portal" },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

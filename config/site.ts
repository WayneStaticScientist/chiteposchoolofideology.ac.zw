export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Chitepo School of Ideology",
  description:
    "The Herbert Chitepo School of Ideology is more than an educational institution; it is the ideological heartbeat of Zimbabwe. Named after the visionary lawyer and revolutionary leader Herbert Wiltshire Pfumaindini Chitepo, we serve as a forge for patriotic consciousness.",
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

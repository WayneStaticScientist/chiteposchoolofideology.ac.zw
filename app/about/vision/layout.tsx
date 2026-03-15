import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Vision",
  description: `Our vision goes beyond the borders of Zimbabwe. We strive to
                  become the premier Pan-African center of excellence for
                  ideological training, shaping the minds of future African
                  leaders through home-grown philosophy and strategic
                  innovation.`,
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Fragment>{children}</Fragment>;
}

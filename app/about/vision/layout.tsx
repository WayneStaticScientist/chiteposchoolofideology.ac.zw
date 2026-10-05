import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "To be the hub of intellectual Party Ideological Excellence in the Economic Development of Zimbabwe as a sovereign state and prepare participants to lead future social and economic development efforts both in the Party and Government.",
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

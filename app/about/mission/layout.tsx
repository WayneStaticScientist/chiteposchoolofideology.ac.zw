import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Mission",
  description: `We exist to cultivate a patriotic mindset, define our national
              interest, and equip Zimbabweans with the ideological tools for
              total economic sovereignty`,
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

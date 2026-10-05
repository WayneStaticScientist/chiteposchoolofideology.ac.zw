import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Values",
  description:
    "Patriotism, Professionalism, Gender Sensitivity, Integrity, and Team Work — the core values of the Chitepo School of Ideology.",
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

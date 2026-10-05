import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "To produce competent patriotic cadres with the correct Party Ideological orientation and necessary skills to meet the dynamic needs of the Zimbabwean nation.",
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

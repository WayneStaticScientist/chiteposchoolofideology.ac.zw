import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Values",
  description: `We commit to live these values daily, ensuring that our conduct
                reflects the honor of those who fought for our liberation and
                the hopes of those who will inherit our future.`,
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

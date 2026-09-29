import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itz Fizz — Good times, in motion",
  description:
    "A little more fizz. A lot more feel-good. Scroll through the Itz Fizz story.",
  applicationName: "Itz Fizz",
  openGraph: {
    title: "Itz Fizz — Good times, in motion",
    description: "A little more fizz. A lot more feel-good.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#141510",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

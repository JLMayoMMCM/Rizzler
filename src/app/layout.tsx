import type { Metadata } from "next";
import { Playfair_Display, Lora, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const serif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Shaping of a Hero · José Rizal's Character Development",
  description:
    "An interactive essay on the biological, environmental, and lived forces that shaped José Rizal into the Philippines' foremost national hero — with IEEE-cited sources.",
  authors: [{ name: "Interactive Essay" }],
  keywords: ["José Rizal", "Philippine history", "national hero", "character development", "Noli Me Tangere"],
};

// Set the theme before paint to avoid a flash of the wrong colours.
const themeInit = `
(function(){
  try {
    var t = localStorage.getItem('rizal-theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${display.variable} ${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}

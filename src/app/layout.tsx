import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StitchCraft Digitizing | High-Quality Embroidery Digitizing Services",
    template: "%s | StitchCraft Digitizing",
  },
  description:
    "Professional embroidery digitizing for logos, caps, 3D puff, jacket backs, and custom designs with fast turnaround and production-ready files.",
  keywords: [
    "embroidery digitizing",
    "logo digitizing",
    "cap digitizing",
    "3D puff digitizing",
    "jacket back digitizing",
    "embroidery files",
  ],
  openGraph: {
    title: "StitchCraft Digitizing",
    description:
      "Production-ready embroidery digitizing services for apparel brands and embroidery shops.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StitchCraft Digitizing",
    description:
      "Fast, accurate embroidery digitizing for logos, caps, and custom design work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();",
          }}
        />
      </head>
      <body className="min-h-full bg-(--bg) text-(--text)">{children}</body>
    </html>
  );
}

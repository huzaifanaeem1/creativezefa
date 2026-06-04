import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopNavbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // ✅ Fixed: remove trailing slash
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://creativezefa.com'),
  
  title: {
    default: "CreativeZefa | Professional Vector Tracing & Print-Ready Artwork",
    template: "%s | CreativeZefa",
  },
  description:
    "Professional raster-to-vector conversion, vector tracing, logo redraws, and print-ready artwork for screen printing, embroidery, DTF, vinyl cutting, and branding.",
  keywords: [
    "vector tracing",
    "raster to vector conversion",
    "logo redraw",
    "vector artwork",
    "print ready files",
    "DTF printing",
    "embroidery digitizing",
    "screen printing artwork",
    "vinyl cutting files",
    "logo vectorization",
    "custom vector illustrations",
    "Etsy virtual assistant",
    "social media post design",
    "YouTube thumbnail design",
  ],
  authors: [{ name: "CreativeZefa" }],
  creator: "CreativeZefa",
  publisher: "CreativeZefa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CreativeZefa | Vector Tracing & Print-Ready Artwork",
    description:
      "Transform blurry images into clean, scalable vector files. Professional vector tracing, logo redraws, and print-ready artwork for screen printing, embroidery, DTF, and branding.",
    type: "website",
    locale: "en_US",
    siteName: "CreativeZefa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CreativeZefa - Professional Vector Tracing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreativeZefa | Vector Tracing & Print-Ready Artwork",
    description:
      "Professional vector tracing, logo redraws, and print-ready artwork. Fast turnaround, high quality, 100% satisfaction guaranteed.",
    images: ["/og-image.jpg"],
    creator: "@CreativeZefa",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  // ✅ Manifest line add karo (optional - agar file hai toh)
  // manifest: "/site.webmanifest",
  category: "design",
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
        {/* Theme initialization - prevents flash */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            })();
          `}
        </Script>

        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://creativezefa.com" />
      </head>
      <body className="min-h-full bg-background text-foreground">
        
        {children}

        
        {/* Schema markup for better SEO */}
        <Script id="schema-markup" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "CreativeZefa",
              "url": "https://creativezefa.com",
              "logo": "https://creativezefa.com/images/creativezefa.png",
              "image": "https://creativezefa.com/og-image.jpg",
              "description": "Professional vector tracing, raster-to-vector conversion, and print-ready artwork services.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sialkot",
                "addressCountry": "PK"
              },
              "priceRange": "$5 - $50",
              "telephone": "+92XXXXXXXXX",
              "openingHours": "Mo-Su 00:00-23:59",
              "sameAs": [
                "https://www.instagram.com/creativezefa/",
                "https://www.facebook.com/profile.php?id=61572230995660",
                "https://x.com/CreativeZefa",
                "https://www.linkedin.com/company/creativezefa",
                "https://zefasvgs.etsy.com"
              ],
              "serviceType": [
                "Vector Tracing",
                "Raster to Vector Conversion",
                "Logo Redraw",
                "Print-Ready Artwork",
                "DTF Printing Files",
                "Embroidery Vector Files",
                "Screen Printing Artwork"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
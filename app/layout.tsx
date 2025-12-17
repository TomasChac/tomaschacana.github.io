import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomás Chacana | Ingeniero Civil Telemática & IoT",
  description: "Portfolio profesional de Tomás Chacana. Ingeniero Civil Telemática especializado en sistemas críticos e IoT. Busco prácticas en desarrollo full-stack.",
  keywords: "ingeniero, telemática, IoT, full-stack, sistemas críticos, Chile",
  authors: [{ name: "Tomás Chacana" }],
  openGraph: {
    title: "Tomás Chacana | Ingeniero Civil Telemática & IoT",
    description: "Portfolio profesional. Especializado en sistemas críticos e IoT. Disponible para prácticas.",
    type: "website",
    url: "https://tomaschacana.github.io",
    siteName: "Tomás Chacana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Chacana | Ingeniero Civil Telemática & IoT",
    description: "Portfolio profesional - Disponible para prácticas",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2563eb" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sikinam Nithin | Software Engineer",
    template: "%s | Sikinam Nithin",
  },
  description: "Software Engineer specializing in full-stack development, AI agents, and scalable cloud architecture. Building production-ready applications with Golang, Next.js, and cutting-edge AI technologies.",
  keywords: ["Software Engineer", "Full Stack Developer", "Golang", "Next.js", "AI Agents", "RAG", "GraphRAG", "Azure", "Android Developer", "React Native", "TypeScript", "LLM", "Machine Learning"],
  authors: [{ name: "Sikinam Nithin" }],
  creator: "Sikinam Nithin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Sikinam Nithin | Software Engineer",
    description: "Software Engineer specializing in full-stack development, AI agents, and scalable cloud architecture.",
    siteName: "Sikinam Nithin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikinam Nithin | Software Engineer",
    description: "Software Engineer specializing in full-stack development, AI agents, and scalable cloud architecture.",
    creator: "@yourhandle",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

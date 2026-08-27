import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { business } from "@/data/business";
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
  title: `${business.name} | ${business.position}`,
  description:
    "Assessoria documental para concessão de CR/CAC com atendimento direto pelo WhatsApp.",
  applicationName: business.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${business.name} | ${business.position}`,
    description: business.offer.main,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

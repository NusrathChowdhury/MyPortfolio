import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fouzia Nusrath Chowdhury | Junior Full-Stack Web Developer",
  description:
    "Personal portfolio of Fouzia Nusrath Chowdhury, a Junior Full-Stack Web Developer based in Sylhet, Bangladesh. Building modern, responsive web applications with Next.js, TypeScript, React, and Node.js.",
  keywords: [
    "Fouzia Nusrath Chowdhury",
    "Full-Stack Developer",
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Sylhet",
    "Bangladesh",
  ],
  authors: [{ name: "Fouzia Nusrath Chowdhury" }],
  creator: "Fouzia Nusrath Chowdhury",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Fouzia Nusrath Chowdhury | Junior Full-Stack Web Developer",
    description:
      "Modern, responsive web applications crafted with Next.js, TypeScript, and clean engineering.",
    siteName: "Fouzia Nusrath Chowdhury Portfolio",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F3EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F7F3EE] text-[#25231F] font-sans antialiased selection:bg-[#B58A62]/20 selection:text-[#25231F] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

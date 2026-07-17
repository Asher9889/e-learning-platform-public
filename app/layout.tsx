import type { Metadata } from "next";
import "./globals.css";
import { TopNavBar } from "@/src/features/home/components/TopNavBar";

export const metadata: Metadata = {
  title: "elearn",
  description:
    "A complete learning management system for universities, coaching institutes & enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* <Header /> */}
         <TopNavBar />
        {children}
      </body>
    </html>
  );
}

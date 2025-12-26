
// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DataScienceHub",
  description: "Learn by building end-to-end data projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="container pb-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

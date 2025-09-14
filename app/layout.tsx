import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import QueryProvider from "./query-provider";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "@/context/auth-context";

export const metadata: Metadata = {
  title: "Carus Recycling",
  description: "Carus Recycling",
};

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <QueryProvider>
          <UserProvider>{children}</UserProvider>
          <Toaster richColors />
        </QueryProvider>
      </body>
    </html>
  );
}

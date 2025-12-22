import type { Metadata } from "next";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "@/context/auth-context";
import WakeServer from "@/components/wake-server";

import { GoogleAuthProvider } from "./google-auth-provider";
import QueryProvider from "./query-provider";

import "./globals.css";

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
          <GoogleAuthProvider>
            <UserProvider>
              <WakeServer />
              {children}
            </UserProvider>
          </GoogleAuthProvider>
          <Toaster richColors />
        </QueryProvider>
      </body>
    </html>
  );
}

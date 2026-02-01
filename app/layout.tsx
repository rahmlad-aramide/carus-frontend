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
  description:
    "Carus Recycling - Let's work together to reduce waste, promote recycling, and create a greener future.",
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
      <head>
        {/*Start of Tawk.to Script*/}
        <script type="text/javascript">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/697ec1b000b4001c36a04b88/1jgbi96n2';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </script>
        {/*End of Tawk.to Script*/}
      </head>
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

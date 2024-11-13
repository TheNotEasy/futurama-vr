import type { Metadata } from "next";
import {robotoRegular} from "@/app/fonts"
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Футурама",
  description: "Футурама",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${robotoRegular.className} antialiased`}
    >
      <Suspense>
        <div className="flex flex-col gap-[30px] relative">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </Suspense>

    </body>
    </html>
  );
}

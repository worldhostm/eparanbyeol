'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SubHeader from "./_components/SubHeader";
import { ConstantProvider } from "./_components/ConstantProvider";

const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
        <body
        style={{
          position:'relative',
          background:'white',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column',
        }}
        >
          <ConstantProvider>
              <Header />
              {/* 서비메뉴 헤더 */}
                <SubHeader />
                {children}
              <Footer />
          </ConstantProvider>
        </body>
    </html>
  );
}

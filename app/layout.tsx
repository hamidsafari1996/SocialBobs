"use client";
// import type { Metadata } from "next";
// import { SessionProvider } from "next-auth/react";
import { DataProvider } from '../contexts/UserContext';
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useState } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import Sidebar_left from "../components/Main/sidebar-left";
import Sidebar_right from "@/components/Main/sidebar-right";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-100`}>
        <Header toggleSidebar={toggleSidebar}/>
        <main className="max-w-full pt-10 pb-32 text-center min-h-screen">
          <div className="flex items-center justify-center flex-row">
            <div className="flex-1 w-1/3">
                <Sidebar_left isOpen={isSidebarOpen} />
            </div>
            <DataProvider>
              <div className="w-full max-w-2xl mx-auto sidebar x-sidebar">
                {children}
              </div>
            </DataProvider>
            <div className="flex-1 w-1/3">
              {/* <Sidebar_right /> */}
            </div>
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
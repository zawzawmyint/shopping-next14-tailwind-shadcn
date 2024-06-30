import "./globals.css";

import { Public_Sans } from "next/font/google";

import Container from "@/components/global/Container";
import Navbar from "@/components/global/Header/Navbar";
import SubNav from "@/components/global/Header/SubNav";
import Promotions from "@/components/global/Header/promotions/Promotions";
import Footer from "@/components/global/footer/Footer";
import { cn } from "@/lib/utils";
import NextjsLoading from "@/components/global/loading/NextjsLoadingTop";
import StoreProvider from "./StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const fontSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Llam",
  description: "Llam shopping",
};

export const revalidate = 3600; // revalidate at most every hour

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <StoreProvider>
          <NextjsLoading />
          <SubNav />
          <Navbar />
          <Promotions />
          <Container>{children}</Container>
          <Footer />
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}

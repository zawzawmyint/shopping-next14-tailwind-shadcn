import { Public_Sans } from "next/font/google";

import Container from "@/components/global/Container";
import Navbar from "@/components/global/Header/Navbar";
import SubNav from "@/components/global/Header/SubNav";
import Promotions from "@/components/global/Header/promotions/Promotions";
import Footer from "@/components/global/footer/Footer";
import NextjsLoading from "@/components/global/loading/NextjsLoadingTop";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import StoreProvider from "../StoreProvider";

export default function Layout({ children }) {
  return (
    <StoreProvider>
      <NextjsLoading />
      <SubNav />
      <Navbar />
      <Promotions />
      <Container>{children}</Container>
      <Footer />
      <Toaster />
    </StoreProvider>
  );
}

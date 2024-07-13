import "./globals.css";

import { Public_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

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
        {children}
      </body>
    </html>
  );
}

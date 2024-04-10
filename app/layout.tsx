import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myntromi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang="en">
      <body className={font.className}>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { space_grotesk } from "../../public/fonts/font";
import { DM_Sans } from "next/font/google";
import LenisWrapper from "@/components/global/LenisWrapper";
import Navbar from "@/components/global/navbar";
import TopNavbar from "@/components/global/top-navbar";
import Footer from "@/components/global/footer";

export const metadata: Metadata = {
  title: "AgentSPL | Autonomous AI Agents on Solona",
  description: "Autonomous AI Agents on Solona",
};

const dm_sans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} hero`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LenisWrapper>
            <TopNavbar />
            <Navbar />
            {children}
            <Footer/>
          </LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

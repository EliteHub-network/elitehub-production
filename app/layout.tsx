import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import Footer from "./components/ui/footer";

export const metadata: Metadata = {
  title: "EliteHub - Build Your Automated Business",
  description: "Turn Ideas Into Profitable Businesses with Automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
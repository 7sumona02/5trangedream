import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono, Inconsolata } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400","500","600"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumona Biswas - Design Engineer",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inconsolata.className} antialiased cursor-pixel`}
      >
         <Toaster
         toastOptions={{
          style: {
            background: "#dddedf",             // toast bg
            color: "#000",                  // text color
            borderRadius: "0px",
            border: "1px solid #000",
            boxShadow: 'none',
            padding: "10px 10px",
            fontSize: "12px",
          },
          className: "font-mono uppercase font-light",       // you can add tailwind classes
        }} position="top-center" />
        {children}
      </body>
    </html>
  );
}

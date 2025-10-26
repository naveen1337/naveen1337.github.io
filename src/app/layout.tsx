import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserratFont = Montserrat({
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "naveen1337",
  description: "naveen1337 personal repo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratFont.variable} font-primary antialiased text-white` }>{children}</body>
    </html>
  );
}

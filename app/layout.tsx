import * as React from "react";
import { Big_Shoulders_Text, DM_Sans } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./_components/Navbar";

const bigShoulders = Big_Shoulders_Text({
  variable: "--bigShoulders-font",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--dmSans-font",
  subsets: ["latin"],
});

export const metadata = {
  title: "my portfolio",
  description: "let's help your dream come to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bigShoulders.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "K H Nabeel | UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of K H Nabeel — UI/UX Designer and Frontend Developer. 3rd year B.Tech CS student at NSS College of Engineering, Malappuram.",
  keywords: ["UI/UX Designer", "Frontend Developer", "Nabeel", "K H Nabeel", "Figma", "Kerala"],
  authors: [{ name: "K H Nabeel" }],
  openGraph: {
    title: "K H Nabeel | UI/UX Designer & Frontend Developer",
    description: "Crafting beautiful, user-centric digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain antialiased">
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

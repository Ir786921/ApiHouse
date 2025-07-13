import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar";
import FooterComponent from "@/Component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Free Dummy APIs for Developers | API House",
  description: "Kickstart your frontend or full-stack projects with free dummy APIs. Perfect for prototyping, testing, and learning. No auth. No rate limits. Just build.",
  keywords: [
    "dummy api", "mock api", "free rest api", "nextjs backend", "api testing",
    "postman", "fake json", "react projects api", "mern stack api"
  ],
  authors: [{ name: "API House Team" }],
  robots: "index, follow",
  icons: {
    icon: "/api.png"
  },
  
  metadataBase: new URL("https://api-house-delta.vercel.app"),
  openGraph: {
    title: "API House | Build, Manage & Test APIs Seamlessly",
    description: "Build and manage powerful REST APIs with ease. Full-stack friendly, developer-first platform using Next.js, MongoDB, and Tailwind CSS.",
    url: "https://api-house-delta.vercel.app",
    siteName: "API House",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "API House Cover"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "API House | Build, Manage & Test APIs Seamlessly",
    description: "API House is the modern way to create and test REST APIs. Ideal for full-stack developers using React, Next.js & MongoDB.",
    images: ["/og-cover.jpg"]
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
         <Navbar/>
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}

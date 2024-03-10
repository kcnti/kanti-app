import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: 'Home | Kanti',
  description: 'nothing special here',
  openGraph: {
    title: "Home",
    description: "nothing special here",
    image: "https://cdn.kanti.pw/assets/preview.png",
    url: "https://kanti.pw"
  },
  keywords: "Home, About, Blog, GCC2024 Review",
  author: "Kantinun"
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

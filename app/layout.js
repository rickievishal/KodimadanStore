import { Geist, Geist_Mono,IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const ibmPlexSans = IBM_Plex_Sans({weight: ['400', '700','100','200','300','500','600'],subsets: ["latin"]});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kodmadan Hardwares and Paints - Tenkasi - Kadayam",

  description: "Kodimadan Hardwares and Paints - Your trusted store for premium Asian Paints and hardware supplies in Tenkasi, Tamil Nadu. Quality products & expert advice!",
  openGraph: {
    title: 'Kodimadan Hardwares and Paints',
    description: 'Your trusted store for premium Asian Paints and hardware supplies in Tenkasi, Tamil Nadu.',
}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} relative antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

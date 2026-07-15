import { Fraunces, Inter } from "next/font/google";
import "../app/globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  metadataBase: new URL("https://samiabat.github.io"),
  title: {
    default: "Samuel Abatneh | AI Engineer",
    template: "%s | Samuel Abatneh",
  },
  description:
    "Portfolio for Samuel Abatneh, an AI Engineer, Backend Engineer, and ML Researcher building production-ready AI systems and scalable infrastructure.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Samuel Abatneh | AI Engineer",
    description:
      "AI engineer building reliable AI products, backend systems, and applied machine learning solutions.",
    url: "/",
    siteName: "Samuel Abatneh",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <div className="page-background">
          <div className="page-background__orb orb-one"></div>
          <div className="page-background__orb orb-two"></div>
          <div className="page-background__orb orb-three"></div>
        </div>
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

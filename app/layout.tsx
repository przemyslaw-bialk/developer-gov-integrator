import { Inter, Cormorant_Garamond } from "next/font/google";
import { Toaster } from "sonner"; // 1. Dodaj ten import
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${cormorant.variable} min-h-screen bg-bg font-sans text-text`}
      >
        <div className="mx-auto min-h-screen w-full max-w-[1800px]">
          {children}
        </div>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

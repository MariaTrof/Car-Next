import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/widgets/ui/Header/Header";
import Footer from "@/widgets/ui/Footer/Footer";
import SortSelect from "@/features/SortSelect/SortSelect";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-montserrat", //optional
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.className}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <nav>
          <SortSelect />
        </nav>
        <main className="min-h-screen w-full mx-auto flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

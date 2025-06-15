import "./globals.css";
import NavBar from "@/widgets/ui/NavBar/NavBar";
import Header from "@/widgets/ui/Header/Header";
import Footer from "@/widgets/ui/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <header>
          <Header />
        </header>
        <nav>
          <NavBar />
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

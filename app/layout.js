import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Venta de vehiculos ",
  description: "Esta web es una agencia de vehiculos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div>
            <Navbar />
            <main className="flex-gropu p-3">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

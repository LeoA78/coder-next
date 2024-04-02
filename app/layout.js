import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digesto Online",
  description: "Sistema de Digesto Digital de la Municipalidad de Pico Truncado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}

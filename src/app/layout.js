import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"]});

export const metadata = {
  title: "Portfólio | gilbertomorales.com",
  description: "Portfólio com projetos pessoais disponíveis para visualização e código aberto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

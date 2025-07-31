import "./globals.css";
import type { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "Carteira 1",
  description: "Aplicação Next.js para controle de carteira",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Faixa superior com imagem cyberpunk do Bitcoin */}
        <header className="relative w-full h-32 bg-white">
          {/* Imagem cyberpunk Bitcoin preenchendo toda a faixa */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/bitcoin-cyberpunk.png" // agora usando PNG
              alt="Bitcoin Cyberpunk"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </header>
        {/* Conteúdo da página */}
        {children}
      </body>
    </html>
  );
}
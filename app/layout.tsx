import "./globals.css";
import type { ReactNode } from "react";

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
        {/* Removido o header com imagem para liberar o topo */}
        {children}
      </body>
    </html>
  );
}
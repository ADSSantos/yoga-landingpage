import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoga com Ana Silva | Aulas de Yoga Presenciais e Online",
  description: "Descubra o poder transformador do yoga com a professora Ana Silva. Aulas presenciais e online para todos os níveis. Agende sua aula experimental gratuita!",
  keywords: "yoga, aulas de yoga, yoga online, yoga presencial, meditação, bem-estar, saúde, flexibilidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

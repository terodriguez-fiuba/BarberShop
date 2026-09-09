import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blackstone Barbers | Cortes, barbas y estilo propio",
  description:
    "Barbería clásica, estilo propio. Conocé nuestros servicios, explorá el catálogo de cortes y encontrá tu próximo look.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

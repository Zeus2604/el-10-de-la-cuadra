import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EL 10 DE LA CUADRA',
  description: 'Porque un 10 nunca usa cualquier camiseta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

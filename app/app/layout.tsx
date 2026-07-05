import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EL 10 DE LA CUADRA',
  description: 'Las mejores camisetas, los mejores equipos, las mejores historias.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

import type {Metadata} from 'next';
import './globals.css';
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button';

export const metadata: Metadata = {
  title: 'Comercial Blanca Web',
  description: 'Tu socio confiable en insumos para la V Región.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}

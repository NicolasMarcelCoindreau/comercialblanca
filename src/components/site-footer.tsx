import Link from 'next/link';
import Image from 'next/image';
import { Facebook } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/56991770587";

export function SiteFooter() {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-8">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div className="flex justify-center md:justify-start">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/comercial-blanca-web.firebasestorage.app/o/Logo%20Blanca%20SpA%20400x150-03%20(1).jpg?alt=media&token=9dc1a580-9c6b-42d7-b5b1-ae1f48627010"
            alt="Comercial Blanca Logo"
            data-ai-hint="logo"
            width={200}
            height={75}
          />
        </div>
        <div className="flex flex-col space-y-2 text-sm text-primary-foreground/80">
          <p>
            <strong>WhatsApp:</strong> <Link href={WHATSAPP_LINK} className="hover:underline" target="_blank" rel="noopener noreferrer">+56 9 9177 0587</Link>
          </p>
          <p>
            <strong>Email:</strong> <Link href="mailto:contacto@comercialblanca.cl" className="hover:underline">contacto@comercialblanca.cl</Link>
          </p>
          <p>
            <strong>Bodega:</strong> Calle Falsa 123, Viña del Mar
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Link href="https://www.facebook.com/profile.php?id=100066492044314" className="text-primary-foreground/80 hover:text-white" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

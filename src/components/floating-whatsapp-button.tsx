import Link from 'next/link';
import { WhatsAppIcon } from './icons';
import { Button } from './ui/button';

const WHATSAPP_LINK = "https://wa.me/56900000000?text=Hola,%20necesito%20ayuda.";

export function FloatingWhatsAppButton() {
  return (
    <Button asChild
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg z-50"
    >
      <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="h-8 w-8 text-white" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Link>
    </Button>
  );
}

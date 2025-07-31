import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons';
import Link from 'next/link';

const WHATSAPP_LINK = "https://wa.me/56991770587?text=Hola,%20me%20gustaría%20solicitar%20la%20lista%20de%20precios.";

export function FinalCta() {
  return (
    <section className="w-full py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase font-headline">HABLEMOS.</h2>
          <p className="max-w-[600px] text-lg md:text-xl text-primary-foreground/80 font-body">
            Optimicemos los costos de tu negocio hoy mismo. Solicita tu lista de precios completa o haz tu pedido directamente con un ejecutivo.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 text-lg py-8 px-10">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="phone icon" className="mr-2">📲</span> PEDIR LISTA DE PRECIOS POR WHATSAPP
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

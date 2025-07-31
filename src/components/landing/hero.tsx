import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WHATSAPP_LINK = "https://wa.me/56991770587";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/comercial-blanca-web.firebasestorage.app/o/bodega.jpg?alt=media&token=0e2e742f-01bf-4f49-969d-5553dbd7891e"
        alt="Bodega de Comercial Blanca"
        data-ai-hint="warehouse"
        fill
        className="object-cover -z-20"
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase font-headline">
            TU SOCIO CONFIABLE EN INSUMOS PARA LA V REGIÓN
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl font-body">
            Abarrotes, artículos de limpieza y productos HORECA. Optimizamos tus costos con despacho puntual y precios competitivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
              <Link href="#ofertas">
                VER OFERTAS DEL MES
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white/90">
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Contactar por WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

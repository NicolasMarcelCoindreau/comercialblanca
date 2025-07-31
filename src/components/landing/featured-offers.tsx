import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons';

const WHATSAPP_LINK = "https://wa.me/56900000000?text=Hola,%20me%20interesa%20un%20producto.";

const offers = [
  {
    name: 'Aceite para Freír Natural Agro',
    description: 'Bidón 10 Lt',
    price: '$20.980 + IVA',
    image: 'https://firebasestorage.googleapis.com/v0/b/comercial-blanca-web.firebasestorage.app/o/Aceites%20para%20freir.jpg?alt=media&token=ee041271-9f2b-4ea2-9384-cfb69057710d',
    aiHint: 'oil bottle',
  },
  {
    name: 'Papas Prefritas Congeladas FarmFrites',
    description: 'Bolsa 2.5 kg',
    price: '$4.990 + IVA',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'french fries',
  },
  {
    name: 'Combo Salsas HORECA',
    description: 'Ketchup + Mostaza Jano',
    price: '$8.490 + IVA',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'sauce bottles',
  },
  {
    name: 'Aceite Vegetal',
    description: 'Botella 900ml',
    price: '$1.381 + IVA',
    image: 'https://firebasestorage.googleapis.com/v0/b/comercial-blanca-web.firebasestorage.app/o/Aceite%20vegetal%20(2).jpg?alt=media&token=c5b8c1b2-bbc6-4102-a629-20d6636b8aa2',
    aiHint: 'vegetable oil',
  },
];

export function FeaturedOffers() {
  return (
    <section id="ofertas" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-12 font-headline">
          OFERTAS QUE POTENCIAN TU NEGOCIO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer) => (
            <Card key={offer.name} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <Image
                  src={offer.image}
                  alt={offer.name}
                  data-ai-hint={offer.aiHint}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover aspect-square"
                />
              </CardContent>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="text-xl font-bold">{offer.name}</CardTitle>
                <CardDescription className="mt-2">{offer.description}</CardDescription>
                <p className="text-3xl font-bold text-primary mt-4 mb-6 flex-grow flex items-end">{offer.price}</p>
                 <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                  <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5 mr-2" />
                    Pedir por WhatsApp
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

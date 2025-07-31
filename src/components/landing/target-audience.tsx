import Image from 'next/image';

const audiences = [
  {
    title: 'Restaurantes y Food Trucks',
    text: 'Proveemos los insumos de alto volumen y rendimiento que tu cocina necesita para no parar: aceites, congelados, salsas en formato HORECA y artículos de limpieza.',
    image: 'https://firebasestorage.googleapis.com/v0/b/comercial-blanca-web.firebasestorage.app/o/food%20truck.jpg?alt=media&token=5bcd3cf4-9ad7-4e17-b719-f4a7eb8b21d5',
    aiHint: 'food truck',
    imagePosition: 'left',
  },
  {
    title: 'Almacenes y Canal Tradicional',
    text: 'Un catálogo completo de abarrotes y productos de aseo con los precios y la rotación que tu negocio de barrio requiere para competir y ganar.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'local store',
    imagePosition: 'right',
  },
];

export function TargetAudience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-16 font-headline">
          SOLUCIONES PARA CADA TIPO DE NEGOCIO
        </h2>
        <div className="space-y-16">
          {audiences.map((audience) => (
            <div key={audience.title} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={`md:order-${audience.imagePosition === 'left' ? 1 : 2}`}>
                <Image
                  src={audience.image}
                  alt={audience.title}
                  data-ai-hint={audience.aiHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              <div className={`space-y-4 md:order-${audience.imagePosition === 'left' ? 2 : 1}`}>
                <h3 className="text-2xl font-bold font-headline">{audience.title}</h3>
                <p className="text-lg text-muted-foreground font-body">{audience.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

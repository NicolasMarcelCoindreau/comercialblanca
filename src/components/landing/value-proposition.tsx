import { Truck, Tag, Handshake } from 'lucide-react';

const valueProps = [
  {
    icon: <Truck className="h-12 w-12" />,
    title: 'DESPACHO CONFIABLE',
    text: 'Planificamos nuestras rutas para garantizar que tu pedido llegue puntualmente a la puerta de tu negocio.',
  },
  {
    icon: <Tag className="h-12 w-12" />,
    title: 'PRECIOS COMPETITIVOS',
    text: 'Accede a precios de distribuidor que cuidan tus márgenes y mejoran la rentabilidad de tu local.',
  },
  {
    icon: <Handshake className="h-12 w-12" />,
    title: 'ATENCIÓN PERSONALIZADA',
    text: 'Gestiona tus pedidos y consultas directamente por WhatsApp con un equipo que entiende tus necesidades.',
  },
];

export function ValueProposition() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-12 font-headline">
          MÁS QUE UN PROVEEDOR, TU SOCIO ESTRATÉGICO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {valueProps.map((prop) => (
            <div key={prop.title} className="flex flex-col items-center">
              <div className="mb-4">{prop.icon}</div>
              <h3 className="text-xl font-bold uppercase mb-2 font-headline">{prop.title}</h3>
              <p className="text-base text-primary-foreground/80 font-body">{prop.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

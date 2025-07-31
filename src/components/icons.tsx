import type { SVGProps } from "react";

export function Logo(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="font-headline text-2xl font-bold tracking-wider" {...props}>
      COMERCIAL BLANCA
    </div>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.14.03a16.14 16.14 0 00-12.3 22.34L1 31l8.83-2.9a16.11 16.11 0 007.31 1.85h.01A16.14 16.14 0 1016.13.03zM25 21.36a2.12 2.12 0 01-1.4-2.48 10.32 10.32 0 00-.58-1.89c-.19-.46-.38-.63-.7-.79s-.63-.16-.95.14a5.25 5.25 0 00-.77.92c-.22.28-.44.38-.72.24s-1.14-.42-2.17-.82a12.89 12.89 0 01-3.1-2.4c-.44-.55-.38-.8.06-1.19s.46-.55.67-.83c.21-.28.14-.52 0-.83s-.95-2.26-1.3-3.08c-.35-.82-.7-.7-.95-.7a2.18 2.18 0 00-1.2.14 3.7 3.7 0 00-1.4 1.2c-.38.52-.57 1.1-.57 1.65s.2 1.81.57 2.73c.09.28 1.44 3.32 4.3 5.37a14.71 14.71 0 004.83 2.38c1.3.28 2.22.18 2.87-.28s1.65-1.9 1.89-2.62c.24-.72.24-1.33.12-1.51s-.34-.29-.72-.53z"
      />
    </svg>
  );
}

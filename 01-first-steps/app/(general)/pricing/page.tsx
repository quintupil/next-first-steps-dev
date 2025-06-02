import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Está es la página de precio de Charly',
};

export default function PricingPage() {
  return (
      <span className="text-7xl">Pricing Page</span>
  );
}
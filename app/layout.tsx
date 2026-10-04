import type { Metadata } from 'next';
import { Oswald, Manrope, Rye } from 'next/font/google';
import './globals.css';

const display = Oswald({
  variable: '--font-display',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600'],
});

const body = Manrope({
  variable: '--font-body',
  subsets: ['latin', 'cyrillic'],
});

const brand = Rye({
  variable: '--font-brand',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://barbershoporiginal.com'),
  title: 'Barbershop Original — премиальный барбершоп в Михасе',
  description:
    'Мужские стрижки, оформление бороды и премиальный уход в Barbershop Original, Mijas Costa.',
  openGraph: {
    title: 'Barbershop Original — Mijas Costa',
    description: 'Премиальные мужские стрижки, борода и уход в Mijas Costa.',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'Barbershop Original — Mijas Costa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barbershop Original — Mijas Costa',
    description: 'Премиальные мужские стрижки, борода и уход в Mijas Costa.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${display.variable} ${body.variable} ${brand.variable}`}>{children}</body>
    </html>
  );
}

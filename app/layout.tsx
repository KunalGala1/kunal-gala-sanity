import './globals.css';
import type { Metadata } from 'next';
import { Sorts_Mill_Goudy } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const font = Sorts_Mill_Goudy({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kunal Gala | Composer and Percussionist',
  description:
    'Kunal Gala (b. 1998) is a composer and percussionist based in New York City.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className + '  bg-gray-950 text-gray-200'}>
        {children}
      </body>
    </html>
  );
}

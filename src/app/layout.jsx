import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Work_Sans, Open_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const work_sans = Work_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const open_sans = Open_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'Reena Mehta',
  description: '',
}

export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className={`${work_sans.variable} ${open_sans.variable}`}>
      <body>{children}</body>
    </html>
  )
}

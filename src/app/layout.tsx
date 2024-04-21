import './globals.css';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

export const metadata = {
  title: 'Web Inspire',
  description: 'A curated list of websites with beautiful design and great UX.',
  openGraph: {
    title: 'Web Inspire',
    description: 'A curated list of websites with beautiful design and great UX.',
    url: 'https://web-inspire.vercel.app/',
    locale: 'en_IE',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        alt: 'Web Inspire',
        width: 1440,
        height: 820,
      },
    ],
  },
  twitter: {
    title: 'Web Inspire',
    description: 'A curated list of websites with beautiful design and great UX.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-neutral-950 font-sans scroll-smooth">
      <body>
        <Header />
        <div className="flex flex-col sm:flex-row relative p-2 gap-2 max-w-screen-2xl mx-auto sm:gap-4 lg:gap-8 sm:p-4 lg:p-8">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ryan Permana',
  description: 'Full Stack Engineer at Adira',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='h-screen antialiased'>
          <Header />
          <div className='max-w-4xl mx-auto py-10'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

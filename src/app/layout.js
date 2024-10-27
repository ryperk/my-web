import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Ryan Permana',
  description: 'Full Stack Engineer at Adira',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={[inter.className, 'font-mono']}>
        <div className='h-screen flex flex-col antialiased bg-white dark:bg-black'>
          <Header />
          <div className='max-w-4xl w-full mx-auto py-0 px-4'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

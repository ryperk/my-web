import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], display:'swap'})
// const poppins = Poppins({ subsets: ['latin']})

export const metadata = {
  title: 'Ryan Permana',
  description: 'Full Stack Engineer at Adira',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className, 'font-mono']}>
        <div className='h-screen flex flex-col antialiased'>
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

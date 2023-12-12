import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import ToastProvider from './context/ToastLayoutProvider';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Leonide',
    default: 'Leonide',
  },

  description: 'Created By Anas Alaoui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <NextTopLoader
          showSpinner={false}
          color='#d4af37'
        />
        {children}
      </body>
    </html>
  )
}

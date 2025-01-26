
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UserDataProvider } from './providers/contexts/UserDataContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'myStardew',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserDataProvider>
    <html>
      <body className={inter.className}>      
        {children}
      </body>
    </html>
    </UserDataProvider>
  )
}

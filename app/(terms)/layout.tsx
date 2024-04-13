import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Brand from '@/components/Branding'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omeglee - terms and conditions',
  description: 'Omeglee terms and conditions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Brand />
        {children}
      </body>
    </html>
  )
}

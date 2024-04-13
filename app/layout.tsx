import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '@/context/ModalProvider'
// import DatadogInit from '@/components/DatadogInit'
import DatadogScript from '@/components/DatadogScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://Omeglee.com/"),
  title: 'Omeglee - Connecting lives, Connecting minds beyond borders',
  description: 'Omeglee connects people worldwide through video chat. Enjoy random video calling with strangers, Chat with strangers, and experience the joy of meeting new people online. Free and easy to use!',
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DatadogScript />
        <ModalProvider />
        {children}
      </body>
    </html>
  )
}

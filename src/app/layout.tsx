import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { AxiosInterceptor } from '@/core/infrastructure'
import { PrivateLayout } from '@/core/ui'

AxiosInterceptor()

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrivateLayout>{children}</PrivateLayout>
      </body>
    </html>
  )
}

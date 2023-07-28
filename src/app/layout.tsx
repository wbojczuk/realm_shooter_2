import './globals.css'
import type { Metadata } from 'next'
import { Eagle_Lake } from 'next/font/google'

const eagle_lake = Eagle_Lake({weight: "400", subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Fantasy Shooter 2',
  description: 'The sequel we\'ve all been waiting for!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={eagle_lake.className}>{children}</body>
    </html>
  )
}

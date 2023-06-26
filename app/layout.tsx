import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const Plus = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Plus.className}>{children}</body>
    </html>
  )
}

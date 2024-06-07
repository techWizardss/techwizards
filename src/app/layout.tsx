import Header from '@/components/common/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'techWizards',
  description:
    'As a dynamic startup offering comprehensive digital solutions. Our goal is to be your one-stop destination for all your digital needs!',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png?v=4']
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

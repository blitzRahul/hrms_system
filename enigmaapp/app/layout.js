import './globals.css'
import { Montserrat } from 'next/font/google'


const monster = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Enigma 2.0 by The Fusion Club',
  description: 'made for Ethnixia 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monster.className}>{children}</body>
    </html>
  )
}

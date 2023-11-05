import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/Home/StarBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechVerse',
  description: 'Welcome to techverse',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      <StarsCanvas/>
        {children}
        </body>
    </html>
  )
}

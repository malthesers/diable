import './globals.css'
import type { Metadata } from 'next'
import { Spectral } from 'next/font/google'
import RecordsProvider from '../context/RecordsProvider'
import ModalsProvider from '../context/ModalsProvider'
import ItemsProvider from '../context/ItemsProvider'
import Background from '../components/layout/Background'
import Header from '../components/layout/Header'

const spectral = Spectral({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Diable III',
  description: 'Diablo III Wordle | Guess the item by its properties!',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    title: 'Diablo III',
    description: 'Guess the item by its properties!',
    url: 'https://diable-3.vercel.app/',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={spectral.className}>
        <Background/>
        <Header/>
        <RecordsProvider> 
          <ModalsProvider>
            <ItemsProvider>
                {children}
            </ItemsProvider>
          </ModalsProvider>
        </RecordsProvider>
      </body>
    </html>
  )
}

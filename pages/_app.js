import '@/styles/globals.css'
import { Sofia_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const sofia = Sofia_Sans({
  subsets: ['latin'],
  variable: "--font-sofia"
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${sofia.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}

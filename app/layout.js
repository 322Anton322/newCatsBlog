import { Header } from "./../components/Header"
import '../styles/global.css'

export const metadata = {
  title: 'Cat and Dogs',
  description: 'Yasdelie',
  manifest: '/manifest.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Header/>
        {children}
      </body>
    </html>
  )
}


import Header from '@/components/Header'
import './globals.css'





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black text-white'>
        <Header/>
        {children}
      </body>
    </html>
  )
}

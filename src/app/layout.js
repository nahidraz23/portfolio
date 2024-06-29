import Navbar from '@/components/shared/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Nahid Raz',
  description: 'Nahiduzzaman Raz Portfolio'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container mx-auto'>
          <Navbar></Navbar>
        </div>
        <div className='h-screen container mx-auto'>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  )
}

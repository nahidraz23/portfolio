import Navbar from '@/components/shared/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/shared/Footer/Footer'


export const metadata = {
  title: 'Nahid Raz',
  description: 'Nahiduzzaman Raz Portfolio'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className='hide-scrollbar'>
        <div className='container mx-auto'>
          <Navbar></Navbar>
        </div>
        <div className='min-h-[calc(100vh-270px)] container mx-auto'>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  )
}

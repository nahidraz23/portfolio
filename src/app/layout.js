import Navbar from '@/components/shared/Navbar/Navbar'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}

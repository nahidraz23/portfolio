import Navbar from '@/components/shared/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/shared/Footer/Footer'
import AnimatedCursor from 'react-animated-cursor'


export const metadata = {
  title: 'Nahid Raz',
  description: 'Nahiduzzaman Raz Portfolio'
}

export default function RootLayout ({ children }) {
  
  return (
    <html lang='en'>
      <body className='hide-scrollbar ' >
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'white'
          }}
          outerStyle={{
            border: '3px solid white'
          }}
          trailingSpeed={10}
        />
        <div className='container mx-auto'>
          <Navbar></Navbar>
        </div>
        <div className='min-h-[calc(100vh-270px)] container mx-auto'>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}

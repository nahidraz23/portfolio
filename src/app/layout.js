import './globals.css'

export const metadata = {
  title: 'Nahid Raz',
  description: 'Nahiduzzaman Raz Portfolio'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body >{children}</body>
    </html>
  )
}

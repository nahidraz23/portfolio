'use client'
import HomePage from '@/components/HomePage/HomePage'
import AnimatedCursor from 'react-animated-cursor'

export default function Home () {
  return (
    <main className='min-h-[calc(100vh-270px)] p-4 md:p-0'>
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
      <HomePage></HomePage>
    </main>
  )
}

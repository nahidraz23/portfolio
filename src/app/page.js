'use client'
import HomePage from '@/components/HomePage/HomePage'
import { motion, useScroll } from 'framer-motion'

export default function Home () {
  const { scrollYProgress } = useScroll()

  return (
    <main className='min-h-[calc(100vh-270px)] p-4 md:p-0'>
      <motion.div
        className='progress-bar'
        style={{ scaleX: scrollYProgress }}
      />
      <div className='light-animation'>
        <HomePage></HomePage>
      </div>
    </main>
  )
}

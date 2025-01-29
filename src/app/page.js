'use client'
import HomePage from '@/components/HomePage/HomePage'
import { motion, useScroll } from 'framer-motion'

export default function Home () {
  const { scrollYProgress } = useScroll()

  return (
    <main className='p-4 md:p-0'>
      <motion.div
        className='progress-bar'
        style={{ scaleX: scrollYProgress }}
      />
      <div className='light-animation'>
      </div>
        <HomePage></HomePage>
    </main>
  )
}

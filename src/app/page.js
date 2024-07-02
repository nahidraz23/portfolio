import Banner from '@/components/Banner/Banner'
import ProjectSection from '@/components/ProjectSection/ProjectSection'
import SkillSection from '@/components/SkillSection/SkillSection'

export default function Home () {
  return (
    <main className='min-h-[calc(100vh-270px)]'>
      {/* Banner Section */}
      <section className='mt-16'>
        <Banner></Banner>
      </section>

      {/* Projects section */}
      <section className='mt-24'>
        <ProjectSection></ProjectSection>
      </section>

      {/* Skills section */}
      <section className="mt-28">
        <SkillSection></SkillSection>
      </section>
    </main>
  )
}

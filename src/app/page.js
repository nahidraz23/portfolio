import AboutMeSection from '@/components/AboutMeSection/AboutMeSection'
import Banner from '@/components/Banner/Banner'
import ContactSection from '@/components/ContactSection/ContactSection'
import ProjectSection from '@/components/ProjectSection/ProjectSection'
import SkillSection from '@/components/SkillSection/SkillSection'

export default function Home () {
  return (
    <main className='min-h-[calc(100vh-270px)] p-4 md:p-0'>
      {/* Banner Section */}
      <section className='mt-16'>
        <Banner></Banner>
      </section>

      {/* Projects section */}
      <section>
        <ProjectSection></ProjectSection>
      </section>

      {/* Skills section */}
      <section>
        <SkillSection></SkillSection>
      </section>

      {/* About me section */}
      <section>
        <AboutMeSection></AboutMeSection>
      </section>

      {/* Contact section */}
      <section>
        <ContactSection></ContactSection>
      </section>
    </main>
  )
}

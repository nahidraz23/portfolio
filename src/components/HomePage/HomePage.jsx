import React from 'react';
import Banner from '../Banner/Banner';
import ProjectSection from '../ProjectSection/ProjectSection';
import SkillSection from '../SkillSection/SkillSection';
import AboutMeSection from '../AboutMeSection/AboutMeSection';
import EducationSection from '../EducationSection/EducationSection';
import ContactSection from '../ContactSection/ContactSection';

const HomePage = () => {
    return (
        <div className='pt-20'>
            {/* Banner Section */}
            <section className='mt-16'>
                <Banner></Banner>
            </section>

             {/* Skills section */}
             <section>
                <SkillSection></SkillSection>
            </section>

            {/* Projects section */}
            <section>
                <ProjectSection></ProjectSection>
            </section>

            {/* About me section */}
            <section>
                <AboutMeSection></AboutMeSection>
            </section>

            {/* Education section */}
            {/* <section>
                <EducationSection></EducationSection>
            </section> */}

            {/* Contact section */}
            <section>
                <ContactSection></ContactSection>
            </section>
        </div>
    );
};

export default HomePage;
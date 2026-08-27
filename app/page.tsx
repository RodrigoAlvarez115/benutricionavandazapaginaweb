import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AudienceProvider, AudienceSelector } from '@/components/audience-selector'
import { ExperienceContent } from '@/components/patient-experience'

export default function Home() {
  return (
    <>
      <AudienceProvider>
        <Navbar />
        <main>
          <AudienceSelector />
          <ExperienceContent />
        </main>
        <Footer />
      </AudienceProvider>
    </>
  )
}

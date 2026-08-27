import Image from 'next/image'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

export function WhoWeAre() {
  return (
    <section id="quienes-somos" className="be-watermark bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Quiénes somos"
          title="Equipo técnico y dirección ejecutiva"
          subtitle="Evolución nutricional para entornos exigentes: salud real, rendimiento sostenible."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div>
            <div className="relative aspect-[3/2] overflow-hidden bg-white">
              <Image
                src="/images/foto-licenciadas.jpg"
                alt="Fotografía de referencia del equipo profesional"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Dirección técnica y consultoría especializada en intervención metabólica,
                diagnóstico clínico de precisión y programas de salud laboral para la
                industria minera. Integramos tecnología médica de bioimpedancia segmentaria
                directa (InBody 270), estratificación de riesgo cardiometabólico y adecuación
                nutricional en entornos de alta exigencia operativa y altitud.
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-navy">Lic. Silvana Rivas (M.P. 558)</h3>
                  <p className="mt-1 text-sm font-semibold text-tech">
                    Co-Directora · Especialista en Composición Corporal y Gestión Alimentaria
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <li><strong className="text-navy">Grado:</strong> Licenciada en Nutrición, Universidad Nacional de Salta.</li>
                    <li><strong className="text-navy">Liderazgo:</strong> Ex Vicepresidente del Consejo Directivo del Colegio de Graduados en Nutrición de Salta (2020–2025) y referente titular por Salta en la Comisión Guía de Práctica Nacional de Diagnóstico y Tratamiento de la Obesidad en Adultos (2021–2022).</li>
                    <li><strong className="text-navy">Posgrado:</strong> Nutrigenética, Gestión Emocional y Mindfulness, Antropometría ISAK I y Gastronomía y Alta Cocina.</li>
                    <li><strong className="text-navy">Experiencia:</strong> Gestión de servicios de alimentación y más de 9 años de experiencia en evaluación y seguimiento de composición corporal con InBody.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy">Lic. Cecilia Inés Belton (M.P. 475)</h3>
                  <p className="mt-1 text-sm font-semibold text-tech">
                    Co-Directora · Especialista en Fisiopatología Cardiometabólica y Diabetes
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <li><strong className="text-navy">Grado:</strong> Licenciada en Nutrición, Facultad de Ciencias Médicas, Universidad Nacional de Córdoba.</li>
                    <li><strong className="text-navy">Especialización:</strong> Diabetes, Tecnología Metabólica e Infusores Continuos de Insulina.</li>
                    <li><strong className="text-navy">Posgrado:</strong> Diabetes, enfermedades cardiometabólicas, parámetros bioquímicos, nutrición funcional y metabolismo hormonal y nutrición ortomolecular.</li>
                    <li><strong className="text-navy">Experiencia:</strong> Más de 12 años de abordaje clínico de enfermedades crónicas no transmisibles y formación hospitalaria en el Hospital Público San Bernardo.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-secondary p-6">
                <h3 className="text-lg font-bold text-navy">Matriz de competencias para programas corporativos</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
                  <li><strong className="text-navy">Diagnóstico metabólico no invasivo:</strong> mediciones segmentarias con InBody 270 para monitoreo en faena.</li>
                  <li><strong className="text-navy">Estratificación cardiometabólica:</strong> planes adaptados a perfiles bioquímicos, turnos rotativos y altitud.</li>
                  <li><strong className="text-navy">Auditoría nutricional del catering:</strong> relevamiento y optimización de minutas en campamento.</li>
                  <li><strong className="text-navy">Educación y cambio de hábitos:</strong> talleres y abordaje psico-emocional orientado a la adherencia sostenible.</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

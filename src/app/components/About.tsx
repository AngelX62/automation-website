import { motion } from 'motion/react';

const teamMembers = [
  {
    name: 'Laurentius Hanryan',
    role: 'CEO & Co-Founder',
    image: '/images/laurentius-hanryan.png',
    imageClassName: 'scale-[1.12] object-[center_12%]',
    alt: 'Portrait of Laurentius Hanryan',
    bio: 'Laurentius leads the commercial direction of Avenarc. He stays close to the pace, expectations, and client dynamics of premium firms so every system is shaped around how real engagements begin, progress, and convert.',
    focus:
      'His focus is fit, positioning, and delivery alignment so the work reflects the standard your clients experience from first inquiry onward.',
  },
  {
    name: 'Christopher Hanryan',
    role: 'CTO & Co-Founder',
    image: '/images/christopher-hanryan.png',
    imageClassName: 'object-top',
    alt: 'Portrait of Christopher Hanryan',
    bio: 'Christopher architects the technical layer behind Avenarc. He designs the intake logic, qualification structure, routing, summaries, and operational systems that keep client coordination clear and disciplined.',
    focus:
      'His focus is building infrastructure that feels quiet in use, precise in logic, and dependable under the pressure of live commercial work.',
  },
] as const;

export function About() {
  return (
    <div className="w-full">
      <section className="container mx-auto px-6 pt-24 pb-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:col-span-6 lg:col-start-4"
          >
            <span className="mb-6 block text-sm font-medium uppercase tracking-widest text-[#4A5D4E]">
              About Avenarc
            </span>
            <h1 className="text-4xl font-medium tracking-tighter leading-[1.1] md:text-6xl">
              Intelligence built for the aesthetic class.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-32 md:px-12">
        <div className="relative mb-24 aspect-[21/9] w-full overflow-hidden bg-[#E5E3DB]">
          <img
            src="https://images.unsplash.com/photo-1769515090543-1026b3848d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBuZXV0cmFsJTIwd2FybXxlbnwxfHx8fDE3NzYwNjcyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Avenarc studio minimal interior"
            className="h-full w-full object-cover grayscale-[10%]"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="border-t border-[#1A1A1A] pt-6 md:col-span-4">
            <h2 className="text-2xl font-medium tracking-tight">The Philosophy</h2>
          </div>
          <div className="border-t border-[#E5E3DB] pt-6 md:col-span-8">
            <div className="prose prose-lg max-w-none font-light leading-relaxed text-[#1A1A1A]/80">
              <p className="mb-6">
                Avenarc was founded on a simple observation: the world&apos;s most premium design, architecture, and
                real estate firms were managing their growth with the same chaotic, fragmented tools as generic
                startups.
              </p>
              <p className="mb-6">
                High-end clientele demand a seamless, invisible experience. They expect discretion, personalization,
                and promptness. When an architecture firm relies on manual follow-ups or bloated, generic software,
                cracks form in the facade. Leads fall through, communication becomes robotic, and the premium brand
                equity is diluted.
              </p>
              <p>
                We build the digital infrastructure that prevents this. We are not an &quot;AI agency.&quot; We are
                architects of logic. We design bespoke, quiet systems that operate in the background handling
                qualification, pipeline management, and communication so your firm can focus entirely on the art of your
                work.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="border-t border-[#1A1A1A] pt-6 md:col-span-4">
            <h2 className="text-2xl font-medium tracking-tight">Our Principles</h2>
          </div>
          <div className="border-t border-[#E5E3DB] pt-6 md:col-span-8">
            <ul className="space-y-12">
              {[
                {
                  title: 'Restraint Over Complexity',
                  desc: "We do not build technology for the sake of technology. Every automation must serve a distinct purpose and simplify the operational load. If a process doesn't need automation, we leave it human.",
                },
                {
                  title: 'Invisible Operation',
                  desc: 'The best systems are the ones you never notice. Our pipelines are designed to feel deeply personal to your clients, maintaining the high-touch feeling of luxury service.',
                },
                {
                  title: 'Structural Integrity',
                  desc: 'We prioritize robust data architecture over superficial features. Your CRM should be a source of absolute truth, modeled perfectly to your unique project lifecycles.',
                },
              ].map((principle) => (
                <li key={principle.title}>
                  <h3 className="mb-4 text-xl font-medium tracking-tight">{principle.title}</h3>
                  <p className="text-lg font-light leading-relaxed text-[#1A1A1A]/70">{principle.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="border-t border-[#1A1A1A] pt-6 md:col-span-4">
            <h2 className="text-2xl font-medium tracking-tight">Our Team</h2>
          </div>
          <div className="border-t border-[#E5E3DB] pt-6 md:col-span-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-lg font-light leading-relaxed text-[#1A1A1A]/80">
                Avenarc is led by two co-founders with distinct responsibilities. One stays close to the commercial
                realities of the firms we serve. The other designs the systems that keep those firms responsive,
                structured, and clear under growth.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {teamMembers.map((member) => (
                <article key={member.name} className="border border-[#E5E3DB] bg-[#F4F3EF]">
                  <div className="aspect-[4/5] overflow-hidden bg-[#E5E3DB]">
                    <img
                      src={member.image}
                      alt={member.alt}
                      className={`h-full w-full object-cover ${member.imageClassName}`}
                    />
                  </div>
                  <div className="space-y-5 p-6 md:p-8">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-widest text-[#4A5D4E]">{member.role}</p>
                      <h3 className="mt-3 text-2xl font-medium tracking-tight">{member.name}</h3>
                    </div>
                    <p className="text-base font-light leading-relaxed text-[#1A1A1A]/80">{member.bio}</p>
                    <p className="text-sm font-light leading-relaxed text-[#1A1A1A]/65">{member.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

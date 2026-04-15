import { motion } from "motion/react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Audit & Blueprint",
      desc: "We begin by analyzing your current operational flow. We identify bottlenecks in your lead capture, mapping out a structured architecture that aligns with your firm's premium positioning. No detail is too small.",
    },
    {
      num: "02",
      title: "Structural Design",
      desc: "Before any software is touched, we draft the logic. We design the wireframes of your data models, communication trees, and qualification parameters, ensuring every piece serves a specific, elegant purpose.",
    },
    {
      num: "03",
      title: "Engineering",
      desc: "The build phase. We construct the infrastructure quietly in the background, integrating your CRM, forms, and email systems into a single, cohesive ecosystem. We write custom code where off-the-shelf solutions fall short.",
    },
    {
      num: "04",
      title: "Refinement",
      desc: "Systems require calibration. We launch the automation protocols in a controlled environment, testing edge cases and refining the tone of communications to ensure the experience feels entirely human.",
    },
  ];

  return (
    <div className="w-full">
      <section className="container mx-auto px-6 pt-24 pb-32 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32 max-w-3xl"
        >
          <span className="mb-6 block text-sm font-medium uppercase tracking-widest text-[#4A5D4E]">Methodology</span>
          <h1 className="mb-8 text-5xl font-medium tracking-tighter leading-[1] md:text-7xl">
            The Architecture <br /> of Automation.
          </h1>
          <p className="text-xl font-light leading-relaxed text-[#1A1A1A]/70">
            We approach automation the same way an architect approaches a building: with rigorous planning, structural
            integrity, and an uncompromising eye for detail.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[3.5rem] top-0 bottom-0 hidden w-[1px] bg-[#E5E3DB] md:block" />

          <div className="space-y-24 md:space-y-32">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-16"
              >
                <div className="relative z-10 flex bg-[#F9F8F6] py-2 md:col-span-2 md:justify-center">
                  <span className="text-4xl font-light tracking-tighter text-[#1A1A1A] md:text-5xl">{step.num}</span>
                </div>
                <div className="md:col-span-8 md:pt-4">
                  <h3 className="mb-6 text-2xl font-medium tracking-tight md:text-3xl">{step.title}</h3>
                  <p className="text-lg font-light leading-relaxed text-[#1A1A1A]/70">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-32 text-[#F9F8F6]">
        <div className="container mx-auto px-6 text-center md:px-12">
          <h2 className="mb-8 text-3xl font-medium tracking-tighter md:text-5xl">Ready to build your foundation?</h2>
          <a
            href="/contact"
            className="inline-block border border-[#F9F8F6] px-8 py-4 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-[#F9F8F6] hover:text-[#1A1A1A]"
          >
            Initiate Project
          </a>
        </div>
      </section>
    </div>
  );
}

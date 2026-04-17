import { Link } from "react-router";
import { motion } from "motion/react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Audit and Blueprint",
      desc: "Every engagement begins with a close review of how inquiries enter the business and where momentum is lost. We examine the current flow, identify the points of friction, and define the blueprint that will support a more disciplined operation.",
    },
    {
      num: "02",
      title: "Structural Design",
      desc: "Before any workflow is built, we design the logic. Data structure, routing paths, qualification criteria, and communication flows are defined in advance. Every element serves a clear purpose before a single scenario is configured.",
    },
    {
      num: "03",
      title: "Engineering",
      desc: "Once the architecture is confirmed, we build. Intake systems, qualification logic, communication infrastructure, and reporting are assembled into a single environment designed to operate without friction or visibility.",
    },
    {
      num: "04",
      title: "Stewardship",
      desc: "Implementation is only the beginning. We remain involved through oversight, refinement, and performance review. The system is calibrated, managed, and held to standard so it stays reliable and commercially useful over time.",
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
            The Architecture <br /> of Quiet Systems.
          </h1>
          <p className="text-xl font-light leading-relaxed text-[#1A1A1A]/70">
            We approach operational infrastructure the way an architect approaches a building. With careful review,
            structural clarity, and deliberate intent. The result is infrastructure that removes friction without
            disturbing the experience your firm is known for.
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
          <h2 className="mb-8 text-3xl font-medium tracking-tighter md:text-5xl">
            Ready to review the structure behind your growth?
          </h2>
          <Link
            to="/contact"
            className="inline-block border border-[#F9F8F6] px-8 py-4 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-[#F9F8F6] hover:text-[#1A1A1A]"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

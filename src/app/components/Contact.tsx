import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="flex min-h-[80vh] w-full flex-col">
      <section className="container mx-auto flex-grow px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <span className="mb-6 block text-sm font-medium uppercase tracking-widest text-[#4A5D4E]">Consultation</span>
            <h1 className="mb-8 text-5xl font-medium tracking-tighter leading-[1] md:text-7xl">
              Let&apos;s structure your growth.
            </h1>
            <p className="mb-12 text-xl font-light leading-relaxed text-[#1A1A1A]/70">
              Submit your inquiry to begin the dialogue. We strictly partner with firms operating at the highest levels
              of design, real estate, and structural engineering.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]">Direct Line</h4>
                <a href="mailto:partners@avenarc.com" className="font-light text-[#1A1A1A]/70 transition-colors hover:text-[#4A5D4E]">
                  partners@avenarc.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="border border-[#E5E3DB] bg-[#FFFFFF] p-8 md:p-12 lg:col-span-7"
          >
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-24 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#4A5D4E]">
                  <div className="h-2 w-2 rounded-full bg-[#4A5D4E]" />
                </div>
                <h3 className="mb-4 text-3xl font-medium tracking-tight">Inquiry Received</h3>
                <p className="max-w-sm font-light text-[#1A1A1A]/70">
                  Our team will review your details and reach out within 24 hours to schedule an initial consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="group relative">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="peer w-full border-b border-[#E5E3DB] bg-transparent py-3 text-[#1A1A1A] placeholder-transparent transition-colors focus:border-[#1A1A1A] focus:outline-none"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-3 text-sm text-[#1A1A1A]/50 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A1A1A] peer-valid:-top-4 peer-valid:text-xs"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="group relative">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="peer w-full border-b border-[#E5E3DB] bg-transparent py-3 text-[#1A1A1A] placeholder-transparent transition-colors focus:border-[#1A1A1A] focus:outline-none"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-3 text-sm text-[#1A1A1A]/50 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A1A1A] peer-valid:-top-4 peer-valid:text-xs"
                    >
                      Work Email
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="peer w-full border-b border-[#E5E3DB] bg-transparent py-3 text-[#1A1A1A] placeholder-transparent transition-colors focus:border-[#1A1A1A] focus:outline-none"
                    placeholder="Company"
                  />
                  <label
                    htmlFor="company"
                    className="absolute left-0 top-3 text-sm text-[#1A1A1A]/50 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A1A1A] peer-valid:-top-4 peer-valid:text-xs"
                  >
                    Firm / Company Name
                  </label>
                </div>

                <div className="group relative pt-4">
                  <textarea
                    id="inquiry"
                    required
                    rows={4}
                    value={formData.inquiry}
                    onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                    className="peer w-full resize-none border-b border-[#E5E3DB] bg-transparent py-3 text-[#1A1A1A] placeholder-transparent transition-colors focus:border-[#1A1A1A] focus:outline-none"
                    placeholder="Inquiry Details"
                  />
                  <label
                    htmlFor="inquiry"
                    className="absolute left-0 top-7 text-sm text-[#1A1A1A]/50 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1A1A1A] peer-valid:top-0 peer-valid:text-xs"
                  >
                    Project Context or Inquiry
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group flex w-full items-center justify-between bg-[#1A1A1A] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#F9F8F6] transition-colors hover:bg-[#2C2C2C] disabled:opacity-70"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

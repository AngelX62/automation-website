import { useState } from "react";
import { motion } from "motion/react";

type IndustryKey = "interiorDesign" | "realEstate";

type ServiceItem = {
  title: string;
  description: string;
  examples: Record<IndustryKey, string>;
};

type SolutionTier = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
};

const tiers: SolutionTier[] = [
  {
    id: "01",
    title: "Every Inquiry. Accounted For.",
    subtitle: "Capture & Qualify",
    description:
      "Most studios lose clients before the first conversation. We build intake systems that capture every inquiry the moment it arrives, score it against your ideal client profile, and route it without human intervention.",
    services: [
      {
        title: "Multi-Channel Lead Capture",
        description:
          "Inquiries arrive from Instagram, WhatsApp, your website, and ad platforms simultaneously. We consolidate every channel into a single pipeline so nothing is missed and nothing requires manual entry.",
        examples: {
          interiorDesign:
            "Pulls Instagram messages, website forms, and WhatsApp inquiries into one intake view before your studio coordinator has to intervene.",
          realEstate:
            "Collects portal leads, WhatsApp messages, and website inquiries into one pipeline so every buyer request appears in the same place.",
        },
      },
      {
        title: "AI Lead Scoring",
        description:
          "Claude AI evaluates each inquiry against your criteria budget, timeline, project type, location, decision authority and returns a qualification score before you ever open your phone. You read the brief. You decide whether to engage.",
        examples: {
          interiorDesign:
            "Scores every Instagram inquiry before you invest a single hour in a discovery conversation.",
          realEstate:
            "Evaluates every portal and WhatsApp inquiry so your team responds only to buyers with genuine intent.",
        },
      },
      {
        title: "Instant Response Infrastructure",
        description:
          "The first firm to respond wins the conversation. Our systems acknowledge every new inquiry within sixty seconds, regardless of the hour. The message is professional, contextual and indistinguishable from a human reply.",
        examples: {
          interiorDesign:
            "Acknowledges every showroom request or fit out inquiry within sixty seconds, even when the studio is in meetings or on site.",
          realEstate:
            "Replies to new buyer and seller inquiries within sixty seconds so the conversation begins before another agency gets there first.",
        },
      },
    ],
  },
  {
    id: "02",
    title: "The Pipeline That Closes Itself.",
    subtitle: "Nurture & Convert",
    description:
      "A qualified lead means nothing without follow through. We build sequences that persist through silence, recover stalled proposals and move opportunities forward with the precision of a trained sales team.",
    services: [
      {
        title: "Automated Follow-Up Sequences",
        description:
          "Multi touch communication across WhatsApp and email, timed across days and weeks. Each sequence monitors conversion status and ends the moment a client responds. No over communication. No dropped threads.",
        examples: {
          interiorDesign:
            "Keeps workplace and hospitality inquiries moving after the first call with messages that stop the moment the client replies.",
          realEstate:
            "Continues the conversation with buyers, sellers, and landlords until they respond, then steps back immediately.",
        },
      },
      {
        title: "Proposal Generation",
        description:
          "When a lead reaches qualification threshold, a tailored proposal is assembled from their intake data, structured with scope, timeline and investment, and delivered without manual preparation. Proposal time drops from hours to minutes.",
        examples: {
          interiorDesign:
            "Builds a first proposal from the project brief, timeline, and scope already captured during intake.",
          realEstate:
            "Assembles valuation, listing, or buyer side proposal drafts from the inquiry record so your team moves while intent is still fresh.",
        },
      },
      {
        title: "Pipeline Discipline",
        description:
          "Leads that go quiet trigger escalation prompts. Proposals overdue for follow up surface automatically. The pipeline advances on schedule without requiring your attention to maintain its momentum.",
        examples: {
          interiorDesign:
            "Flags stalled proposals, overdue callbacks, and silent stakeholders before an opportunity fades from view.",
          realEstate:
            "Surfaces quiet buyers, overdue follow ups, and stale opportunities before momentum disappears from the deal.",
        },
      },
    ],
  },
  {
    id: "03",
    title: "Infrastructure for Firms That Intend to Grow.",
    subtitle: "Scale & Optimize",
    description:
      "Operational drag accumulates silently. Onboarding friction, missing reviews, reporting gaps. We eliminate the administrative weight so your team's capacity is reserved entirely for client work.",
    services: [
      {
        title: "Client Onboarding Automation",
        description:
          "The moment a contract is signed, a client folder is created, a welcome communication is sent and an onboarding sequence is initiated. The handoff from close to kickoff is seamless and requires no manual coordination.",
        examples: {
          interiorDesign:
            "Once a design agreement is signed, kickoff communications, folders, and onboarding steps are launched without studio admin.",
          realEstate:
            "The moment a client commits, onboarding messages, records, and next steps are triggered without waiting on manual coordination.",
        },
      },
      {
        title: "Review and Referral Collection",
        description:
          "Post project review requests are delivered at the right moment through the right channel. Positive responses are routed into your testimonial library. Referral prompts are triggered before the relationship goes dormant.",
        examples: {
          interiorDesign:
            "Sends review requests at project close, saves strong responses for testimonials, and asks for referrals while goodwill is still high.",
          realEstate:
            "Requests reviews after a close, routes positive feedback into your testimonial library, and asks for referrals before the relationship cools.",
        },
      },
      {
        title: "Performance Reporting",
        description:
          "Weekly reports are assembled automatically from your pipeline, communication records and marketing channels. A narrative summary interprets the data so you understand what is working and what requires attention.",
        examples: {
          interiorDesign:
            "Shows which channels bring the best commercial projects, where consultations stall, and which proposals convert into signed work.",
          realEstate:
            "Shows which portals and campaigns drive serious inquiries, where follow up slips, and which conversations turn into closed business.",
        },
      },
    ],
  },
];

const industryTabs: Array<{ key: IndustryKey; label: string }> = [
  { key: "interiorDesign", label: "Interior Design Studios" },
  { key: "realEstate", label: "Real Estate Agencies" },
];

export function Solutions() {
  const [industry, setIndustry] = useState<IndustryKey>("interiorDesign");

  return (
    <div className="w-full">
      <section className="container mx-auto px-6 pt-24 pb-16 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="mb-6 block text-sm font-medium uppercase tracking-widest text-[#4A5D4E]">Solutions</span>
          <h1 className="mb-8 text-5xl font-medium tracking-tighter leading-[1] md:text-7xl">
            Systems for <br /> Design-Driven Growth.
          </h1>
          <p className="max-w-2xl text-xl font-light leading-relaxed text-[#1A1A1A]/70">
            We architect infrastructures that handle the friction of acquisition and operations, allowing your firm to
            focus entirely on design and execution.
          </p>
        </motion.div>
      </section>

      <section className="border-t border-[#E5E3DB]">
        <div className="container mx-auto px-6 pt-10 md:px-12">
          <div className="flex flex-wrap gap-3">
            {industryTabs.map((tab) => {
              const isActive = industry === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setIndustry(tab.key)}
                  className={
                    isActive
                      ? "border border-[#1A1A1A] bg-[#1A1A1A] px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-[#F9F8F6] transition-colors"
                      : "border border-[#E5E3DB] px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-[#1A1A1A]/70 transition-colors hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                  }
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#1A1A1A]/60">
            Each tier is scoped and priced separately. Firms engage only the systems that match their current needs.
          </p>
        </div>

        {tiers.map((tier) => (
          <div key={tier.id} className="border-b border-[#E5E3DB] transition-colors duration-500 hover:bg-[#F4F3EF]">
            <div className="container mx-auto px-6 py-16 md:px-12 md:py-24">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                <div className="md:col-span-3">
                  <span className="mb-4 block text-4xl font-light tracking-tighter text-[#1A1A1A]/20 md:text-6xl">
                    {`Tier ${tier.id}`}
                  </span>
                  <h3 className="mb-2 text-xl font-medium tracking-tight">{tier.title}</h3>
                  <p className="text-sm font-medium uppercase tracking-widest text-[#4A5D4E]">{tier.subtitle}</p>
                </div>
                <div className="md:col-span-6 md:col-start-6">
                  <p className="mb-10 text-lg font-light leading-relaxed text-[#1A1A1A]/70">{tier.description}</p>
                  <ul className="space-y-8">
                    {tier.services.map((service) => (
                      <li key={service.title} className="flex items-start gap-4">
                        <div className="mt-3 h-[1px] w-8 shrink-0 bg-[#1A1A1A]/30" />
                        <div>
                          <p className="text-base font-medium tracking-tight text-[#1A1A1A]">{service.title}</p>
                          <p className="mt-3 text-base font-light leading-relaxed text-[#1A1A1A]/70">{service.description}</p>
                          <p className="mt-3 text-sm font-medium leading-relaxed text-[#4A5D4E]">
                            {service.examples[industry]}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

import ServicePageTemplate from "../ServicePageTemplate";

export const metadata = {
  title: "AI Outreach Engine - SM Marketing",
  description: "Autonomous prospecting that finds leads, crafts personalized emails, and books meetings on your calendar. From $4,000.",
};

export default function AIOutreachPage() {
  return (
    <ServicePageTemplate
      title="AI Outreach Engine"
      price="From $4,000"
      heroImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
      description={[
        "Cold outreach doesn't have to feel cold. Our AI Outreach Engine finds your ideal prospects, researches their businesses, and sends hyper-personalized emails that actually get replies — then books meetings directly on your calendar.",
        "The engine works autonomously. It identifies prospects matching your ideal customer profile from databases and LinkedIn, enriches their data, crafts unique emails referencing their specific situation, and manages follow-up sequences. When a prospect says yes, the AI handles scheduling without any back-and-forth.",
        "Every email is unique. The AI doesn't just swap out a name in a template — it researches each company, identifies relevant pain points, and writes a message that demonstrates genuine understanding. Open rates of 50-70% and reply rates of 15-25% are typical.",
        "Think of it as hiring a team of 10 SDRs who work around the clock, never have a bad day, and improve with every campaign. Our clients typically book 30-50 qualified meetings per month within the first 60 days."
      ]}
      steps={[
        { num: "01", title: "ICP & Messaging Strategy", desc: "We define your ideal customer profile, craft your value propositions, and design messaging angles. We identify what resonates with your target market through data analysis and testing." },
        { num: "02", title: "Prospect Database Building", desc: "We build a verified, enriched database of your ideal prospects — complete with emails, company data, tech stack, and relevant triggers that make outreach timely and relevant." },
        { num: "03", title: "AI Personalization Engine", desc: "We configure the AI to research each prospect and generate truly personalized emails. We set up multi-step sequences with smart follow-ups that adapt based on engagement signals." },
        { num: "04", title: "Launch & Scale", desc: "We start with controlled volumes, A/B test messaging, optimize based on response data, and gradually scale to maximum output while maintaining deliverability and quality." },
      ]}
      useCases={[
        { title: "B2B SaaS Companies", desc: "Fill your pipeline with qualified demo requests. The AI identifies companies using competitor tools, references specific pain points, and books demos with decision-makers." },
        { title: "Agencies & Consultancies", desc: "Stop relying on referrals alone. Build a predictable pipeline of qualified prospects who match your ideal engagement profile and are actively looking for solutions." },
        { title: "Recruiting Firms", desc: "Source candidates and clients simultaneously. The AI reaches out to passive candidates with personalized messages and connects with hiring managers at target companies." },
        { title: "Commercial Real Estate", desc: "Identify businesses that are growing, relocating, or have expiring leases. Reach out with relevant market insights and available properties before competitors do." },
      ]}
      deliverables={[
        "Ideal customer profile (ICP) definition and documentation",
        "Verified prospect database (1,000+ contacts per month)",
        "AI-personalized email sequences (3-5 touches per prospect)",
        "Email infrastructure setup with deliverability optimization",
        "Calendar integration for automated meeting booking",
        "A/B testing framework for continuous improvement",
        "Real-time campaign dashboard and analytics",
        "Response handling and lead routing automation",
        "Weekly performance reports with insights",
        "60 days of campaign management and optimization",
      ]}
    />
  );
}

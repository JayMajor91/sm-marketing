import ServicePageTemplate from "../ServicePageTemplate";

export const metadata = {
  title: "Full AI Transformation - SM Marketing",
  description: "End-to-end AI overhaul. We audit your operation, identify opportunities, and build a custom AI agent suite. From $15,000.",
};

export default function FullTransformationPage() {
  return (
    <ServicePageTemplate
      title="Full AI Transformation"
      price="From $15,000"
      heroImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80"
      description={[
        "Full AI Transformation is our flagship engagement — a complete overhaul of how your business operates. We don't just add a chatbot or automate a single workflow. We audit every department, identify every opportunity, and build an integrated AI agent suite that transforms your entire operation.",
        "This is for businesses ready to make a serious leap. We embed with your team for 4-8 weeks, mapping processes, interviewing stakeholders, and analyzing data flows. From there, we design and deploy a coordinated system of AI agents — each purpose-built for a specific function — that work together as a cohesive AI workforce.",
        "The result isn't just efficiency gains — it's a fundamental shift in what's possible. Imagine your sales team backed by AI prospecting agents, your support handled by intelligent chatbots, your data analyzed in real-time, and your operations running on autopilot. That's Full AI Transformation.",
        "Our clients typically see 40-60% cost reduction in operational overhead, 3-5x faster response times, and the ability to scale their business without proportionally scaling headcount. This is the future of business operations, delivered today."
      ]}
      steps={[
        { num: "01", title: "Deep-Dive Audit", desc: "We spend 1-2 weeks embedded with your team, mapping every process, identifying bottlenecks, and quantifying the time and cost of each manual task. We deliver a comprehensive AI opportunity report." },
        { num: "02", title: "Strategy & Architecture", desc: "We design your custom AI ecosystem — which agents to build, how they interact, what systems they connect to, and the implementation roadmap. You approve the plan before we build." },
        { num: "03", title: "Build & Deploy", desc: "We build and deploy your AI agent suite in phases, starting with the highest-impact automations. Each phase includes testing, training, and team onboarding before moving to the next." },
        { num: "04", title: "Scale & Evolve", desc: "Post-launch, we provide 60 days of hands-on optimization. We monitor performance, add capabilities, and train your team to manage and expand the system independently." },
      ]}
      useCases={[
        { title: "Growing Startups", desc: "Scale your operations without scaling headcount. Full AI Transformation lets a team of 10 operate like a team of 50 — handling support, sales, ops, and data analysis with AI agents." },
        { title: "Mid-Market Companies", desc: "Break through operational ceilings. Replace disconnected point solutions with a unified AI system that streamlines everything from lead generation to customer retention." },
        { title: "Professional Services Firms", desc: "Law firms, accounting firms, and consultancies that need to maximize billable hours. Automate admin, research, scheduling, and client communication across the entire practice." },
        { title: "E-Commerce & DTC Brands", desc: "Handle high-volume customer support, personalize marketing at scale, automate inventory and order management, and generate insights from customer data — all with a unified AI system." },
      ]}
      deliverables={[
        "Comprehensive AI opportunity audit and ROI analysis",
        "Custom AI strategy and implementation roadmap",
        "Full suite of AI agents (chatbots, voice, workflow, outreach, analytics)",
        "Cross-system integrations across your entire tool stack",
        "Custom dashboards and reporting for all AI operations",
        "Team training program and documentation",
        "Change management support for AI adoption",
        "60 days of post-launch optimization and support",
        "Quarterly review sessions for the first year",
        "Priority access to new AI capabilities and upgrades",
      ]}
    />
  );
}

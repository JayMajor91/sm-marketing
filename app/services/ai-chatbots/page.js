import ServicePageTemplate from "../ServicePageTemplate";

export const metadata = {
  title: "AI Chatbots & Support - SM Marketing",
  description: "24/7 AI-powered customer support that handles inquiries, books appointments, and qualifies leads. From $2,500.",
};

export default function AIChatbotsPage() {
  return (
    <ServicePageTemplate
      title="AI Chatbots & Support"
      price="From $2,500"
      heroImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80"
      description={[
        "Your customers expect instant responses — 24 hours a day, 7 days a week. Our AI chatbots deliver exactly that, handling customer inquiries, booking appointments, and qualifying leads while your team sleeps.",
        "Built on the latest large language models and fine-tuned for your specific business, our chatbots don't just answer FAQs — they understand context, handle complex multi-turn conversations, and know when to escalate to a human agent. They integrate seamlessly with your existing website, CRM, and booking systems.",
        "Unlike generic chatbot builders, we train your AI on your actual business data — your products, services, pricing, policies, and tone of voice. The result is a virtual team member that sounds like your brand and converts visitors into customers.",
        "Most businesses see a 60% reduction in support ticket volume within the first month, freeing your team to focus on high-value interactions that truly need a human touch."
      ]}
      steps={[
        { num: "01", title: "Discovery & Data Collection", desc: "We audit your current support channels, analyze your most common inquiries, and gather your business knowledge base — FAQs, product docs, pricing, and policies." },
        { num: "02", title: "AI Training & Customization", desc: "We build and fine-tune your chatbot using your actual data, matching your brand voice and configuring conversation flows for lead qualification, appointment booking, and support." },
        { num: "03", title: "Integration & Testing", desc: "We deploy the chatbot across your website, social channels, and messaging platforms. Rigorous testing ensures accurate responses and smooth handoffs to human agents." },
        { num: "04", title: "Launch & Optimization", desc: "We go live with monitoring in place, continuously analyzing conversations to improve accuracy, add new capabilities, and maximize conversion rates." },
      ]}
      useCases={[
        { title: "E-Commerce Stores", desc: "Answer product questions, track orders, process returns, and recommend products — all automatically. Reduce cart abandonment by engaging visitors at the right moment." },
        { title: "Service Businesses", desc: "Qualify incoming leads, book consultations, and answer pricing questions 24/7. Never miss a potential client reaching out after hours." },
        { title: "Healthcare & Wellness", desc: "Handle appointment scheduling, answer insurance questions, send reminders, and triage patient inquiries — all while maintaining HIPAA-compliant conversations." },
        { title: "Real Estate Agencies", desc: "Pre-qualify buyers, schedule property viewings, answer listing questions, and capture lead information around the clock — even on weekends and holidays." },
      ]}
      deliverables={[
        "Custom-trained AI chatbot tailored to your business",
        "Website widget with branded design",
        "CRM and calendar integration (HubSpot, Calendly, Google Calendar, etc.)",
        "Lead qualification and scoring logic",
        "Appointment booking automation",
        "Human handoff workflow for complex cases",
        "Multi-language support (if needed)",
        "Analytics dashboard with conversation insights",
        "30 days of post-launch optimization",
        "Documentation and training for your team",
      ]}
    />
  );
}

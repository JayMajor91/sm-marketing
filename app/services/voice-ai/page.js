import ServicePageTemplate from "../ServicePageTemplate";

export const metadata = {
  title: "Voice AI Agents - SM Marketing",
  description: "AI agents that make and receive phone calls with natural, human-like conversation for appointment setting. From $5,000.",
};

export default function VoiceAIPage() {
  return (
    <ServicePageTemplate
      title="Voice AI Agents"
      price="From $5,000"
      heroImage="https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=1200&q=80"
      description={[
        "Imagine an AI that answers your business phone, speaks naturally, understands context, and books appointments — all without your team lifting a finger. That's exactly what our Voice AI Agents deliver.",
        "Powered by cutting-edge speech synthesis and natural language understanding, our voice agents handle inbound and outbound calls with human-like fluency. They can navigate complex conversations, answer questions about your services, overcome objections, and seamlessly schedule meetings on your calendar.",
        "Our Voice AI doesn't sound robotic or scripted. We customize the voice, personality, and conversation style to match your brand. Callers often can't tell they're speaking with an AI — and that's the point. Every interaction feels personal and professional.",
        "For businesses drowning in missed calls and voicemails, Voice AI is a game-changer. Studies show that 80% of callers who reach voicemail don't leave a message. With Voice AI, every call is answered, every lead is captured, and every appointment is booked."
      ]}
      steps={[
        { num: "01", title: "Call Flow Design", desc: "We map out your ideal phone conversation — from greeting to booking. We identify common questions, objections, and branching scenarios unique to your business." },
        { num: "02", title: "Voice & Personality Setup", desc: "We select and customize the AI voice to match your brand identity. We program conversational style, tone, and knowledge about your services, pricing, and availability." },
        { num: "03", title: "System Integration", desc: "We connect the Voice AI to your phone system, calendar, and CRM. Calls are logged, appointments are booked in real-time, and lead data flows directly into your pipeline." },
        { num: "04", title: "Testing & Go-Live", desc: "We run extensive test calls covering every scenario. After launch, we monitor live calls, refine responses, and optimize conversion rates over the first 30 days." },
      ]}
      useCases={[
        { title: "Appointment-Based Businesses", desc: "Dental offices, salons, clinics, and consultancies that lose revenue from missed calls. Voice AI answers every call and books appointments instantly." },
        { title: "Outbound Sales Teams", desc: "Scale your outreach by having AI agents make initial qualifying calls, set appointments for your closers, and follow up on warm leads — hundreds of calls per day." },
        { title: "After-Hours Coverage", desc: "Restaurants, emergency services, and 24/7 businesses that need someone on the line at all hours. Voice AI never sleeps, never calls in sick." },
        { title: "Lead Qualification at Scale", desc: "Marketing agencies and B2B companies that generate high call volume. Voice AI qualifies leads, asks the right questions, and only routes hot prospects to your sales team." },
      ]}
      deliverables={[
        "Custom Voice AI agent with branded personality",
        "Inbound and/or outbound call handling",
        "Natural language conversation flows",
        "Calendar integration for real-time appointment booking",
        "CRM integration (call logs, lead data, recordings)",
        "Call recording and transcription",
        "Objection handling and FAQ responses",
        "Human transfer capability for complex situations",
        "Performance analytics and call reports",
        "30 days of post-launch optimization and tuning",
      ]}
    />
  );
}

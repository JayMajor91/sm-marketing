import ServicePageTemplate from "../ServicePageTemplate";

export const metadata = {
  title: "Workflow Automation - SM Marketing",
  description: "Eliminate manual data entry, email sorting, and repetitive tasks. Connect your tools, let AI handle the rest. From $3,000.",
};

export default function WorkflowAutomationPage() {
  return (
    <ServicePageTemplate
      title="Workflow Automation"
      price="From $3,000"
      heroImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80"
      description={[
        "Your team spends hours every week on tasks that don't require human creativity — copying data between spreadsheets, sorting emails, updating records, sending follow-ups. Workflow automation eliminates all of it.",
        "We connect your existing tools and build intelligent automations that handle the repetitive work. When a new lead fills out a form, the data flows to your CRM, a welcome email goes out, a Slack notification pings your sales team, and a task is created in your project management tool — all automatically, in seconds.",
        "Unlike basic Zapier setups, our automations include AI-powered decision-making. The system can read emails and route them to the right department, extract data from invoices and enter it into your accounting software, or flag anomalies in your data that need human attention.",
        "Most clients reclaim 15-20 hours per week within the first month. That's time your team can spend on strategy, creativity, and high-value work that actually moves the needle."
      ]}
      steps={[
        { num: "01", title: "Workflow Audit", desc: "We shadow your team's daily processes, identify every repetitive task, and map your current tool stack. We find the biggest time-wasters and highest-impact automation opportunities." },
        { num: "02", title: "Automation Design", desc: "We architect the automation flows — what triggers them, what actions they take, what decisions they make. We design with error handling and edge cases in mind." },
        { num: "03", title: "Build & Connect", desc: "We build the automations, connect your tools (CRM, email, spreadsheets, databases, messaging), and add AI logic for intelligent routing and decision-making." },
        { num: "04", title: "Deploy & Monitor", desc: "We go live with monitoring dashboards so you can see every automation run. We optimize for reliability and add new automations as your team identifies more opportunities." },
      ]}
      useCases={[
        { title: "Sales Operations", desc: "Auto-enrich new leads with company data, route to the right rep, trigger nurture sequences, update deal stages, and generate pipeline reports — all without manual input." },
        { title: "Finance & Accounting", desc: "Extract data from invoices, match them to purchase orders, update your books, send payment reminders, and generate monthly reconciliation reports automatically." },
        { title: "HR & Onboarding", desc: "Automate new hire paperwork, account provisioning, equipment requests, training schedules, and 30/60/90-day check-in reminders. New hires are set up before day one." },
        { title: "Customer Success", desc: "Monitor product usage, trigger health score alerts, send renewal reminders, schedule QBR prep, and flag at-risk accounts before churn happens." },
      ]}
      deliverables={[
        "Comprehensive workflow audit and automation roadmap",
        "Custom automation flows (5-10 core workflows)",
        "Tool integrations across your entire stack",
        "AI-powered decision logic and routing",
        "Error handling and fallback procedures",
        "Monitoring dashboard for all automation runs",
        "Notification system for exceptions and failures",
        "Documentation of all automated workflows",
        "Team training on managing and expanding automations",
        "30 days of post-launch support and optimization",
      ]}
    />
  );
}

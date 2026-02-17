import ServicePageTemplate from "../ServicePageTemplate";

export const metadata = {
  title: "Data & Insights - SM Marketing",
  description: "Turn documents, reports, and unstructured data into actionable insights. AI reads so your team doesn't have to. From $3,500.",
};

export default function DataInsightsPage() {
  return (
    <ServicePageTemplate
      title="Data & Insights"
      price="From $3,500"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
      description={[
        "Your business generates mountains of data — reports, contracts, emails, spreadsheets, PDFs, customer feedback. Buried in that data are insights that could transform your strategy. The problem? No one has time to read it all.",
        "Our AI-powered Data & Insights solution processes your unstructured data at machine speed, extracting key information, identifying patterns, and delivering actionable summaries. What used to take an analyst a full week now happens in minutes.",
        "The system goes beyond simple data extraction. It understands context, identifies trends over time, flags anomalies, and generates natural-language reports that any stakeholder can understand — no data science degree required.",
        "Whether you're drowning in customer survey responses, legal contracts, financial reports, or competitive intelligence, our AI reads, processes, and distills the information into clear, actionable insights your team can act on immediately."
      ]}
      steps={[
        { num: "01", title: "Data Assessment", desc: "We catalog your data sources — documents, spreadsheets, databases, reports, emails. We identify what's most valuable and what questions you need answered from your data." },
        { num: "02", title: "AI Pipeline Design", desc: "We build custom processing pipelines for each data type. This includes document parsing, entity extraction, sentiment analysis, categorization, and pattern recognition." },
        { num: "03", title: "Dashboard & Reporting", desc: "We create interactive dashboards and automated reports that surface key insights. Your team gets daily/weekly summaries highlighting what matters most and what needs attention." },
        { num: "04", title: "Continuous Learning", desc: "The system improves over time, learning what insights are most valuable to your team and refining its analysis. We add new data sources and reporting capabilities as needed." },
      ]}
      useCases={[
        { title: "Market Research Teams", desc: "Process hundreds of industry reports, news articles, and competitor filings in hours instead of weeks. Get summarized trends, emerging threats, and opportunity alerts automatically." },
        { title: "Legal & Compliance", desc: "Review contracts at scale — extract key terms, flag risky clauses, track obligations, and ensure compliance across hundreds of agreements simultaneously." },
        { title: "Customer Experience Teams", desc: "Analyze thousands of reviews, support tickets, and survey responses. Identify recurring themes, sentiment shifts, and specific product issues driving churn." },
        { title: "Financial Operations", desc: "Process invoices, reconcile transactions, analyze spending patterns, and generate variance reports. Spot anomalies and cost-saving opportunities your team would miss." },
      ]}
      deliverables={[
        "Comprehensive data source audit and integration plan",
        "Custom AI processing pipelines for your data types",
        "Document parsing and information extraction system",
        "Interactive insights dashboard with key metrics",
        "Automated report generation (daily, weekly, or monthly)",
        "Natural-language summaries and trend analysis",
        "Anomaly detection and alert system",
        "Data visualization and charting",
        "API access for integration with your existing tools",
        "30 days of refinement and additional source integration",
      ]}
    />
  );
}

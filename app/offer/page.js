"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Scroll-reveal wrapper ───────────────────────────────────────────────
function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const y = direction === "up" ? 50 : direction === "down" ? -50 : 0;
  const x = direction === "left" ? 50 : direction === "right" ? -50 : 0;
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y, x }} animate={inView ? { opacity: 1, y: 0, x: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Animated counter ────────────────────────────────────────────────────
function Counter({ end, suffix = "", prefix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0; const step = end / (duration * 60);
    const timer = setInterval(() => { start += step; if (start >= end) { setCount(end); clearInterval(timer); } else setCount(Math.floor(start)); }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// ─── SM Logo SVG ─────────────────────────────────────────────────────────
function SMLogo({ color = "#000", size = 28 }) {
  return (
    <svg width={size} height={Math.round(size * 18/28)} viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.89543 0 2 0H17C18.1046 0 19 0.895431 19 2V9H11C9.89543 9 9 9.89543 9 11V16C9 17.1046 8.10457 18 7 18H2C0.895431 18 0 17.1046 0 16V2ZM19 9V16C19 17.1046 19.8954 18 21 18H26C27.1046 18 28 17.1046 28 16V11C28 9.89543 27.1046 9 26 9H19Z" fill={color}/>
    </svg>
  );
}

const CALENDLY_URL = "https://calendly.com/jay-smmarketing/30min";

// ─── Checkmark Icon ──────────────────────────────────────────────────────
function CheckIcon({ size = 20, color = "#16a34a" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ─── Shield Icon ─────────────────────────────────────────────────────────
function ShieldIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" stroke="#16a34a" strokeWidth="2" />
    </svg>
  );
}

// ─── Value Stack Data ────────────────────────────────────────────────────
const TIERS = [
  {
    name: "AI Starter Kit",
    tagline: "Stop the Bleeding",
    price: 2500,
    totalValue: 6500,
    popular: false,
    features: [
      "Custom AI Chatbot (24/7 lead capture)",
      "Smart appointment booking integration",
      "Lead notification system (instant alerts)",
      "30 days of optimization included",
    ],
    valueItems: [
      { item: "Custom AI Chatbot Development", value: 3500 },
      { item: "Appointment Booking Integration", value: 1000 },
      { item: "Lead Alert System", value: 500 },
      { item: "30-Day Optimization", value: 1500 },
    ],
  },
  {
    name: "AI Growth Engine",
    tagline: "The Full Arsenal",
    price: 7500,
    totalValue: 30000,
    popular: true,
    features: [
      "Everything in Starter Kit, PLUS:",
      "Voice AI Agent (answers calls 24/7)",
      "AI Outreach Engine (auto-prospecting)",
      "3 Workflow Automations built for you",
      "Custom analytics dashboard",
      "60 days of optimization included",
      "3 monthly strategy calls",
      "Industry playbook & competitor report",
    ],
    valueItems: [
      { item: "AI Chatbot + Booking", value: 4500 },
      { item: "Voice AI Agent", value: 8000 },
      { item: "AI Outreach Engine", value: 6000 },
      { item: "Workflow Automation (3x)", value: 4500 },
      { item: "Custom Dashboard", value: 2500 },
      { item: "60-Day Optimization", value: 3000 },
      { item: "3 Strategy Calls", value: 1500 },
    ],
  },
  {
    name: "Full AI Transformation",
    tagline: "The Unfair Advantage",
    price: 15000,
    totalValue: 67100,
    popular: false,
    features: [
      "Everything in Growth Engine, PLUS:",
      "Full business audit & AI roadmap",
      "Data & Insights AI platform",
      "Advanced CRM/tool integrations",
      "Priority support + dedicated Slack",
      "90 days of optimization",
      "6 monthly strategy calls",
      "Quarterly AI expansion (4 new builds/year)",
    ],
    valueItems: [
      { item: "Everything in Growth Engine", value: 30000 },
      { item: "Full Business Audit & Roadmap", value: 5000 },
      { item: "Data & Insights Platform", value: 5000 },
      { item: "Advanced Integrations", value: 4000 },
      { item: "Priority Support + Slack", value: 3600 },
      { item: "90-Day Optimization", value: 4500 },
      { item: "6 Strategy Calls", value: 3000 },
      { item: "Quarterly AI Expansion (4 builds)", value: 12000 },
    ],
  },
];

const BONUSES = [
  { title: "Industry AI Playbook", value: 2000, desc: "Custom automation roadmap with 10+ opportunities ranked by ROI for your specific industry." },
  { title: "Competitor Intelligence Report", value: 1500, desc: "Deep-dive audit of your top 3 competitors' digital presence — and exactly where AI gives you the edge." },
  { title: "24/7 Emergency Support", value: 2700, desc: "Direct line to our team for 90 days. Peace of mind that someone always has your back." },
  { title: "AI Expansion Consultation", value: 500, desc: "Month 4 strategy call to identify your next automation win and keep the momentum going." },
];

const STATS = [
  { value: 20, suffix: "+", label: "Hours Saved Weekly" },
  { value: 40, suffix: "%", label: "Cost Reduction" },
  { value: 14, suffix: "x", label: "Average Client ROI" },
  { value: 30, suffix: "", label: "Days to See Results" },
];

const RESULTS = [
  { industry: "Dental Practice", metric: "$12K/mo", desc: "in new patient revenue from captured after-hours calls" },
  { industry: "Insurance Agency", metric: "94%", desc: "renewal rate (up from 82%) with automated follow-up" },
  { industry: "HVAC Company", metric: "$18K/mo", desc: "in recovered bookings from calls they used to miss" },
  { industry: "Real Estate Team", metric: "3x", desc: "more deals from same ad spend with AI lead response" },
  { industry: "Law Firm", metric: "$30K/mo", desc: "in new signed cases from AI after-hours intake" },
  { industry: "E-Commerce Brand", metric: "$45K/mo", desc: "recovered from abandoned cart AI sequences" },
];

const COMPARISON = [
  { factor: "Price", us: "$2,500–$15,000", them: "$15,000–$50,000+", diy: "$29–$349/mo (adds up)" },
  { factor: "Time to Live", us: "7–14 days", them: "2–6 months", diy: "Weeks of your time" },
  { factor: "Guarantee", us: "30-Day ROI Guarantee", them: "None", diy: "None" },
  { factor: "Customization", us: "100% custom", them: "Template-based", diy: "Generic SaaS" },
  { factor: "Maintenance", us: "Included", them: "$500–2K/mo extra", diy: "You manage it" },
  { factor: "Industry Expertise", us: "15+ playbooks", them: "Generalist", diy: "None" },
  { factor: "Contract", us: "No long-term contract", them: "6–12 months", diy: "Monthly sub" },
];

// ─── Main Offer Page ─────────────────────────────────────────────────────
export default function OfferPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedTier, setSelectedTier] = useState(1); // Growth Engine default
  const [showValueStack, setShowValueStack] = useState(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div>

      {/* ═══ NAVBAR ═══ */}
      <motion.nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "16px 0" : "24px 0",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.4s ease",
      }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <motion.a href="/" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--text-primary)" }}>
            <SMLogo />
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>SM Marketing</span>
          </motion.a>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="/" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500 }} className="nav-links">Home</a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn-primary" style={{ padding: "12px 28px", fontSize: 13 }}>
              Claim Your Spot <span style={{ fontSize: 16 }}>→</span>
            </a>
          </motion.div>
        </div>
      </motion.nav>

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 100, paddingBottom: 60, background: "linear-gradient(180deg, #fafaf8 0%, #ffffff 100%)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 900 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 100, padding: "8px 20px", marginBottom: 32 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#16a34a", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#15803d", letterSpacing: 0.5 }}>LIMITED: Only 5 spots available this month</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="hero-title"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-3px", marginBottom: 24 }}
          >
            Your business,<br/>
            running on <span style={{ fontStyle: "italic", fontWeight: 300 }}>autopilot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", color: "var(--text-secondary)", maxWidth: 650, margin: "0 auto 40px", lineHeight: 1.7 }}
          >
            We build custom AI systems that answer your calls, capture every lead, automate your busywork — and we <strong>guarantee results in 30 days or your money back.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn-primary" style={{ fontSize: 16, padding: "18px 40px" }}>
              Claim Your Spot <span style={{ fontSize: 18 }}>→</span>
            </a>
            <a href="#pricing" className="btn-secondary" style={{ fontSize: 16, padding: "18px 20px" }}>
              See the offer ↓
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ marginTop: 60, display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}
          >
            {["No contracts", "30-day guarantee", "Live in 7-14 days", "Custom-built for you"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <CheckIcon size={16} />
                <span style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section style={{ padding: "60px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, textAlign: "center" }}>
            {STATS.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div>
                  <div className="stat-value" style={{ fontSize: "3rem", fontWeight: 800, letterSpacing: "-2px", marginBottom: 4 }}>
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE PROBLEM ═══ */}
      <section className="section">
        <div className="container-small">
          <Reveal>
            <div style={{ maxWidth: 700 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>The Problem</p>
              <p className="problem-text" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 600, lineHeight: 1.4, letterSpacing: "-0.5px" }}>
                You&apos;re losing leads after hours. Your team is buried in repetitive tasks. Your competitors are already using AI.{" "}
                <span style={{ fontStyle: "italic", fontWeight: 300, opacity: 0.5 }}>And every day you wait costs you money.</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
              {[
                { num: "34%", text: "of customer inquiries come outside business hours — and most go unanswered" },
                { num: "78%", text: "of deals go to the business that responds first. Speed wins." },
                { num: "20+", text: "hours/week your team wastes on tasks AI can handle in seconds" },
              ].map((item, i) => (
                <div key={i} style={{ background: "var(--bg-secondary)", borderRadius: 16, padding: "32px 28px" }}>
                  <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-2px", marginBottom: 8 }}>{item.num}</div>
                  <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF / RESULTS ═══ */}
      <section className="section" style={{ background: "var(--bg-dark)", color: "white" }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p className="caps" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>Proven Results</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-1.5px" }}>
                Real businesses. Real numbers.
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {RESULTS.map((result, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: "32px 28px",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>{result.industry}</div>
                  <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-2px", marginBottom: 8 }}>{result.metric}</div>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{result.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING TIERS ═══ */}
      <section id="pricing" className="section">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>The Offer</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
                Choose your AI arsenal
              </h2>
              <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto" }}>
                Every tier comes with our 30-Day ROI Guarantee. No contracts. No risk.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, alignItems: "start" }}>
            {TIERS.map((tier, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  background: tier.popular ? "var(--bg-dark)" : "var(--bg-secondary)",
                  color: tier.popular ? "white" : "var(--text-primary)",
                  borderRadius: 24,
                  padding: "40px 32px",
                  position: "relative",
                  border: tier.popular ? "2px solid var(--bg-dark)" : "1px solid var(--border)",
                  transform: tier.popular ? "scale(1.03)" : "none",
                }}>
                  {tier.popular && (
                    <div style={{
                      position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                      background: "#16a34a", color: "white", padding: "6px 20px",
                      borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
                    }}>
                      Most Popular
                    </div>
                  )}

                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{tier.name}</h3>
                    <p style={{ fontSize: 14, opacity: 0.6, fontStyle: "italic" }}>{tier.tagline}</p>
                  </div>

                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 14, opacity: 0.5, textDecoration: "line-through" }}>
                      ${tier.totalValue.toLocaleString()} value
                    </span>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-2px" }}>${tier.price.toLocaleString()}</span>
                    <span style={{ fontSize: 16, opacity: 0.6, marginLeft: 4 }}>one-time</span>
                  </div>

                  <div style={{ marginBottom: 32 }}>
                    {tier.features.map((feature, fi) => (
                      <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                        <div style={{ marginTop: 2, flexShrink: 0 }}>
                          <CheckIcon size={16} color={tier.popular ? "#4ade80" : "#16a34a"} />
                        </div>
                        <span style={{ fontSize: 14, lineHeight: 1.5, opacity: fi === 0 && i > 0 ? 0.7 : 1, fontWeight: fi === 0 && i > 0 ? 600 : 400 }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: "block", textAlign: "center", textDecoration: "none",
                      background: tier.popular ? "white" : "var(--bg-dark)",
                      color: tier.popular ? "black" : "white",
                      padding: "16px 32px", borderRadius: 60, fontWeight: 700, fontSize: 15,
                      transition: "all 0.3s ease", letterSpacing: 0.5,
                    }}
                  >
                    Get Started →
                  </a>

                  <button
                    onClick={() => setShowValueStack(showValueStack === i ? null : i)}
                    style={{
                      display: "block", width: "100%", textAlign: "center", marginTop: 12,
                      background: "none", border: "none", cursor: "pointer",
                      color: tier.popular ? "rgba(255,255,255,0.5)" : "var(--text-muted)",
                      fontSize: 13, fontWeight: 500, fontFamily: "inherit",
                    }}
                  >
                    {showValueStack === i ? "Hide" : "See"} full value breakdown ↓
                  </button>

                  <AnimatePresence>
                    {showValueStack === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: "hidden", marginTop: 16 }}
                      >
                        <div style={{
                          borderTop: `1px solid ${tier.popular ? "rgba(255,255,255,0.15)" : "var(--border)"}`,
                          paddingTop: 16,
                        }}>
                          {tier.valueItems.map((vi, vii) => (
                            <div key={vii} style={{
                              display: "flex", justifyContent: "space-between", alignItems: "center",
                              padding: "8px 0", fontSize: 13, opacity: 0.8,
                            }}>
                              <span>{vi.item}</span>
                              <span style={{ fontWeight: 600 }}>${vi.value.toLocaleString()}</span>
                            </div>
                          ))}
                          <div style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            padding: "12px 0", fontSize: 15, fontWeight: 800,
                            borderTop: `1px solid ${tier.popular ? "rgba(255,255,255,0.15)" : "var(--border)"}`,
                            marginTop: 8,
                          }}>
                            <span>Total Value</span>
                            <span>${tier.totalValue.toLocaleString()}</span>
                          </div>
                          <div style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            padding: "8px 0", fontSize: 15, fontWeight: 800,
                            color: "#16a34a",
                          }}>
                            <span>You Pay</span>
                            <span>${tier.price.toLocaleString()}</span>
                          </div>
                          <div style={{
                            textAlign: "center", marginTop: 8,
                            fontSize: 13, fontWeight: 700,
                            color: "#16a34a",
                          }}>
                            You save ${(tier.totalValue - tier.price).toLocaleString()} ({Math.round((1 - tier.price / tier.totalValue) * 100)}% off)
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BONUSES ═══ */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>Free Bonuses</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
                Plus $6,700 in bonuses — free
              </h2>
              <p style={{ fontSize: 18, color: "var(--text-secondary)" }}>
                Included with Growth Engine and Transformation tiers
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
            {BONUSES.map((bonus, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  background: "white", borderRadius: 20, padding: "32px 28px",
                  border: "1px solid var(--border)", height: "100%",
                }}>
                  <div style={{
                    display: "inline-block", background: "#f0fdf4", color: "#15803d",
                    padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 700, marginBottom: 16,
                  }}>
                    ${bonus.value.toLocaleString()} value — FREE
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{bonus.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>{bonus.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GUARANTEE ═══ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <div style={{
              background: "#fafaf8", borderRadius: 24, padding: "60px 48px",
              border: "2px solid var(--border)", textAlign: "center",
            }}>
              <ShieldIcon size={56} />
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-1px", marginTop: 24, marginBottom: 16 }}>
                The 30-Day ROI Guarantee
              </h2>
              <p style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 600, margin: "0 auto 32px" }}>
                If your AI systems don&apos;t save you <strong>at least 15 hours per week</strong> OR generate <strong>at least $5,000 in new pipeline value</strong> within 30 days of going live, we&apos;ll work for free until they do — or <strong>refund every penny</strong>.
              </p>
              <div style={{
                display: "inline-block", background: "#f0fdf4", border: "1px solid #bbf7d0",
                borderRadius: 12, padding: "16px 24px", fontSize: 15, fontWeight: 600, color: "#15803d",
              }}>
                ✓ No questions asked &nbsp;&nbsp; ✓ No fine print &nbsp;&nbsp; ✓ Zero risk
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CLIENT ROI CALCULATOR ═══ */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-small">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>The Math</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1.5px" }}>
                Why the ROI is undeniable
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ background: "white", borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
              <div style={{ padding: "32px 32px 16px", borderBottom: "1px solid var(--border)" }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Growth Engine Client — $7,500 Investment</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>Conservative monthly return estimates</p>
              </div>
              <div style={{ padding: "0 32px" }}>
                {[
                  { label: "Staff time saved (20 hrs/week × $25/hr)", monthly: "$2,000", annual: "$24,000" },
                  { label: "Captured after-hours leads (10+ leads/mo)", monthly: "$3,000", annual: "$36,000" },
                  { label: "Reduced no-shows (40% improvement)", monthly: "$1,500", annual: "$18,000" },
                  { label: "Faster response → higher close rate", monthly: "$2,500", annual: "$30,000" },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: "grid", gridTemplateColumns: "1fr auto auto",
                    gap: 16, padding: "16px 0", borderBottom: "1px solid var(--border)",
                    fontSize: 14, alignItems: "center",
                  }}>
                    <span style={{ color: "var(--text-secondary)" }}>{row.label}</span>
                    <span style={{ fontWeight: 600, textAlign: "right", minWidth: 70 }}>{row.monthly}/mo</span>
                    <span style={{ fontWeight: 600, textAlign: "right", minWidth: 80, color: "#16a34a" }}>{row.annual}/yr</span>
                  </div>
                ))}
              </div>
              <div style={{
                padding: "24px 32px", background: "var(--bg-dark)", color: "white",
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 24, textAlign: "center",
              }}>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-1px" }}>$108K</div>
                  <div style={{ fontSize: 12, opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>Annual Value</div>
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-1px", color: "#4ade80" }}>14.4x</div>
                  <div style={{ fontSize: 12, opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>Year 1 ROI</div>
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-1px" }}>&lt;30 days</div>
                  <div style={{ fontSize: 12, opacity: 0.6, textTransform: "uppercase", letterSpacing: 1 }}>Payback Period</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>Why Us</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1.5px" }}>
                SM Marketing vs. the alternatives
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ overflowX: "auto" }}>
              <div style={{ minWidth: 700 }}>
                {/* Header */}
                <div style={{
                  display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                  gap: 0, marginBottom: 2,
                }}>
                  <div style={{ padding: "16px 20px" }} />
                  <div style={{ padding: "16px 20px", background: "var(--bg-dark)", color: "white", borderRadius: "12px 12px 0 0", textAlign: "center", fontWeight: 700, fontSize: 14 }}>
                    SM Marketing
                  </div>
                  <div style={{ padding: "16px 20px", background: "var(--bg-secondary)", borderRadius: "12px 12px 0 0", textAlign: "center", fontWeight: 700, fontSize: 14, color: "var(--text-secondary)" }}>
                    Other AI Agencies
                  </div>
                  <div style={{ padding: "16px 20px", background: "var(--bg-secondary)", borderRadius: "12px 12px 0 0", textAlign: "center", fontWeight: 700, fontSize: 14, color: "var(--text-secondary)" }}>
                    DIY Platforms
                  </div>
                </div>

                {/* Rows */}
                {COMPARISON.map((row, i) => (
                  <div key={i} style={{
                    display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                    gap: 0, borderBottom: "1px solid var(--border)",
                  }}>
                    <div style={{ padding: "14px 20px", fontSize: 14, fontWeight: 600 }}>{row.factor}</div>
                    <div style={{ padding: "14px 20px", background: "rgba(0,0,0,0.03)", fontSize: 14, fontWeight: 600, textAlign: "center", color: "#16a34a" }}>{row.us}</div>
                    <div style={{ padding: "14px 20px", fontSize: 13, textAlign: "center", color: "var(--text-muted)" }}>{row.them}</div>
                    <div style={{ padding: "14px 20px", fontSize: 13, textAlign: "center", color: "var(--text-muted)" }}>{row.diy}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-small">
          <Reveal>
            <div style={{ marginBottom: 64 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>How It Works</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1px" }}>
                Three steps. Two weeks. Done.
              </h2>
            </div>
          </Reveal>

          {[
            { num: "01", title: "30-Minute Discovery Call", desc: "We analyze your business, map your pain points, and design a custom AI solution — with specific ROI projections for your business. Zero commitment." },
            { num: "02", title: "We Build Everything (7-14 Days)", desc: "Our team builds, tests, and deploys your AI systems. You give us ~2 hours of input. We handle everything else — integrations, training, optimization." },
            { num: "03", title: "Results Within 30 Days (Guaranteed)", desc: "Your AI goes live and starts working immediately — capturing leads, answering calls, automating tasks. If you don't hit our ROI benchmarks, you don't pay." },
          ].map((step, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="process-step" style={{ display: "flex", gap: 40, alignItems: "flex-start", padding: "48px 0", borderTop: "1px solid var(--border)" }}>
                <span className="process-step-num" style={{ fontSize: "4rem", fontWeight: 800, color: "var(--border)", letterSpacing: "-2px", lineHeight: 1, flexShrink: 0 }}>{step.num}</span>
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 500 }}>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section">
        <div className="container-small">
          <Reveal>
            <div style={{ marginBottom: 48 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>Questions</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1px" }}>
                Common objections, addressed
              </h2>
            </div>
          </Reveal>

          {[
            { q: "\"It's too expensive\"", a: "Our Growth Engine is $7,500. Most AI agencies charge $15-50K for less. And with our guarantee, if it doesn't generate at least $5K in pipeline value in 30 days, you get a full refund. The real question: how much is doing nothing costing you every month?" },
            { q: "\"I tried AI tools before and they didn't work\"", a: "Generic AI tools fail because they're not built for your business. We build custom — trained on your industry, your workflows, your customer language. That's the difference between a chatbot that says 'I don't understand' and one that actually books appointments." },
            { q: "\"I don't have time to implement this\"", a: "You don't need time — that's the point. We need about 2 hours total from you: one hour for discovery, one hour for review. We handle everything else. Your AI is live in 1-2 weeks." },
            { q: "\"What if it doesn't work for my industry?\"", a: "We have AI playbooks for 15+ industries — dental, insurance, real estate, law firms, HVAC, e-commerce, and more. If we've seen your industry, the use cases are already mapped. If we haven't, we'll tell you upfront." },
            { q: "\"Can I just hire someone instead?\"", a: "A good AI engineer costs $150-200/hr and would take 80-120 hours. That's $12K-24K minimum, plus you manage them. We deliver more for a fraction of the cost because we've already built the frameworks." },
          ].map((faq, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ padding: "28px 0", borderTop: "1px solid var(--border)" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{faq.q}</h3>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 700 }}>{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="section" style={{ background: "var(--bg-dark)", color: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 100, padding: "8px 20px", marginBottom: 32,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", letterSpacing: 0.5 }}>Spots filling fast — don&apos;t miss out</span>
            </div>
            <h2 className="cta-heading" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 24 }}>
              Ready to put your<br/>business on autopilot?
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", maxWidth: 550, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Book a free 30-minute discovery call. We&apos;ll map your AI opportunities and show you exactly what we&apos;d build — with ROI projections. Zero obligation.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn-primary" style={{
              background: "white", color: "black", fontSize: 16, padding: "20px 48px",
            }}>
              Book Your Free Discovery Call <span style={{ fontSize: 18 }}>→</span>
            </a>
            <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
              {["30-Day ROI Guarantee", "No Contracts", "Live in 14 Days"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <CheckIcon size={14} color="#4ade80" />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 60 }}>
            <div>
              <div style={{ marginBottom: 24 }}><SMLogo color="#fff" size={36} /></div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, maxWidth: 350, marginBottom: 32 }}>
                Custom AI automation that saves you time, captures more leads, and grows your business — guaranteed.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn-primary" style={{ background: "white", color: "black", padding: "12px 24px", fontSize: 13 }}>
                  Get Started <span>→</span>
                </a>
                <a href="/" className="btn-secondary" style={{ color: "rgba(255,255,255,0.6)", padding: "12px 16px" }}>Home</a>
              </div>
            </div>
            <div>
              <p className="caps" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Explore</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="/">Home</a>
                <a href="#pricing">Pricing</a>
                <a href={CALENDLY_URL} target="_blank" rel="noopener">Book a Call</a>
              </div>
            </div>
            <div>
              <p className="caps" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="mailto:jay@smmarketing.xyz">jay@smmarketing.xyz</a>
                <a href={CALENDLY_URL} target="_blank" rel="noopener">Schedule a Call</a>
              </div>
            </div>
            <div>
              <p className="caps" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Follow</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="https://www.linkedin.com/company/the-smmarketing/" target="_blank" rel="noopener">LinkedIn</a>
                <a href="https://x.com/Thesmmarketing" target="_blank" rel="noopener">X / Twitter</a>
                <a href="https://www.youtube.com/@The-SM-Marketing" target="_blank" rel="noopener">YouTube</a>
                <a href="https://www.tiktok.com/@thesmmarketing" target="_blank" rel="noopener">TikTok</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom" style={{ borderTop: "1px solid var(--border-dark)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
              Copyright © {new Date().getFullYear()} • Design & Developed by <span style={{ color: "white" }}>SM Marketing</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Pulse animation */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}

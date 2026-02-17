"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

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
function Counter({ end, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0; const step = end / (duration * 60);
    const timer = setInterval(() => { start += step; if (start >= end) { setCount(end); clearInterval(timer); } else setCount(Math.floor(start)); }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── SM Logo SVG ─────────────────────────────────────────────────────────
function SMLogo({ color = "#000", size = 28 }) {
  return (
    <svg width={size} height={Math.round(size * 18/28)} viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.89543 0 2 0H17C18.1046 0 19 0.895431 19 2V9H11C9.89543 9 9 9.89543 9 11V16C9 17.1046 8.10457 18 7 18H2C0.895431 18 0 17.1046 0 16V2ZM19 9V16C19 17.1046 19.8954 18 21 18H26C27.1046 18 28 17.1046 28 16V11C28 9.89543 27.1046 9 26 9H19Z" fill={color}/>
    </svg>
  );
}

// ─── Services data ───────────────────────────────────────────────────────
const SERVICES = [
  { title: "AI Chatbots & Support", desc: "24/7 AI-powered customer support that handles inquiries, books appointments, and qualifies leads.", price: "From $2,500", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", slug: "ai-chatbots" },
  { title: "Voice AI Agents", desc: "AI agents that make and receive phone calls with natural, human-like conversation for appointment setting.", price: "From $5,000", img: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&q=80", slug: "voice-ai" },
  { title: "Workflow Automation", desc: "Eliminate manual data entry, email sorting, and repetitive tasks. Connect your tools, let AI handle the rest.", price: "From $3,000", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80", slug: "workflow-automation" },
  { title: "AI Outreach Engine", desc: "Autonomous prospecting that finds leads, crafts personalized emails, and books meetings on your calendar.", price: "From $4,000", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80", slug: "ai-outreach" },
  { title: "Data & Insights", desc: "Turn documents, reports, and unstructured data into actionable insights. AI reads so your team doesn't have to.", price: "From $3,500", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", slug: "data-insights" },
  { title: "Full AI Transformation", desc: "End-to-end AI overhaul. We audit your operation, identify opportunities, and build a custom AI agent suite.", price: "From $15,000", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", slug: "full-transformation" },
];

const PAIN_POINTS = [
  { title: "Missed Opportunities", desc: "Your team is buried in manual tasks while leads slip through the cracks and customers wait hours for responses.", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80" },
  { title: "Generic Solutions", desc: "Most agencies offer cookie-cutter automation that doesn't fit your specific workflows or industry needs.", img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80" },
  { title: "Technical Complexity", desc: "AI implementation requires deep technical understanding — something most marketing agencies simply don't have.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" },
];

const STATS = [
  { value: 20, suffix: "+", label: "Hours Saved Weekly" },
  { value: 40, suffix: "%", label: "Cost Reduction" },
  { value: 3, suffix: "x", label: "Faster Response" },
  { value: 95, suffix: "%", label: "Client Retention" },
];

// ─── Main Page ───────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="nav-links" style={{ display: "flex", gap: 40, alignItems: "center" }}>
            <a href="#services" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.3s" }}>Services</a>
            <a href="#process" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>How It Works</a>
            <a href="#pricing" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Pricing</a>
            <a href="https://calendly.com/jay-smmarketing/30min" target="_blank" rel="noopener" className="btn-primary" style={{ padding: "12px 28px", fontSize: 13 }}>
              Get Started <span style={{ fontSize: 16 }}>→</span>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="nav-mobile-cta" style={{ display: "none" }}>
            <a href="https://calendly.com/jay-smmarketing/30min" target="_blank" rel="noopener" className="btn-primary" style={{ padding: "10px 20px", fontSize: 13 }}>
              Get Started <span style={{ fontSize: 16 }}>→</span>
            </a>
          </motion.div>
        </div>
      </motion.nav>

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", paddingTop: 100 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-4px", marginBottom: 0 }}
          >
            AI<br/>
            automation for<br/>
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>everyone</span>
          </motion.h1>
        </div>
      </section>

      {/* ═══ AVAILABLE FOR WORK MARQUEE ═══ */}
      <div style={{ padding: "16px 0", overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="marquee-track" style={{ display: "flex", gap: 32, whiteSpace: "nowrap" }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ display: "flex", gap: 32, alignItems: "center" }}>
              <span className="caps" style={{ color: "var(--text-muted)" }}>AVAILABLE FOR WORK</span>
              <span className="elipse" style={{ opacity: 0.3 }} />
            </div>
          ))}
        </div>
      </div>

      {/* ═══ PROBLEM STATEMENT ═══ */}
      <section className="section">
        <div className="container-small">
          <Reveal>
            <div style={{ maxWidth: 800 }}>
              <p className="problem-text" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.3, letterSpacing: "-1px" }}>
                We noticed innovative businesses{" "}
                <span style={{ fontStyle: "italic", fontWeight: 300, opacity: 0.5 }}>weren't getting results</span>{" "}
                from the automation tools they were using, costing them not only money, but more importantly, <strong>time.</strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ PAIN POINTS (Parallax Cards) ═══ */}
      <section style={{ padding: "40px 0 120px" }}>
        <div className="container-small">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PAIN_POINTS.map((pain, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="pain-card" style={{
                  display: "flex", borderRadius: 20, overflow: "hidden", background: "var(--bg-secondary)",
                  minHeight: 280, position: "relative",
                }}>
                  <div className="pain-card-text" style={{ flex: 1, padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{pain.title}</h3>
                    <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 400 }}>{pain.desc}</p>
                  </div>
                  <div className="pain-card-image" style={{ width: "40%", position: "relative", overflow: "hidden" }}>
                    <img src={pain.img} alt={pain.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div className="mask-frame" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div style={{ marginTop: 48 }}>
              <a href="#services" className="btn-primary">
                View our services <span>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, textAlign: "center" }}>
            {STATS.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div>
                  <div className="stat-value" style={{ fontSize: "3.5rem", fontWeight: 800, letterSpacing: "-2px", marginBottom: 8 }}>
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION (SM Style) ═══ */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <p className="cta-heading" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-2px", textTransform: "uppercase", maxWidth: 900, margin: "0 auto 32px" }}>
              We offer tailored AI solutions
            </p>
            <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto 0", lineHeight: 1.7 }}>
              By understanding your needs, market, and what works best, SM Marketing provides AI automation solutions that gear you towards success.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="section">
        <div className="container">
          <div id="pricing" className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {SERVICES.map((service, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a href={`/services/${service.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="service-card">
                    <div style={{ overflow: "hidden", height: 240 }}>
                      <img src={service.img} alt={service.title} className="service-card-image" />
                    </div>
                    <div style={{ padding: "28px 28px 32px" }}>
                      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{service.title}</h3>
                      <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>{service.desc}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                        <span style={{ fontSize: 18, fontWeight: 700 }}>{service.price}</span>
                        <span style={{ fontSize: 20 }}>→</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section id="process" className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-small">
          <Reveal>
            <div style={{ marginBottom: 80 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>How It Works</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1px" }}>
                Three steps to AI automation
              </h2>
            </div>
          </Reveal>

          {[
            { num: "01", title: "Discovery Call", desc: "We analyze your business, identify pain points, and map out the highest-impact automation opportunities. 30 minutes, no commitment." },
            { num: "02", title: "Build & Deploy", desc: "We develop custom AI solutions tailored to your specific workflows. Most projects go live within 1-2 weeks." },
            { num: "03", title: "Optimize & Scale", desc: "We continuously monitor, fine-tune, and expand your AI systems for maximum performance and ROI." },
          ].map((step, i) => (
            <Reveal key={i} delay={i * 0.15}>
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

      {/* ═══ FINAL CTA ═══ */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <p className="cta-heading" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 40 }}>
              Ready for Growth with<br/>SM Marketing?
            </p>
            <a href="https://calendly.com/jay-smmarketing/30min" target="_blank" rel="noopener" className="btn-primary" style={{ fontSize: 16, padding: "18px 40px" }}>
              Get Started <span style={{ fontSize: 18 }}>→</span>
            </a>
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
                We place great emphasis on providing businesses with AI automation that truly impacts their growth in an outrageously positive way.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="https://calendly.com/jay-smmarketing/30min" target="_blank" rel="noopener" className="btn-primary" style={{ background: "white", color: "black", padding: "12px 24px", fontSize: 13 }}>
                  Get Started <span>→</span>
                </a>
                <a href="#services" className="btn-secondary" style={{ color: "rgba(255,255,255,0.6)", padding: "12px 16px" }}>Our Services</a>
              </div>
            </div>
            <div>
              <p className="caps" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Explore</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="/">Home</a>
                <a href="#process">How It Works</a>
                <a href="#services">Services</a>
                <a href="#pricing">Pricing</a>
              </div>
            </div>
            <div>
              <p className="caps" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>More</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="https://calendly.com/jay-smmarketing/30min" target="_blank" rel="noopener">Book a Call</a>
                <a href="mailto:jay@smmarketing.xyz">Contact Us</a>
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
    </div>
  );
}

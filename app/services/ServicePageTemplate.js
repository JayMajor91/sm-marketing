"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

// ─── SM Logo SVG ─────────────────────────────────────────────────────────
function SMLogo({ color = "#000", size = 28 }) {
  return (
    <svg width={size} height={Math.round(size * 18/28)} viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.89543 0 2 0H17C18.1046 0 19 0.895431 19 2V9H11C9.89543 9 9 9.89543 9 11V16C9 17.1046 8.10457 18 7 18H2C0.895431 18 0 17.1046 0 16V2ZM19 9V16C19 17.1046 19.8954 18 21 18H26C27.1046 18 28 17.1046 28 16V11C28 9.89543 27.1046 9 26 9H19Z" fill={color}/>
    </svg>
  );
}

const CALENDLY_URL = "https://calendly.com/jay-smmarketing/30min";

export default function ServicePageTemplate({
  title,
  price,
  heroImage,
  description,    // array of paragraphs
  steps,          // array of { num, title, desc }
  useCases,       // array of { title, desc }
  deliverables,   // array of strings
}) {
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
            <a href="/#services" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.3s" }}>Services</a>
            <a href="/#process" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>How It Works</a>
            <a href="/#pricing" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Pricing</a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn-primary" style={{ padding: "12px 28px", fontSize: 13 }}>
              Get Started <span style={{ fontSize: 16 }}>→</span>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="nav-mobile-cta" style={{ display: "none" }}>
            <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn-primary" style={{ padding: "10px 20px", fontSize: 13 }}>
              Get Started <span style={{ fontSize: 16 }}>→</span>
            </a>
          </motion.div>
        </div>
      </motion.nav>

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", paddingTop: 120, paddingBottom: 60 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500, marginBottom: 40 }}>
              <span style={{ fontSize: 18 }}>←</span> Back to Home
            </a>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-3px", marginBottom: 24 }}
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span style={{ display: "inline-block", fontSize: 24, fontWeight: 700, padding: "12px 32px", background: "var(--bg-secondary)", borderRadius: 60 }}>{price}</span>
          </motion.div>
        </div>
      </section>

      {/* ═══ HERO IMAGE ═══ */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <Reveal>
            <div style={{ borderRadius: 24, overflow: "hidden", maxHeight: 480 }}>
              <img src={heroImage} alt={title} style={{ width: "100%", height: 480, objectFit: "cover" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ DESCRIPTION ═══ */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container-small">
          <Reveal>
            <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>Overview</p>
          </Reveal>
          {description.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p style={{ fontSize: 18, color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)", lineHeight: 1.8, marginBottom: 24, fontWeight: i === 0 ? 600 : 400 }}>
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-small">
          <Reveal>
            <div style={{ marginBottom: 64 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>Process</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1px" }}>
                How It Works
              </h2>
            </div>
          </Reveal>

          {steps.map((step, i) => (
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

      {/* ═══ USE CASES ═══ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 64, maxWidth: 600 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>Use Cases</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1px" }}>
                Who It's For
              </h2>
            </div>
          </Reveal>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {useCases.map((uc, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: "var(--bg-secondary)", borderRadius: 20, padding: "40px 36px" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{uc.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOU GET ═══ */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-small">
          <Reveal>
            <div style={{ marginBottom: 48 }}>
              <p className="caps" style={{ color: "var(--text-muted)", marginBottom: 16 }}>Deliverables</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1px" }}>
                What You Get
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {deliverables.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "24px 0", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 17, fontWeight: 500 }}>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <p className="cta-heading" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 24 }}>
              Ready to Get Started?
            </p>
            <p style={{ fontSize: 18, color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Book a free 30-minute discovery call. We'll map out how {title.toLowerCase()} can transform your business.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn-primary" style={{ fontSize: 16, padding: "18px 40px" }}>
              Book Your Free Call <span style={{ fontSize: 18 }}>→</span>
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
                <a href={CALENDLY_URL} target="_blank" rel="noopener" className="btn-primary" style={{ background: "white", color: "black", padding: "12px 24px", fontSize: 13 }}>
                  Get Started <span>→</span>
                </a>
                <a href="/#services" className="btn-secondary" style={{ color: "rgba(255,255,255,0.6)", padding: "12px 16px" }}>Our Services</a>
              </div>
            </div>
            <div>
              <p className="caps" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Explore</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="/">Home</a>
                <a href="/#process">How It Works</a>
                <a href="/#services">Services</a>
                <a href="/#pricing">Pricing</a>
              </div>
            </div>
            <div>
              <p className="caps" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>More</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href={CALENDLY_URL} target="_blank" rel="noopener">Book a Call</a>
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

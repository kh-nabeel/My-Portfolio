"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, MapPin, GraduationCap } from "lucide-react";
import { siteData } from "@/lib/data";
import { GithubIcon, LinkedinIcon, BehanceIcon } from "@/components/icons";

/* ── SKILL ICONS (inline SVGs, no Tailwind classes) ─────── */
const SKILL_ICONS: Record<string, ReactNode> = {
  Figma: (
    <svg viewBox="0 0 38 57" fill="none" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    </svg>
  ),
  "Affinity Designer": (
    <svg viewBox="0 0 128 128" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <rect width="128" height="128" rx="28" fill="#222E50" />
      <path d="M64 18L18 110h92L64 18z" fill="none" stroke="#7BB7FF" strokeWidth="8" />
      <text x="50%" y="90" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#7BB7FF" fontFamily="Arial">a</text>
    </svg>
  ),
  Canva: (
    <svg viewBox="0 0 128 128" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <rect width="128" height="128" rx="28" fill="#7D2AE8" />
      <text x="50%" y="76" textAnchor="middle" fontSize="36" fontWeight="bold" fill="white" fontFamily="Arial">C</text>
    </svg>
  ),
  Wireframing: (
    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, flexShrink: 0 }} fill="none">
      <rect x="2" y="3" width="20" height="16" rx="2" stroke="#888" strokeWidth="1.5" />
      <path d="M2 7h20M7 7v12" stroke="#888" strokeWidth="1.5" />
    </svg>
  ),
  Prototyping: (
    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, flexShrink: 0 }} fill="none">
      <circle cx="12" cy="12" r="9" stroke="#00E87A" strokeWidth="1.5" />
      <path d="M12 8v4l3 3" stroke="#00E87A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "UI/UX Design": (
    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, flexShrink: 0 }} fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#00E87A" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#00E87A" />
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 128 128" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" />
      <path fill="#F16529" d="M64 116.8l36.379-10.086 8.559-95.878H64z" />
      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
      <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.336-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 128 128" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" />
      <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354H64.001v106.49z" />
      <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z" />
      <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.732 28.331 7.864.063-.018z" />
      <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.641l28.354-7.858.208-2.337 2.406-26.932z" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 128 128" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <rect width="128" height="128" fill="#F0DB4F" />
      <path d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c1.453 2.575 2.232 3.501 4.546 3.436 1.845.361 3.668.156 5.106-.988 1.135-.905 1.439-1.797 1.439-5.765V58.708h11.364v41.655c-.082 5.656-.417 8.838-1.127 10.15zm31.357 2.385c-2.777 4.576-8.299 7.304-15.271 7.165-4.965-.106-9.508-1.671-12.532-4.286-2.001-1.735-3.719-4.396-4.064-6.396l9.649-5.789c.408 1.418 2.675 4.125 5.296 3.609 1.856-.363 3.357-1.352 3.956-3.583.224-.832.176-5.47.176-5.47V58.708h11.386v41.655c-.001 3.244-.14 5.975-.318 9.535z" fill="#323330" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 128 128" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <path d="M63.39 3C41.3 3 42.71 12.46 42.71 12.46l.03 9.81H63.7v2.94H26.93S16 23.85 16 46.17c0 22.32 12.34 21.52 12.34 21.52h7.36V57.7s-.4-12.32 12.12-12.32h20.87s11.73.19 11.73-11.34V14.19S82.63 3 63.39 3z" fill="#387EB8" />
      <path d="M64.61 125c22.09 0 20.68-9.46 20.68-9.46l-.03-9.81H64.3v-2.94h36.77S112 104.15 112 81.83c0-22.32-12.34-21.52-12.34-21.52h-7.36V70.3s.4 12.32-12.12 12.32H59.31S47.58 82.43 47.58 93.96v20.85S45.37 125 64.61 125z" fill="#FFD43B" />
    </svg>
  ),
  "Java/C": (
    <svg viewBox="0 0 128 128" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <rect width="128" height="128" rx="20" fill="#5382A1" />
      <text x="12" y="88" fontFamily="monospace" fontWeight="bold" fontSize="52" fill="white">J</text>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 128 128" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <rect width="128" height="128" rx="20" fill="#00618A" />
      <text x="10" y="76" fontFamily="Arial" fontWeight="bold" fontSize="28" fill="white">SQL</text>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 128 128" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <rect width="128" height="128" rx="28" fill="#24292E" />
      <path fill="white" d="M64 8.4C33.1 8.4 8.1 33.4 8.1 64.3c0 24.7 16 45.6 38.2 53 2.8.5 3.8-1.2 3.8-2.7 0-1.3-.1-5.7-.1-10.3-15.6 3.4-18.9-6.6-18.9-6.6-2.6-6.4-6.3-8.1-6.3-8.1-5.1-3.5.4-3.4.4-3.4 5.7.4 8.7 5.8 8.7 5.8 5 8.6 13.2 6.1 16.4 4.7.5-3.6 2-6.1 3.6-7.5-12.5-1.4-25.6-6.2-25.6-27.7 0-6.1 2.2-11.1 5.8-15-.6-1.4-2.5-7.1.6-14.8 0 0 4.7-1.5 15.4 5.7 4.5-1.2 9.2-1.8 14-1.8 4.7 0 9.5.6 14 1.8 10.7-7.2 15.4-5.7 15.4-5.7 3.1 7.7 1.2 13.4.6 14.8 3.6 3.9 5.8 8.9 5.8 15 0 21.5-13.1 26.3-25.6 27.7 2 1.7 3.8 5.2 3.8 10.5 0 7.5-.1 13.6-.1 15.4 0 1.5 1 3.2 3.8 2.7C104 109.9 120 89 120 64.3 120 33.4 95 8.4 64 8.4z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 128 128" style={{ width: 20, height: 20, flexShrink: 0 }}>
      <rect width="128" height="128" rx="28" fill="#20232A" />
      <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
      <ellipse cx="64" cy="64" rx="57" ry="21" stroke="#61DAFB" strokeWidth="5" fill="none" />
      <ellipse cx="64" cy="64" rx="57" ry="21" stroke="#61DAFB" strokeWidth="5" fill="none" transform="rotate(60 64 64)" />
      <ellipse cx="64" cy="64" rx="57" ry="21" stroke="#61DAFB" strokeWidth="5" fill="none" transform="rotate(120 64 64)" />
    </svg>
  ),
};

const DESIGN_SKILLS = ["Figma", "Affinity Designer", "Canva", "Wireframing", "Prototyping", "UI/UX Design"];
const DEV_SKILLS = ["HTML", "CSS", "JavaScript", "Python", "Java/C", "MySQL", "GitHub", "React"];

const CARD_STYLE: React.CSSProperties = {
  background: "#141414", border: "1px solid #222", borderRadius: 16, padding: "2rem",
};

export default function AboutPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ paddingTop: "9rem", paddingBottom: "4rem", borderBottom: "1px solid #1E1E1E" }}>
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>About Me</p>
            <h1 style={{ fontSize: "clamp(3rem,8vw,7rem)", fontWeight: 900, color: "#F0EDE6", lineHeight: 0.88, letterSpacing: "-0.02em", margin: 0 }}>
              Designer, Coder,<br />
              <span style={{ color: "#00E87A" }}>Problem Solver.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── BIO ── */}
      <section style={{ padding: "6rem 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "5rem", alignItems: "start" }}>
            {/* Left */}
            <div>
              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
                style={{ position: "relative", width: 176, height: 176, borderRadius: 20, overflow: "hidden", marginBottom: "2.5rem", border: "1px solid #1E1E1E" }}
              >
                <Image src="/nabeel avatar.png" alt="Nabeel" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.5), transparent)" }} />
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                style={{ color: "#888", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.25rem" }}
              >
                Hi, I&apos;m <strong style={{ color: "#F0EDE6" }}>K H Nabeel</strong> — a passionate designer and developer based in Palakkad, Kerala. I&apos;m a 3rd-year B.Tech Computer Science student at NSS College of Engineering, diving deep into UI/UX design and frontend development.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                style={{ color: "#666", lineHeight: 1.75, marginBottom: "1.25rem" }}
              >
                With 2+ years of experience, I love creating visually compelling, user-centred digital experiences. My work blends creativity with usability — making sure every pixel has a purpose.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                style={{ color: "#666", lineHeight: 1.75, marginBottom: "2.5rem" }}
              >
                Deeply involved in TinkerHub, ISTE, STACS and IEDC — designing for real audiences and getting real feedback.
              </motion.p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
                {[
                  { icon: <MapPin size={14} color="#00E87A" />, text: siteData.location },
                  { icon: <GraduationCap size={14} color="#00E87A" />, text: `${siteData.degree}, ${siteData.year}` },
                ].map(item => (
                  <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "#666" }}>
                    <span style={{ flexShrink: 0 }}>{item.icon}</span>{item.text}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/contact" data-cursor className="btn-primary">
                  Let&apos;s Talk <ArrowRight size={15} />
                </Link>
                <a href="/nabeel-resume.pdf" download data-cursor className="btn-ghost">
                  <Download size={14} /> Resume
                </a>
              </div>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {siteData.stats.map((s, i) => (
                  <motion.div key={s.label}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={CARD_STYLE}
                  >
                    <p className="stat-number">{s.value}</p>
                    <p style={{ color: "#666", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.5rem" }}>{s.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Communities */}
              <div style={CARD_STYLE}>
                <p className="eyebrow" style={{ marginBottom: "1rem" }}>Communities</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {siteData.communities.map(c => (
                    <span key={c} className="chip">{c}</span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div style={CARD_STYLE}>
                <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Languages</p>
                {[{ lang: "Malayalam", level: "Native", pct: 100 }, { lang: "English", level: "Professional", pct: 90 }].map(l => (
                  <div key={l.lang} style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                      <span style={{ color: "#F0EDE6", fontWeight: 500 }}>{l.lang}</span>
                      <span style={{ color: "#666" }}>{l.level}</span>
                    </div>
                    <div style={{ height: 1, background: "#1E1E1E", overflow: "hidden" }}>
                      <motion.div
                        style={{ height: "100%", background: "#00E87A" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div style={{ ...CARD_STYLE, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p style={{ color: "#666", fontSize: "0.875rem" }}>Find me on</p>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {[
                    { href: siteData.social.github, icon: <GithubIcon size={16} /> },
                    { href: siteData.social.linkedin, icon: <LinkedinIcon size={16} /> },
                    { href: siteData.social.behance, icon: <BehanceIcon size={16} /> },
                  ].map(s => (
                    <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" data-cursor
                      style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid #1E1E1E", display: "flex", alignItems: "center", justifyContent: "center", color: "#666", transition: "all 0.2s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00E87A"; (e.currentTarget as HTMLElement).style.color = "#00E87A"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E"; (e.currentTarget as HTMLElement).style.color = "#666"; }}
                    >{s.icon}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS WITH ICONS ── */}
      <section style={{ background: "#0D0D0D", padding: "6rem 0", borderTop: "1px solid #1E1E1E" }}>
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Skills</p>
          <h2 style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, color: "#F0EDE6", marginBottom: "4rem", lineHeight: 1 }}>
            Tools &amp; Technologies
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem" }}>
            {/* Design */}
            <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 20, padding: "2rem" }}>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#444", marginBottom: "1.5rem" }}>Design</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {DESIGN_SKILLS.map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.85rem", borderRadius: 12, background: "#1A1A1A", border: "1px solid #252525" }}>
                    {SKILL_ICONS[s] ?? <span style={{ width: 20, height: 20, borderRadius: 4, background: "rgba(0,232,122,0.15)", flexShrink: 0, display: "inline-block" }} />}
                    <span style={{ color: "#C0C0C0", fontSize: "0.85rem", fontWeight: 500 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Development */}
            <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 20, padding: "2rem" }}>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#444", marginBottom: "1.5rem" }}>Development</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {DEV_SKILLS.map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.85rem", borderRadius: 12, background: "#1A1A1A", border: "1px solid #252525" }}>
                    {SKILL_ICONS[s] ?? <span style={{ width: 20, height: 20, borderRadius: 4, background: "rgba(0,232,122,0.15)", flexShrink: 0, display: "inline-block" }} />}
                    <span style={{ color: "#C0C0C0", fontSize: "0.85rem", fontWeight: 500 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

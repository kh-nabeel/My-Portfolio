"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, BehanceIcon } from "@/components/icons";
import { siteData } from "@/lib/data";

/* ─── MARQUEE ─────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "UI/UX Design","·","Figma","·","Frontend Dev","·","Creative Code","·",
  "User Research","·","Prototyping","·","React","·","Python","·",
];

function MarqueeBand() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div style={{ overflow:"hidden", borderTop:"1px solid #1E1E1E", borderBottom:"1px solid #1E1E1E", padding:"1rem 0", background:"#080808" }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} style={{
            margin:"0 1rem", fontSize:"0.7rem", fontWeight:600,
            letterSpacing:"0.18em", textTransform:"uppercase", whiteSpace:"nowrap",
            color: item === "·" ? "#00E87A" : "#444"
          }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── TOOL ICONS ───────────────────────────────────────── */
const TOOL_ICONS: Record<string, ReactNode> = {
  Figma: (
    <svg viewBox="0 0 38 57" fill="none" style={{width:44,height:44}}>
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
    </svg>
  ),
  Affinity: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <rect width="128" height="128" rx="28" fill="#222E50"/>
      <path d="M64 18L18 110h92L64 18z" fill="none" stroke="#7BB7FF" strokeWidth="8"/>
      <path d="M64 18L38 78h52L64 18z" fill="#7BB7FF" opacity="0.3"/>
      <text x="50%" y="90" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#7BB7FF" fontFamily="Arial">a</text>
    </svg>
  ),
  Canva: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <rect width="128" height="128" rx="28" fill="#7D2AE8"/>
      <circle cx="64" cy="64" r="36" fill="none" stroke="white" strokeWidth="8"/>
      <text x="50%" y="76" textAnchor="middle" fontSize="36" fontWeight="bold" fill="white" fontFamily="Arial">C</text>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <defs>
        <linearGradient id="pyg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387EB8"/>
          <stop offset="100%" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="pyg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE052"/>
          <stop offset="100%" stopColor="#FFC331"/>
        </linearGradient>
      </defs>
      <path d="M63.39 3C41.3 3 42.71 12.46 42.71 12.46l.03 9.81H63.7v2.94H26.93S16 23.85 16 46.17c0 22.32 12.34 21.52 12.34 21.52h7.36V57.7s-.4-12.32 12.12-12.32h20.87s11.73.19 11.73-11.34V14.19S82.63 3 63.39 3zM51.94 10.47c2.11 0 3.82 1.71 3.82 3.82s-1.71 3.82-3.82 3.82-3.82-1.71-3.82-3.82 1.71-3.82 3.82-3.82z" fill="url(#pyg1)"/>
      <path d="M64.61 125c22.09 0 20.68-9.46 20.68-9.46l-.03-9.81H64.3v-2.94h36.77S112 104.15 112 81.83c0-22.32-12.34-21.52-12.34-21.52h-7.36V70.3s.4 12.32-12.12 12.32H59.31S47.58 82.43 47.58 93.96v20.85S45.37 125 64.61 125zm11.45-7.47c-2.11 0-3.82-1.71-3.82-3.82s1.71-3.82 3.82-3.82 3.82 1.71 3.82 3.82-1.71 3.82-3.82 3.82z" fill="url(#pyg2)"/>
    </svg>
  ),
  C: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <defs>
        <linearGradient id="cgrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#659AD2"/>
          <stop offset="100%" stopColor="#004482"/>
        </linearGradient>
      </defs>
      <path d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z" fill="url(#cgrad)"/>
      <path d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z" fill="#00599C"/>
      <path d="M64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.5C81.1 83.5 73.1 88.5 64 88.5z" fill="white"/>
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <path d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" fill="#E76F00"/>
      <path d="M69.802 61.271c6.025 6.929-1.58 13.168-1.58 13.168s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.189z" fill="#E76F00"/>
      <path d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" fill="#E76F00"/>
      <path d="M76.491 1.587s12.968 12.97-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z" fill="#E76F00"/>
      <path d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" fill="#E76F00"/>
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
      <path fill="#F16529" d="M64 116.8l36.379-10.086 8.559-95.878H64z"/>
      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
      <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.336-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
      <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354H64.001v106.49z"/>
      <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z"/>
      <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.732 28.331 7.864.063-.018z"/>
      <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.641l28.354-7.858.208-2.337 2.406-26.932z"/>
      <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711zm-.047 27.994v13.831H45.006l-.277-3.108-.631-7.012-.33-3.711z"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <rect width="128" height="128" fill="#F0DB4F"/>
      <path d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035 1.453 2.575 2.232 3.501 1.153 1.404 2.347 2.468 4.546 2.935 1.845.361 3.668.156 5.106-.988 1.135-.905 1.439-1.797 1.439-5.765V58.708h11.364v41.655c-.082 5.656-.417 8.838-1.127 10.15zm31.357 2.385c-2.777 4.576-8.299 7.304-15.271 7.165-4.965-.106-9.508-1.671-12.532-4.286-2.001-1.735-3.719-4.396-4.064-6.396l-.063-.349 9.649-5.789.12.419c.408 1.418 1.258 2.392 1.675 2.813 1.852 1.996 4.526 2.702 7.286 2.166 1.856-.363 3.357-1.352 3.956-3.583.224-.832.176-5.47.176-5.47V58.708h11.386v41.655c-.001 3.244-.14 5.975-.318 9.535z" fill="#323330"/>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <path fill="#00618A" d="M2 2h30v6H8v8h24v6H8v10h24v6H2V2z"/>
      <path fill="#E48E00" d="M34 2h8l10 24V2h8v36h-8L42 14v24h-8V2z"/>
      <path fill="#00618A" d="M63 2h26v6H71v8h18v6H71v10h18v6H63V2zM108.5 38c-8.3 0-14.5-7.2-14.5-18 0-10.8 6.2-18 14.5-18S123 9.2 123 20c0 10.8-6.2 18-14.5 18zm0-30c-4.1 0-7.5 5.4-7.5 12s3.4 12 7.5 12 7.5-5.4 7.5-12-3.4-12-7.5-12z"/>
      <path fill="#00618A" d="M2 50h8l6 20 6-20h8L20 88H10L2 50z"/>
      <path fill="#E48E00" d="M32 50h26v6H40v8h18v6H40v10h18v6H32V50z"/>
      <path fill="#00618A" d="M60 50h8v30h18v6H60V50zM88 50h8v36h-8zM100 50h8l10 22V50h8v36h-8l-10-22v22h-8V50z"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <rect width="128" height="128" rx="28" fill="#24292E"/>
      <path fill="white" d="M64 8.4C33.1 8.4 8.1 33.4 8.1 64.3c0 24.7 16 45.6 38.2 53 2.8.5 3.8-1.2 3.8-2.7 0-1.3-.1-5.7-.1-10.3-15.6 3.4-18.9-6.6-18.9-6.6-2.6-6.4-6.3-8.1-6.3-8.1-5.1-3.5.4-3.4.4-3.4 5.7.4 8.7 5.8 8.7 5.8 5 8.6 13.2 6.1 16.4 4.7.5-3.6 2-6.1 3.6-7.5-12.5-1.4-25.6-6.2-25.6-27.7 0-6.1 2.2-11.1 5.8-15-.6-1.4-2.5-7.1.6-14.8 0 0 4.7-1.5 15.4 5.7 4.5-1.2 9.2-1.8 14-1.8 4.7 0 9.5.6 14 1.8 10.7-7.2 15.4-5.7 15.4-5.7 3.1 7.7 1.2 13.4.6 14.8 3.6 3.9 5.8 8.9 5.8 15 0 21.5-13.1 26.3-25.6 27.7 2 1.7 3.8 5.2 3.8 10.5 0 7.5-.1 13.6-.1 15.4 0 1.5 1 3.2 3.8 2.7C104 109.9 120 89 120 64.3 120 33.4 95 8.4 64 8.4z"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 128 128" style={{width:44,height:44}}>
      <rect width="128" height="128" rx="28" fill="#20232A"/>
      <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
      <ellipse cx="64" cy="64" rx="57" ry="21" stroke="#61DAFB" strokeWidth="5" fill="none"/>
      <ellipse cx="64" cy="64" rx="57" ry="21" stroke="#61DAFB" strokeWidth="5" fill="none" transform="rotate(60 64 64)"/>
      <ellipse cx="64" cy="64" rx="57" ry="21" stroke="#61DAFB" strokeWidth="5" fill="none" transform="rotate(120 64 64)"/>
    </svg>
  ),
};

const TOOLS_ROW1 = ["Figma","Affinity","Canva"];
const TOOLS_ROW2 = ["Python","C","Java","HTML","CSS","JavaScript","MySQL","GitHub"];

function ToolCard({ name }: { name: string }) {
  return (
    <motion.div
      className="tool-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="tool-icon-box">{TOOL_ICONS[name]}</div>
      <span className="tool-label">{name}</span>
    </motion.div>
  );
}

/* ─── STAT NUMBER ──────────────────────────────────────── */
function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ borderLeft:"1px solid #1E1E1E", paddingLeft:"1.5rem" }}>
      <p className="stat-number">{value}</p>
      <p style={{ color:"#666", fontSize:"0.7rem", fontWeight:500, textTransform:"uppercase", letterSpacing:"0.1em", marginTop:"0.25rem" }}>{label}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start","end start"] });
  const heroY   = useTransform(scrollYProgress, [0,1], ["0%","30%"]);
  const heroOp  = useTransform(scrollYProgress, [0,0.7], [1,0]);

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section ref={heroRef} style={{ position:"relative", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"flex-end", overflow:"hidden", background:"#080808" }}>

        {/* Blobs */}
        <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
          <motion.div
            animate={{ x:[0,40,0], y:[0,-30,0], scale:[1,1.1,1] }}
            transition={{ duration:18, repeat:Infinity, ease:"easeInOut" }}
            style={{ position:"absolute", top:"10%", right:"10%", width:500, height:500, borderRadius:"50%", background:"rgba(0,232,122,0.06)", filter:"blur(120px)" }}
          />
          <motion.div
            animate={{ x:[0,-30,0], y:[0,40,0], scale:[1,1.15,1] }}
            transition={{ duration:22, repeat:Infinity, ease:"easeInOut", delay:3 }}
            style={{ position:"absolute", bottom:"20%", left:"5%", width:400, height:400, borderRadius:"50%", background:"rgba(0,232,122,0.04)", filter:"blur(100px)" }}
          />
        </div>

        {/* Grid lines */}
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", opacity:0.03, backgroundImage:"linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize:"80px 80px" }} />

        {/* Content */}
        <motion.div style={{ y:heroY, opacity:heroOp, position:"relative", width:"100%" }}>
          <div className="wrap" style={{ paddingBottom:"5rem", paddingTop:"8rem" }}>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
              style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", marginBottom:"2.5rem", padding:"0.5rem 1rem", borderRadius:9999, border:"1px solid #1E1E1E", background:"#111" }}
            >
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#00E87A", display:"inline-block" }} className="animate-pulse" />
              <span style={{ fontSize:"0.65rem", fontWeight:600, color:"#888", letterSpacing:"0.12em", textTransform:"uppercase" }}>Open to internships &amp; freelance</span>
            </motion.div>

            {/* Headline */}
            <div style={{ overflow:"hidden", marginBottom:"1.5rem" }}>
              <motion.h1
                initial={{ y:120 }} animate={{ y:0 }}
                transition={{ duration:0.9, ease:[0.16,1,0.3,1] }}
                style={{ fontSize:"clamp(3.5rem,10vw,9rem)", fontWeight:900, lineHeight:0.88, letterSpacing:"-0.02em", color:"#F0EDE6", margin:0 }}
              >
                UI/UX<br />
                <span style={{ color:"#00E87A" }}>Designer</span><br />
                &amp; Dev.
              </motion.h1>
            </div>

            {/* Bottom row */}
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"2.5rem", marginTop:"3rem" }}>
              <div style={{ maxWidth:"26rem" }}>
                <motion.p
                  initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.4 }}
                  style={{ color:"#666", fontSize:"1rem", lineHeight:1.7, marginBottom:"2rem" }}
                >
                  Hey, I&apos;m <span style={{ color:"#F0EDE6", fontWeight:600 }}>Nabeel</span> — a 3rd-year CS student at NSS College of Engineering, Palakkad. I craft user-centric digital experiences where design meets code.
                </motion.p>
                <motion.div
                  initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.55 }}
                  style={{ display:"flex", flexWrap:"wrap", gap:"0.75rem" }}
                >
                  <Link href="/projects" data-cursor className="btn-primary">
                    View My Work <ArrowRight size={15} />
                  </Link>
                  <a href="/nabeel-resume.pdf" download data-cursor className="btn-ghost">
                    <Download size={14} /> Resume
                  </a>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7, delay:0.65 }}
                style={{ display:"flex", gap:"2rem" }}
              >
                {siteData.stats.map(s => <HeroStat key={s.label} value={s.value} label={s.label} />)}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Side social */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1 }}
          style={{ position:"absolute", right:"1.5rem", top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:"1.25rem" }}
          className="hidden xl:flex"
        >
          {[
            { href:siteData.social.github, icon:<GithubIcon size={16}/>, label:"GitHub" },
            { href:siteData.social.linkedin, icon:<LinkedinIcon size={16}/>, label:"LinkedIn" },
            { href:siteData.social.behance, icon:<BehanceIcon size={16}/>, label:"Behance" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" data-cursor title={s.label}
              style={{ width:36, height:36, borderRadius:8, border:"1px solid #1E1E1E", display:"flex", alignItems:"center", justifyContent:"center", color:"#666", transition:"all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="#00E87A"; (e.currentTarget as HTMLElement).style.color="#00E87A"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="#1E1E1E"; (e.currentTarget as HTMLElement).style.color="#666"; }}
            >{s.icon}</a>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <div style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem" }}>
          <span style={{ color:"#333", fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase" }}>Scroll</span>
          <div className="scroll-dot" style={{ width:1, height:40, background:"linear-gradient(to bottom, #00E87A, transparent)" }} />
        </div>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════ */}
      <MarqueeBand />

      {/* ══ FEATURED WORK ═════════════════════════════════ */}
      <section style={{ background:"#080808", padding:"7rem 0" }}>
        <div className="wrap">
          {/* Header */}
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:"4rem", flexWrap:"wrap", gap:"1rem" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom:"1rem" }}>Selected Work</p>
              <h2 style={{ fontSize:"clamp(2.5rem,6vw,4.5rem)", fontWeight:900, color:"#F0EDE6", lineHeight:1, margin:0 }}>
                Recent<br /><span style={{ color:"#00E87A" }}>Projects</span>
              </h2>
            </div>
            <Link href="/projects" data-cursor
              style={{ display:"flex", alignItems:"center", gap:"0.5rem", fontSize:"0.875rem", fontWeight:600, color:"#666", textDecoration:"none", transition:"color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color="#00E87A"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color="#666"}
            >
              All Projects →
            </Link>
          </div>

          {/* Design projects 2-col */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"1.25rem", marginBottom:"1.25rem" }}>
            {[
              { title:"KAV Website", subtitle:"Clone Website Design", img:"/AVS website.png", link:siteData.designProjects[0]?.link||"#", cat:"UI/UX Design" },
              { title:"KAV App",     subtitle:"Clone App Design",     img:"/AVS app.png",     link:siteData.designProjects[1]?.link||"#", cat:"UI/UX Design" },
            ].map((p,i) => (
              <motion.a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" data-cursor
                initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay:i*0.12, duration:0.6, ease:"easeOut" }}
                className="project-card glass-card group block"
                style={{ height:320, display:"flex", flexDirection:"column", justifyContent:"space-between", overflow:"hidden", position:"relative" }}
              >
                <div className="overlay" style={{ borderRadius:15 }}>
                  <div style={{ textAlign:"center", color:"black" }}>
                    <p style={{ fontSize:"1.5rem", fontWeight:900 }}>View Project</p>
                    <p style={{ fontSize:"0.875rem", marginTop:4, opacity:0.7 }}>Open in Figma →</p>
                  </div>
                </div>
                <div style={{ position:"absolute", inset:0 }}>
                  <Image src={p.img} alt={p.title} fill className="object-cover object-top" style={{ opacity:0.6 }} />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, #111 10%, transparent)" }} />
                </div>
                <div style={{ position:"relative", zIndex:1, padding:"1.5rem", display:"flex", justifyContent:"space-between" }}>
                  <span className="chip">{p.cat}</span>
                  <div className="group-hover:bg-green-custom" style={{ width:32, height:32, borderRadius:"50%", border:"1px solid #1E1E1E", display:"flex", alignItems:"center", justifyContent:"center", color:"#666", transition:"all 0.2s" }}>
                    <ExternalLink size={13} />
                  </div>
                </div>
                <div style={{ position:"relative", zIndex:1, padding:"0 1.5rem 1.5rem" }}>
                  <h3 style={{ color:"#F0EDE6", fontWeight:700, fontSize:"1.25rem", marginBottom:4 }}>{p.title}</h3>
                  <p style={{ color:"#888", fontSize:"0.875rem" }}>{p.subtitle}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Dev 3-col */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"1.25rem" }}>
            {[
              { title:"StadiumSense",   desc:"Smart crowd management with ML/CV",   img:"/stadiumsense.jpeg",       link:siteData.devProjects[1]?.link||"#", cat:"Python / ML" },
              { title:"Vote Guide India", desc:"Voter info platform with clean UX", img:"/vote guide india.jpeg",   link:siteData.devProjects[2]?.link||"#", cat:"Frontend Dev" },
              { title:"Expense Tracker", desc:"Personal finance management app",   img:"/expense tracker.png",     link:siteData.devProjects[0]?.link||"#", cat:"Frontend Dev" },
            ].map((p,i) => (
              <motion.a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" data-cursor
                initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay:i*0.1, duration:0.6, ease:"easeOut" }}
                className="project-card glass-card group block"
                style={{ height:220, display:"flex", flexDirection:"column", justifyContent:"space-between", overflow:"hidden", position:"relative" }}
              >
                <div className="overlay" style={{ borderRadius:15 }}>
                  <div style={{ textAlign:"center", color:"black" }}>
                    <p style={{ fontSize:"1.2rem", fontWeight:900 }}>View on GitHub →</p>
                  </div>
                </div>
                <div style={{ position:"absolute", inset:0 }}>
                  <Image src={p.img} alt={p.title} fill className="object-cover" style={{ opacity:0.45 }} />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, #111 20%, transparent)" }} />
                </div>
                <div style={{ position:"relative", zIndex:1, padding:"1.25rem", display:"flex", justifyContent:"space-between" }}>
                  <span className="chip">{p.cat}</span>
                  <span style={{ color:"#444", display:"flex" }}><GithubIcon size={16} /></span>
                </div>
                <div style={{ position:"relative", zIndex:1, padding:"0 1.25rem 1.25rem" }}>
                  <h3 style={{ color:"#F0EDE6", fontWeight:700, fontSize:"1.1rem", marginBottom:4 }}>{p.title}</h3>
                  <p style={{ color:"#666", fontSize:"0.75rem", lineHeight:1.5 }}>{p.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO I AM ══════════════════════════════════════ */}
      <section style={{ background:"#0D0D0D", padding:"7rem 0", borderTop:"1px solid #1E1E1E", borderBottom:"1px solid #1E1E1E" }}>
        <div className="wrap">
          <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"4rem" }}>
            <div className="lg-two-col" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>
              {/* Left */}
              <div>
                <p className="eyebrow" style={{ marginBottom:"1.5rem" }}>Who I Am</p>
                <h2 style={{ fontSize:"clamp(3rem,6vw,5.5rem)", fontWeight:900, color:"#F0EDE6", lineHeight:0.9, marginBottom:"2rem" }}>
                  Designer<br />who also<br /><span style={{ color:"#00E87A" }}>codes.</span>
                </h2>
                <p style={{ color:"#666", fontSize:"1.05rem", lineHeight:1.75, marginBottom:"1.5rem", maxWidth:"28rem" }}>
                  I&apos;m a passionate 3rd-year B.Tech CS student at NSS College of Engineering, Palakkad. With 2+ years of hands-on experience, I bridge the gap between beautiful UI and clean code.
                </p>
                <p style={{ color:"#555", lineHeight:1.75, marginBottom:"2.5rem", maxWidth:"28rem" }}>
                  Active in TinkerHub, ISTE, STACS &amp; IEDC — constantly exploring, building, and pushing creative boundaries.
                </p>
                <Link href="/about" data-cursor className="btn-primary">
                  More About Me <ArrowRight size={15} />
                </Link>
              </div>

              {/* Right bento */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                {/* Communities */}
                <div style={{ gridColumn:"1/-1", background:"#141414", border:"1px solid #222", borderRadius:16, padding:"1.5rem" }}>
                  <p style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#444", marginBottom:"1rem" }}>Communities</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                    {siteData.communities.map(c => (
                      <span key={c} style={{ padding:"0.3rem 0.85rem", borderRadius:9999, fontSize:"0.7rem", fontWeight:600, background:"rgba(0,232,122,0.08)", color:"#00E87A", border:"1px solid rgba(0,232,122,0.2)" }}>{c}</span>
                    ))}
                  </div>
                </div>
                {/* Stats */}
                {siteData.stats.slice(0,2).map(s => (
                  <div key={s.label} style={{ background:"#00E87A", border:"1px solid #00E87A", borderRadius:16, padding:"1.5rem" }}>
                    <p style={{ fontSize:"2.5rem", fontWeight:900, color:"black", lineHeight:1 }}>{s.value}</p>
                    <p style={{ fontSize:"0.65rem", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", color:"rgba(0,0,0,0.5)", marginTop:"0.5rem" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TOOLS ═════════════════════════════════════════ */}
      <section style={{ background:"#080808", padding:"6rem 0" }}>
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign:"center", marginBottom:"0.75rem" }}>Toolkit</p>
          <h2 style={{ textAlign:"center", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:900, color:"#F0EDE6", marginBottom:"3.5rem" }}>
            Tools I Know
          </h2>

          {/* Row 1 — Design */}
          <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"2rem", marginBottom:"2rem" }}>
            {TOOLS_ROW1.map(name => <ToolCard key={name} name={name} />)}
          </div>

          {/* Row 2 — Dev */}
          <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"2rem" }}>
            {TOOLS_ROW2.map(name => <ToolCard key={name} name={name} />)}
          </div>
        </div>
      </section>
    </>
  );
}

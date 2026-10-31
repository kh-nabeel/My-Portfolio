"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { siteData } from "@/lib/data";

// Timeline events — alternating above/below the center line
const TIMELINE = [
  { date:"Nov 2024", endDate:"Feb 2025", role:"Creative Designer", org:"ISTE", orgFull:"Indian Society for Technical Education", above:false },
  { date:"Feb 2025", endDate:"Aug 2025", role:"Creative Designer", org:"STACS", orgFull:"Student Association of Computer Science", above:true },
  { date:"Aug 2025", endDate:"Present", role:"Creative Designer", org:"TinkerHub", orgFull:"TinkerHub Campus Chapter", above:false },
  { date:"Feb 2026", endDate:"Present", role:"Creative Lead", org:"iEDC", orgFull:"Innovation & Entrepreneurship Development Cell", above:true },
];

function TimelineItem({ item, index }: { item: typeof TIMELINE[0]; index: number }) {
  const isAbove = item.above;
  return (
    <motion.div
      initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        flex: "0 0 auto",
        width: 160,
      }}
    >
      {/* Content above or below */}
      {isAbove ? (
        <>
          {/* Above content */}
          <div style={{ textAlign:"center", paddingBottom:"1rem", minHeight:80, display:"flex", flexDirection:"column", justifyContent:"flex-end" }}>
            <p style={{ fontSize:"0.7rem", color:"#888", marginBottom:"0.25rem" }}>{item.role} @</p>
            <p style={{ fontSize:"1.1rem", fontWeight:800, color:"#F0EDE6" }}>{item.org}</p>
            <p style={{ fontSize:"0.6rem", color:"#555", marginTop:"0.2rem" }}>{item.orgFull.length > 28 ? item.orgFull.slice(0,28)+"…" : item.orgFull}</p>
          </div>
          {/* Arrow up (pointing down toward line) */}
          <div style={{ width:1, height:40, background:"linear-gradient(to bottom, transparent, #00E87A)", marginBottom:"-1px" }} />
          {/* Dot on line */}
          <div style={{ width:12, height:12, borderRadius:"50%", background:"#00E87A", border:"2px solid #080808", zIndex:1, margin:"-6px 0" }} />
          {/* Date below line */}
          <div style={{ paddingTop:"0.75rem", minHeight:80 }}>
            <p style={{ fontSize:"0.72rem", color:"#555", textAlign:"center" }}>{item.date}</p>
          </div>
        </>
      ) : (
        <>
          {/* Date above line */}
          <div style={{ paddingBottom:"0.75rem", minHeight:80, display:"flex", flexDirection:"column", justifyContent:"flex-end" }}>
            <p style={{ fontSize:"0.72rem", color:"#555", textAlign:"center" }}>{item.date}</p>
          </div>
          {/* Dot on line */}
          <div style={{ width:12, height:12, borderRadius:"50%", background:"#00E87A", border:"2px solid #080808", zIndex:1, margin:"-6px 0" }} />
          {/* Arrow down (pointing down away from line) */}
          <div style={{ width:1, height:40, background:"linear-gradient(to bottom, #00E87A, transparent)", marginTop:"-1px" }} />
          {/* Content below */}
          <div style={{ textAlign:"center", paddingTop:"1rem", minHeight:80 }}>
            <p style={{ fontSize:"0.7rem", color:"#888", marginBottom:"0.25rem" }}>{item.role} @</p>
            <p style={{ fontSize:"1.1rem", fontWeight:800, color:"#F0EDE6" }}>{item.org}</p>
            <p style={{ fontSize:"0.6rem", color:"#555", marginTop:"0.2rem" }}>{item.orgFull.length > 28 ? item.orgFull.slice(0,28)+"…" : item.orgFull}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <div style={{ background:"#080808", minHeight:"100vh" }}>

      {/* ── HEADER ── */}
      <section style={{ paddingTop:"9rem", paddingBottom:"4rem", borderBottom:"1px solid #1E1E1E" }}>
        <div className="wrap">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <p className="eyebrow" style={{ marginBottom:"1.5rem" }}>Journey</p>
            <h1 style={{ fontSize:"clamp(3rem,8vw,7rem)", fontWeight:900, color:"#F0EDE6", lineHeight:0.88, letterSpacing:"-0.02em", margin:0 }}>
              Experience &amp;<br />
              <span style={{ color:"#00E87A" }}>Education.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section style={{ paddingTop:"5rem", paddingBottom:"2rem" }}>
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom:"2.5rem" }}>Education</p>
          <motion.div
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
            className="glass-card"
            style={{ padding:"2rem", display:"flex", flexWrap:"wrap", alignItems:"center", gap:"2rem" }}
          >
            <div style={{ width:64, height:64, borderRadius:16, background:"rgba(0,232,122,0.1)", border:"1px solid rgba(0,232,122,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <GraduationCap size={28} color="#00E87A" />
            </div>
            <div style={{ flex:1, minWidth:200 }}>
              <h3 style={{ color:"#F0EDE6", fontWeight:700, fontSize:"1.4rem", marginBottom:"0.25rem" }}>{siteData.degree}</h3>
              <p style={{ color:"#00E87A", fontWeight:600, marginBottom:"0.75rem" }}>{siteData.college}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1.25rem" }}>
                <span style={{ fontSize:"0.875rem", color:"#666", display:"flex", alignItems:"center", gap:"0.35rem" }}><Calendar size={13} color="#555" /> {siteData.year}</span>
                <span style={{ fontSize:"0.875rem", color:"#666", display:"flex", alignItems:"center", gap:"0.35rem" }}><MapPin size={13} color="#555" /> Malappuram, Kerala</span>
              </div>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
              {siteData.communities.map(c => (
                <span key={c} className="chip" style={{ fontSize:"0.65rem" }}>{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HORIZONTAL TIMELINE ── */}
      <section style={{ padding:"5rem 0 7rem" }}>
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom:"2.5rem" }}>Work Experience</p>
          <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, color:"#F0EDE6", marginBottom:"5rem", lineHeight:1 }}>
            Experience<br /><span style={{ color:"#00E87A" }}>Timeline</span>
          </h2>

          {/* Timeline — desktop horizontal */}
          <div style={{ position:"relative", overflowX:"auto", paddingBottom:"2rem" }}>
            {/* Center line */}
            <div style={{
              position:"absolute",
              top:"50%",
              left:0,
              right:0,
              height:2,
              background:"linear-gradient(to right, transparent 0%, #00E87A 8%, #00E87A 92%, transparent 100%)",
              transform:"translateY(-50%)",
              zIndex:0,
            }} />

            {/* Items */}
            <div style={{
              position:"relative",
              display:"flex",
              alignItems:"center",
              justifyContent:"space-evenly",
              minWidth:700,
              padding:"0 2rem",
              zIndex:1,
            }}>
              {/* Start cap */}
              <div style={{ flexShrink:0 }}>
                <p style={{ fontSize:"0.65rem", color:"#555", textAlign:"right", paddingRight:"0.5rem" }}>of NSSCE</p>
              </div>

              {TIMELINE.map((item, i) => (
                <TimelineItem key={item.org} item={item} index={i} />
              ))}

              {/* End cap */}
              <div style={{ flexShrink:0 }}>
                <p style={{ fontSize:"0.65rem", color:"#00E87A", paddingLeft:"0.5rem" }}>Present →</p>
              </div>
            </div>
          </div>

          {/* Mobile vertical fallback cards */}
          <div style={{ marginTop:"4rem" }}>
            <p style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#444", marginBottom:"2rem" }}>Full Details</p>
            <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
              {siteData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                  transition={{ delay:i*0.1, duration:0.5 }}
                  style={{ borderBottom:"1px solid #1E1E1E", padding:"2.5rem 0", display:"flex", flexWrap:"wrap", gap:"1.5rem" }}
                >
                  {/* Big number */}
                  <span style={{ fontSize:"4.5rem", fontWeight:900, color:"#1A1A1A", lineHeight:1, width:80, flexShrink:0, userSelect:"none", fontVariantNumeric:"tabular-nums" }}>
                    0{i+1}
                  </span>
                  <div style={{ flex:1, minWidth:200 }}>
                    <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"0.75rem", marginBottom:"0.75rem" }}>
                      <div>
                        <h3 style={{ color:"#F0EDE6", fontWeight:700, fontSize:"1.3rem", marginBottom:"0.2rem" }}>{exp.role}</h3>
                        <p style={{ color:"#00E87A", fontWeight:600 }}>{exp.org}</p>
                        <p style={{ color:"#555", fontSize:"0.85rem" }}>{exp.orgFull}</p>
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", flexShrink:0 }}>
                        <span style={{ color:"#666", fontSize:"0.85rem", display:"flex", alignItems:"center", gap:"0.35rem" }}><Calendar size={13} color="#555" /> {exp.period}</span>
                        <span style={{
                          fontSize:"0.7rem", padding:"0.25rem 0.75rem", borderRadius:9999, fontWeight:600,
                          border: exp.type==="Ongoing" ? "1px solid rgba(0,232,122,0.3)" : "1px solid #1E1E1E",
                          color: exp.type==="Ongoing" ? "#00E87A" : "#666",
                          background: exp.type==="Ongoing" ? "rgba(0,232,122,0.08)" : "#111",
                        }}>{exp.type}</span>
                      </div>
                    </div>
                    <p style={{ color:"#666", fontSize:"0.875rem", lineHeight:1.7, maxWidth:"40rem" }}>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

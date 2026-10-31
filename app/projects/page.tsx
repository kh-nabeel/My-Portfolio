"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FigmaIcon, GithubIcon } from "@/components/icons";
import { siteData } from "@/lib/data";

type Tab = "design" | "dev";

const PROJECT_IMAGES: Record<string, string> = {
  "kav-website": "/AVS website.png",
  "kav-app": "/AVS app.png",
  "stadiumsense": "/stadiumsense.jpeg",
  "voteguide": "/vote guide india.jpeg",
  "expense-tracker": "/expense tracker.png",
};

export default function ProjectsPage() {
  const [tab, setTab] = useState<Tab>("design");
  const projects = tab === "design" ? siteData.designProjects : siteData.devProjects;

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>

      {/* ── HEADER ── */}
      <section style={{ paddingTop: "9rem", paddingBottom: "4rem", borderBottom: "1px solid #1E1E1E" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Portfolio</p>
              <h1 style={{ fontSize: "clamp(3rem,8vw,7rem)", fontWeight: 900, color: "#F0EDE6", lineHeight: 0.88, letterSpacing: "-0.02em", margin: 0 }}>
                My<br /><span style={{ color: "#00E87A" }}>Work.</span>
              </h1>
            </motion.div>

            {/* Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 4, padding: 4, borderRadius: 9999, border: "1px solid #1E1E1E", background: "#111" }}
            >
              {(["design", "dev"] as Tab[]).map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  data-cursor
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "0.6rem 1.25rem", borderRadius: 9999,
                    fontSize: "0.8rem", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.06em",
                    border: "none",
                    cursor: "none",
                    transition: "all 0.25s",
                    background: tab === t ? "#00E87A" : "transparent",
                    color: tab === t ? "#000" : "#666",
                  }}
                >
                  {t === "design" ? <FigmaIcon size={13} /> : <GithubIcon size={13} />}
                  {t === "design" ? "Design" : "Dev"}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "1.5rem" }}
            >
              {projects.map((p, i) => {
                const img = PROJECT_IMAGES[p.id];
                return (
                  <motion.a
                    key={p.id}
                    href={p.link} target="_blank" rel="noopener noreferrer" data-cursor
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
                    className="project-card glass-card group block"
                    style={{ overflow: "hidden", display: "block" }}
                  >
                    {/* Hover overlay */}
                    <div className="overlay" style={{ borderRadius: 15 }}>
                      <div style={{ textAlign: "center", color: "black", padding: "0 1.5rem" }}>
                        <p style={{ fontSize: "1.5rem", fontWeight: 900 }}>View Project</p>
                        <p style={{ fontSize: "0.875rem", opacity: 0.7, marginTop: 4 }}>
                          {tab === "design" ? "Open in Figma →" : "Open on GitHub →"}
                        </p>
                      </div>
                    </div>

                    {/* Image / banner */}
                    <div style={{ height: 220, position: "relative", overflow: "hidden", borderRadius: "15px 15px 0 0" }}>
                      {img ? (
                        <>
                          <Image src={img} alt={p.title} fill style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.5s" }} className="group-hover:scale-105" />
                          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #111 5%, transparent)" }} />
                        </>
                      ) : (
                        <div style={{ width: "100%", height: "100%", background: `${p.color}14`, display: "flex", alignItems: "center", justifyContent: "center", borderTop: `1px solid ${p.color}` }}>
                          <span style={{ fontSize: "4rem", fontWeight: 900, opacity: 0.3, color: p.color }}>
                            {p.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ padding: "1.75rem" }}>
                      <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", marginBottom: "1rem" }}>
                        <span className="chip">{p.category}</span>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid #1E1E1E", display: "flex", alignItems: "center", justifyContent: "center", color: "#666", transition: "all 0.2s", flexShrink: 0 }}>
                          <ExternalLink size={13} />
                        </div>
                      </div>
                      <h3 style={{ color: "#F0EDE6", fontWeight: 700, fontSize: "1.4rem", marginBottom: "0.35rem" }}>{p.title}</h3>
                      <p style={{ color: "#666", fontSize: "0.875rem", marginBottom: "1rem" }}>{p.subtitle}</p>
                      <p style={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{p.description}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {p.tags.map(tag => (
                          <span key={tag} style={{ fontSize: "0.65rem", padding: "0.25rem 0.75rem", borderRadius: 9999, background: "#161616", color: "#666", border: "1px solid #1E1E1E", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 500 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, BehanceIcon } from "@/components/icons";

const year = 2026;

export default function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid #1E1E1E" }}>

      {/* ── BIG CTA ROW ── */}
      <div className="wrap" style={{ paddingTop: "6rem", paddingBottom: 0 }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "2.5rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid #1E1E1E",
        }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Let&apos;s work together</p>
            <h2 style={{
              fontSize: "clamp(2.8rem,7vw,5.5rem)",
              fontWeight: 900,
              color: "#F0EDE6",
              lineHeight: 1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}>
              Got a project?<br />
              <span style={{ color: "#00E87A" }}>Let&apos;s talk.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            data-cursor
            className="btn-primary"
            style={{ fontSize: "0.9rem", padding: "0.85rem 2rem", flexShrink: 0, alignSelf: "flex-end" }}
          >
            Start a conversation →
          </Link>
        </div>
      </div>

      {/* ── LINKS GRID ── */}
      <div className="wrap" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem", borderBottom: "1px solid #1E1E1E" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "2.5rem",
        }}>
          {/* Brand */}
          <div>
            <p style={{ fontWeight: 900, fontSize: "1.1rem", color: "#F0EDE6", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
              nabeel<span style={{ color: "#00E87A" }}>.</span>
            </p>
            <p style={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.7 }}>
              UI/UX Designer &amp; Frontend Developer based in Kerala, India.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Navigate</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[["Home", "/"], ["About", "/about"], ["Work", "/projects"], ["Experience", "/experience"], ["Contact", "/contact"]].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} data-cursor style={{ color: "#666", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#F0EDE6"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666"}
                  >{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Social</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "https://github.com/kh-nabeel", icon: <GithubIcon size={13} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/k-h-nabeel-2b74b7316", icon: <LinkedinIcon size={13} />, label: "LinkedIn" },
                { href: "https://www.behance.net/khnabeel", icon: <BehanceIcon size={13} />, label: "Behance" },
              ].map(s => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" data-cursor
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#666", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#F0EDE6"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666"}
                  >
                    {s.icon} {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Contact</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <a href="mailto:nabeelnob100@gmail.com" data-cursor
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#666", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#F0EDE6"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666"}
                >
                  <Mail size={13} /> nabeelnob100@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919074787664" data-cursor
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#666", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#F0EDE6"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666"}
                >
                  <Phone size={13} /> +91 9074787664
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── COPYRIGHT ── */}
      <div className="wrap" style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
        <p style={{ color: "#444", fontSize: "0.75rem" }}>© {year} K H Nabeel. All rights reserved.</p>
      </div>

    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.4s ease",
    padding: scrolled ? "0.75rem 0" : "1.25rem 0",
    background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid #1E1E1E" : "none",
  };

  const navStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1280,
    margin: "0 auto",
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
  };

  const linkStyle = (active: boolean): React.CSSProperties => ({
    fontSize: "0.85rem",
    fontWeight: 500,
    color: active ? "#00E87A" : "#888",
    textDecoration: "none",
    transition: "color 0.2s",
    paddingBottom: "2px",
    borderBottom: active ? "1px solid #00E87A" : "1px solid transparent",
  });

  return (
    <>
      <header style={headerStyle}>
        <nav style={navStyle}>
          {/* Logo */}
          <Link href="/" data-cursor style={{ textDecoration:"none" }}>
            <span style={{ fontWeight:900, fontSize:"1.1rem", letterSpacing:"-0.03em", color:"#F0EDE6" }}>
              nabeel<span style={{ color:"#00E87A" }}>.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display:"flex", alignItems:"center", gap:"2rem" }}
            className="nav-desktop">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} data-cursor style={linkStyle(path === l.href)}
                onMouseEnter={e => { if (path !== l.href) (e.currentTarget as HTMLElement).style.color="#F0EDE6"; }}
                onMouseLeave={e => { if (path !== l.href) (e.currentTarget as HTMLElement).style.color="#888"; }}
              >{l.label}</Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }} className="nav-desktop">
            <a href="/nabeel-resume.pdf" download data-cursor className="btn-ghost"
              style={{ fontSize:"0.78rem", padding:"0.5rem 1.1rem", display:"flex", alignItems:"center", gap:6 }}>
              <Download size={13}/> Resume
            </a>
            <Link href="/contact" data-cursor className="btn-primary"
              style={{ fontSize:"0.78rem", padding:"0.5rem 1.1rem" }}>
              Hire Me →
            </Link>
          </div>

          {/* Burger — mobile only */}
          <button
            onClick={() => setOpen(!open)}
            data-cursor
            aria-label="Menu"
            style={{ display:"none", background:"none", border:"none", color:"#F0EDE6", cursor:"none", padding:"0.25rem" }}
            className="nav-burger"
          >
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-20 }} transition={{ duration:0.25 }}
            style={{ position:"fixed", inset:0, zIndex:40, background:"#080808", display:"flex", flexDirection:"column", justifyContent:"center", padding:"0 2rem" }}
          >
            <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
              {NAV_LINKS.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
                  transition={{ delay:i*0.06 }}>
                  <Link href={l.href}
                    style={{ fontSize:"3rem", fontWeight:900, textDecoration:"none", color: path===l.href ? "#00E87A" : "#F0EDE6" }}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div style={{ display:"flex", gap:"0.75rem", marginTop:"3rem" }}>
              <a href="/nabeel-resume.pdf" download className="btn-ghost" style={{ fontSize:"0.8rem" }}>Resume</a>
              <Link href="/contact" className="btn-primary" style={{ fontSize:"0.8rem" }}>Hire Me →</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: flex !important; }
        }
      `}</style>
    </>
  );
}

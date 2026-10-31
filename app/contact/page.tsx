"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { GithubIcon, LinkedinIcon, BehanceIcon } from "@/components/icons";
import { siteData } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY"
      );
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const INPUT_STYLE: React.CSSProperties = {
    width: "100%", padding: "0.85rem 1rem", borderRadius: 12,
    background: "#111", border: "1px solid #1E1E1E",
    fontSize: "0.875rem", color: "#F0EDE6",
    outline: "none", transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>

      {/* ── HEADER ── */}
      <section style={{ paddingTop: "9rem", paddingBottom: "5rem", borderBottom: "1px solid #1E1E1E" }}>
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>Contact</p>
            <h1 style={{ fontSize: "clamp(3rem,8vw,7rem)", fontWeight: 900, color: "#F0EDE6", lineHeight: 0.88, letterSpacing: "-0.02em", margin: 0 }}>
              Let&apos;s Build<br /><span style={{ color: "#00E87A" }}>Something.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "3rem" }}>

            {/* Left: Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: 420 }}>
              {[
                { icon: <Mail size={18} color="#00E87A" />, label: "Email", value: siteData.email, href: `mailto:${siteData.email}` },
                { icon: <Phone size={18} color="#00E87A" />, label: "Phone", value: siteData.phone, href: `tel:${siteData.phone}` },
                { icon: <MapPin size={18} color="#00E87A" />, label: "Location", value: siteData.location, href: null },
              ].map((item, i) => (
                <motion.div key={item.label}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ background: "#111", border: "1px solid #1E1E1E", borderRadius: 16, padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(0,232,122,0.1)", border: "1px solid rgba(0,232,122,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ color: "#444", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: 2 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} data-cursor style={{ color: "#F0EDE6", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00E87A"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#F0EDE6"}
                      >{item.value}</a>
                    ) : (
                      <p style={{ color: "#F0EDE6", fontSize: "0.875rem", fontWeight: 600 }}>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.5 }}
                style={{ background: "#111", border: "1px solid #1E1E1E", borderRadius: 16, padding: "1.5rem" }}
              >
                <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Find me online</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { href: siteData.social.github, icon: <GithubIcon size={15} />, label: "github.com/kh-nabeel" },
                    { href: siteData.social.linkedin, icon: <LinkedinIcon size={15} />, label: "linkedin.com/in/k-h-nabeel" },
                    { href: siteData.social.behance, icon: <BehanceIcon size={15} />, label: "behance.net/khnabeel" },
                  ].map(s => (
                    <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" data-cursor
                      style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#666", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00E87A"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666"}
                    >
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Response time */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.5 }}
                style={{ background: "#111", border: "1px solid #1E1E1E", borderRadius: 16, padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00E87A", flexShrink: 0, display: "inline-block" }} className="animate-pulse" />
                <p style={{ color: "#666", fontSize: "0.875rem" }}>Usually responds within <span style={{ color: "#F0EDE6", fontWeight: 600 }}>24 hours</span></p>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
              style={{ background: "#111", border: "1px solid #1E1E1E", borderRadius: 20, padding: "2.5rem" }}
            >
              {sent ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5rem 0", textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(0,232,122,0.1)", border: "1px solid rgba(0,232,122,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <CheckCircle size={32} color="#00E87A" />
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F0EDE6", marginBottom: "0.5rem" }}>Message sent!</h3>
                  <p style={{ color: "#666", marginBottom: "2rem" }}>Thanks for reaching out. I&apos;ll get back to you shortly!</p>
                  <button onClick={() => setSent(false)} data-cursor className="btn-ghost" style={{ fontSize: "0.875rem" }}>
                    Send another →
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F0EDE6", marginBottom: "2rem" }}>Send a message</h2>
                  <form ref={ref} onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                      {[
                        { name: "name", label: "Name", type: "text", ph: "Your name" },
                        { name: "email", label: "Email", type: "email", ph: "your@email.com" },
                      ].map(f => (
                        <div key={f.name}>
                          <label style={{ display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#444", fontWeight: 600, marginBottom: "0.5rem" }}>{f.label}</label>
                          <input name={f.name} type={f.type} value={form[f.name as keyof typeof form]} onChange={onChange}
                            required placeholder={f.ph} style={INPUT_STYLE}
                            onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#00E87A"}
                            onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E"}
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#444", fontWeight: 600, marginBottom: "0.5rem" }}>Subject</label>
                      <input name="subject" type="text" value={form.subject} onChange={onChange}
                        required placeholder="What is this about?" style={INPUT_STYLE}
                        onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#00E87A"}
                        onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E"}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#444", fontWeight: 600, marginBottom: "0.5rem" }}>Message</label>
                      <textarea name="message" value={form.message} onChange={onChange}
                        required rows={6} placeholder="Tell me about your project, idea, or just say hi..."
                        style={{ ...INPUT_STYLE, resize: "none" }}
                        onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#00E87A"}
                        onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E"}
                      />
                    </div>
                    <button type="submit" disabled={loading} data-cursor className="btn-primary"
                      style={{ width: "100%", justifyContent: "center", padding: "1rem", opacity: loading ? 0.6 : 1 }}>
                      {loading ? (
                        <><div style={{ width: 16, height: 16, border: "2px solid rgba(0,0,0,0.3)", borderTop: "2px solid black", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} /> Sending...</>
                      ) : (
                        <><Send size={15} /> Send Message</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

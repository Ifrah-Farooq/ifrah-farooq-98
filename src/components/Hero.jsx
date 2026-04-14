import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "React & TypeScript Engineer",
        "NestJS Backend Developer",
        "Conversational AI Builder",
        "AWS Cloud Practitioner",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="hero-layout">
        {/* ── Terminal window ── */}
        <motion.div
          className="terminal hero-terminal"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="terminal-bar">
            <div className="terminal-dot" style={{ background: "#ff5f57" }} />
            <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
            <div className="terminal-dot" style={{ background: "#28c840" }} />
            <span
              style={{
                marginLeft: "0.5rem",
                color: "#4a6a82",
                fontSize: "0.72rem",
                fontFamily: "Fira Code, monospace",
              }}
            >
              ifrah.profile.ts
            </span>
          </div>
          <div className="terminal-body">
            <div>
              <span className="t-purple">const </span>
              <span className="t-teal">ifrah</span>
              <span className="t-white"> = {"{"}</span>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="t-amber">role</span>
              <span className="t-white">: </span>
              <span style={{ color: "#c3e88d" }}>"Full Stack Developer"</span>
              <span className="t-white">,</span>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="t-amber">location</span>
              <span className="t-white">: </span>
              <span style={{ color: "#c3e88d" }}>"Srinagar, India"</span>
              <span className="t-white">,</span>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="t-amber">experience</span>
              <span className="t-white">: </span>
              <span style={{ color: "#f78c6c" }}>3</span>
              <span className="t-muted">, // years</span>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="t-amber">stack</span>
              <span className="t-white">: [</span>
              <span style={{ color: "#c3e88d" }}>"React"</span>
              <span className="t-white">, </span>
              <span style={{ color: "#c3e88d" }}>"TypeScript"</span>
              <span className="t-white">, </span>
              <span style={{ color: "#c3e88d" }}>"NestJS"</span>
              <span className="t-white">],</span>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="t-amber">flagship</span>
              <span className="t-white">: </span>
              <span style={{ color: "#c3e88d" }}>"Adverti Chat"</span>
              <span className="t-white">,</span>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="t-amber">launched</span>
              <span className="t-white">: </span>
              <span style={{ color: "#c3e88d" }}>"Convergence India 2026"</span>
              <span className="t-white">,</span>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="t-amber">available</span>
              <span className="t-white">: </span>
              <span className="t-green">true</span>
            </div>
            <div>
              <span className="t-white">{"}"}</span>
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              <span className="t-muted">{"// "}</span>
              <span className="t-teal">ifrah</span>
              <span className="t-white">.launch(</span>
              <span style={{ color: "#c3e88d" }}>"next great product"</span>
              <span className="t-white">)</span>
            </div>
          </div>
        </motion.div>

        {/* ── Text content ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <div>
            <span
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "Fira Code, monospace",
                letterSpacing: "0.03em",
              }}
            >
              Hello, I'm
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginTop: "0.3rem",
                marginBottom: "0.5rem",
              }}
            >
              <span className="grad">Ifrah Farooq</span>
            </h1>
            <h2
              style={{
                fontSize: "1.05rem",
                fontWeight: 400,
                color: "var(--muted)",
                minHeight: "1.6rem",
              }}
            >
              <span ref={typedRef} />
            </h2>
          </div>

          {/* Achievement badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.45rem 0.85rem",
              borderRadius: "0.4rem",
              background: "rgba(245,158,11,0.07)",
              border: "1px solid rgba(245,158,11,0.3)",
              fontSize: "0.75rem",
              color: "var(--amber)",
              maxWidth: "fit-content",
            }}
          >
            ⭐ Core engineer on Adverti Chat · Convergence India 2026
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              {
                icon: <FiLinkedin size={18} />,
                href: "https://www.linkedin.com/in/meer-ifrah/",
                label: "LinkedIn",
              },
              {
                icon: <FiGithub size={18} />,
                href: "https://github.com/Ifrah-Farooq",
                label: "GitHub",
              },
              {
                icon: <FiMail size={18} />,
                href: "mailto:meerifrahunnisa@gmail.com",
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--muted)",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--teal)";
                  e.currentTarget.style.color = "var(--teal)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={`${import.meta.env.BASE_URL}Ifrah_Farooq_Resume.pdf`}
              download="Ifrah_Farooq_Resume.pdf"
              className="btn-teal"
            >
              <FiDownload size={16} /> Download CV
            </a>
            <a
              href="/contact"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                history.pushState(null, "", `${import.meta.env.BASE_URL}contact`);
              }}
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

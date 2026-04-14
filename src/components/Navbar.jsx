import { useState, useEffect } from "react";
import {
  FiHome,
  FiUser,
  FiBook,
  FiBriefcase,
  FiFolder,
  FiMail,
  FiSun,
  FiMoon,
  FiFileText,
  FiAward,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const links = [
  { id: "home", icon: <FiHome size={18} />, label: "Home" },
  { id: "about", icon: <FiUser size={18} />, label: "About" },
  { id: "skills", icon: <FiBook size={18} />, label: "Skills" },
  { id: "experience", icon: <FiBriefcase size={18} />, label: "Experience" },
  { id: "projects", icon: <FiFolder size={18} />, label: "Projects" },
  { id: "education", icon: <FiAward size={18} />, label: "Education" },
  { id: "contact", icon: <FiMail size={18} />, label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
            history.replaceState(null, "", `${import.meta.env.BASE_URL}${e.target.id}`);
          }
        }),
      { threshold: 0.4 },
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    history.pushState(null, "", `${import.meta.env.BASE_URL}${id}`);
  };

  const NavLink = ({ item }) => {
    const isActive = active === item.id;
    return (
      <a
        href={`${import.meta.env.BASE_URL}${item.id}`}
        title={item.label}
        onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.6rem",
          color: isActive ? "var(--teal)" : "var(--muted)",
          transition: "0.2s",
          position: "relative",
        }}
      >
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "3px",
              height: "70%",
              background: "var(--teal)",
              borderRadius: "0 3px 3px 0",
            }}
          />
        )}
        {item.icon}
        <span
          style={{
            fontSize: "0.55rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {item.label}
        </span>
      </a>
    );
  };

  return (
    <>
      {/* ─── Desktop side nav ─── */}
      <motion.aside
        className="side-nav"
        initial={{ x: -72, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <a
          href={`${import.meta.env.BASE_URL}home`}
          onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
          style={{
            color: "var(--teal)",
            fontWeight: 800,
            fontSize: "1.1rem",
            fontFamily: "Fira Code, monospace",
            letterSpacing: "-1px",
          }}
        >
          IF.
        </a>

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {links.map((l) => (
            <NavLink key={l.id} item={l} />
          ))}
        </nav>

        {/* Bottom actions */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <a
            href={`${import.meta.env.BASE_URL}Ifrah_Farooq_Resume.pdf`}
            download="Ifrah_Farooq_Resume.pdf"
            title="Download Resume"
            style={{ color: "var(--muted)", transition: "0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--amber)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <FiFileText size={18} />
          </a>
          <button
            onClick={toggle}
            title="Toggle theme"
            style={{
              color: "var(--muted)",
              transition: "0.2s",
              display: "flex",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </motion.aside>

      {/* ─── Mobile bottom nav ─── */}
      <nav className="mobile-nav">
        {links.map((l) => (
          <a
            key={l.id}
            href={`${import.meta.env.BASE_URL}${l.id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.2rem",
              color: active === l.id ? "var(--teal)" : "var(--muted)",
              fontSize: "0.55rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              transition: "0.2s",
            }}
          >
            {l.icon}
            {l.label}
          </a>
        ))}
        <button
          onClick={toggle}
          style={{
            color: "var(--muted)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.2rem",
          }}
        >
          {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          <span style={{ fontSize: "0.55rem" }}>Theme</span>
        </button>
      </nav>
    </>
  );
}

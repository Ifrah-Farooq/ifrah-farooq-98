import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--surface)',
      padding: '2rem 2.5rem',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>

        {/* Logo */}
        <a href="home" style={{ color: 'var(--teal)', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'Fira Code, monospace', letterSpacing: '-1px' }}>
          IF.
        </a>

        {/* Copyright */}
        <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Ifrah Farooq · All rights reserved
        </span>

        {/* Social */}
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          {[
            { icon: <FiLinkedin size={16} />, href: 'https://www.linkedin.com/in/meer-ifrah/', label: 'LinkedIn' },
            { icon: <FiGithub size={16} />, href: 'https://github.com/Ifrah-Farooq', label: 'GitHub' },
            { icon: <FiMail size={16} />, href: 'mailto:meerifrahunnisa@gmail.com', label: 'Email' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              style={{
                width: '2rem', height: '2rem',
                border: '1px solid var(--border)', borderRadius: '0.4rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--muted)', transition: '0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

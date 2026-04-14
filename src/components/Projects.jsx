import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    name: 'Adverti Chat',
    badge: '⭐ Launched at Convergence India 2026 · Bharat Mandapam, New Delhi',
    company: 'Advergrow Solutions',
    website: 'https://app.adverti.chat/',
    period: '2025 – Present',
    fullWidth: true,
    description: 'AI-powered conversational ad analytics web app — connects live Meta Ads & Google Ads accounts to deliver ad audits, spend breakdowns, and revenue attribution in plain English within 60 seconds.',
    highlights: [
      'Led full stack development from conception to final product — presented at Convergence India 2026.',
      'Engineered conversational AI interface using OpenAI API for plain-English interaction with live ad data.',
      'Built front-end with React.js & TypeScript; back-end with NestJS & PostgreSQL for multi-tenant management.',
      'Designed RESTful APIs integrating Meta Marketing API & Google Ads API for real-time campaign data.',
    ],
    tech: ['React.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'OpenAI API', 'Meta Marketing API', 'Google Ads API'],
  },
  {
    name: 'Adverti App',
    badge: null,
    company: 'Advergrow Solutions',
    website: 'https://adverti.app/',
    period: '2024 – Present',
    fullWidth: false,
    description: 'Self-serve ad creation platform — 4-step guided workflow enabling users with no advertising experience to launch Meta & Google Ads campaigns in under 10 minutes.',
    highlights: [
      'Built multi-role portals (admin, customer, dashboard) with mobile-responsive design.',
      'Implemented marketing automation with BullMQ & Redis — reduced failure rates by 40%.',
      'Integrated Meta Marketing API & Google Ads API for end-to-end campaign creation.',
    ],
    tech: ['React.js', 'TypeScript', 'NestJS', 'BullMQ', 'Redis', 'Meta API'],
  },
  {
    name: 'GirnarCare — Facility Management',
    badge: null,
    company: 'Girnarcare Pvt Ltd',
    website: 'https://girnarcare.com',
    period: '2022 – 2024',
    fullWidth: false,
    description: 'Full-stack corporate facility management platform for tracking assets, issues, and users across facilities.',
    highlights: [
      'Built responsive React frontend with dynamic filtering and pagination.',
      'Developed Node.js/Express.js APIs for full CRUD on assets, issues, and users.',
      'Implemented JWT auth with role-based access control (RBAC).',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}>
        <span className="section-tag">my work</span>
        <h2 className="section-title">Featured Projects</h2>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <a
          href="https://github.com/Ifrah-Farooq"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.78rem', color: 'var(--muted)', transition: '0.2s',
            border: '1px solid var(--border)', padding: '0.35rem 0.75rem', borderRadius: '0.4rem',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--teal)'; e.currentTarget.style.borderColor = 'var(--teal)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
        >
          <FiGithub size={14} /> View GitHub Profile
        </a>
      </div>

      <div className="projects-bento">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            className={`card${p.fullWidth ? ' project-full' : ''}`}
            style={{ padding: '1.5rem' }}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.15rem' }}>{p.name}</h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--teal)', fontWeight: 500 }}>{p.company}</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--muted)', marginLeft: '0.5rem' }}>· {p.period}</span>
              </div>
              <a
                href={p.website} target="_blank" rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.25rem',
                  fontSize: '0.72rem', color: 'var(--muted)', transition: '0.2s', flexShrink: 0,
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                {new URL(p.website).hostname.replace('www.', '')} <FiExternalLink size={12} />
              </a>
            </div>

            {/* Achievement badge */}
            {p.badge && (
              <div style={{
                padding: '0.45rem 0.8rem', marginBottom: '0.75rem',
                background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)',
                borderRadius: '0.4rem', fontSize: '0.75rem', color: 'var(--amber)',
              }}>
                {p.badge}
              </div>
            )}

            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              {p.description}
            </p>

            <ul style={{ paddingLeft: 0, marginBottom: '0.85rem' }}>
              {p.highlights.map((h, hi) => (
                <li key={hi} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.35rem', fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--teal)', flexShrink: 0 }}>▸</span>
                  {h}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {p.tech.map(t => <span key={t} className="badge">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

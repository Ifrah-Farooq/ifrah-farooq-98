import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Advergrow Solutions',
    companyUrl: 'adverti.com',
    location: 'Ahmedabad, India (Remote)',
    period: 'Jul 2024 – Present',
    highlight: '⭐ Core engineer on Adverti Chat · Launched at Convergence India 2026, Bharat Mandapam, New Delhi',
    responsibilities: [
      'Served as core full stack developer on Adverti Chat, an AI-powered conversational ad analytics app, from conception to final product.',
      'Engineered conversational AI query interface using OpenAI API — users interact with live Meta & Google Ads data in plain English.',
      'Designed front-end architecture for multiple portals (customer, admin, dashboard) using React.js & TypeScript, improving user engagement by 30%.',
      'Built scalable multi-tenant back-end with NestJS & PostgreSQL, and RESTful APIs integrating Meta Marketing API & Google Ads API.',
      'Ensured responsiveness and cross-platform optimization across all portal interfaces for mobile phones and desktop browsers.',
      'Built background task automation with BullMQ & Redis, reducing critical API failure rates by 40%.',
      'Developed multi-channel notification system (email, in-app), increasing timely user actions by 35%.',
      'Optimized REST API performance through improved server-side architecture, boosting response efficiency by 25%.',
      'Reduced development cycle time by 20% through Agile sprint planning across cross-functional teams.',
      'Contributed to e-commerce website development, delivering conversion-optimized storefronts for client brands.',
    ],
    tech: ['React.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'BullMQ', 'Redis', 'OpenAI API', 'Meta API', 'Google Ads API'],
  },
  {
    title: 'Software Developer',
    company: 'Girnarcare Pvt Ltd',
    companyUrl: 'girnarcare.com',
    location: 'Jaipur, India',
    period: 'May 2022 – Jul 2024',
    highlight: null,
    responsibilities: [
      'Developed front-end architecture and user interactions using React.js for a corporate facility management web application.',
      'Built back-end with Node.js & Express.js, handling CRUD operations for assets, users, and facility data.',
      'Designed RESTful APIs for facility records, issue tracking, and user administration.',
      'Integrated MongoDB with optimized indexing and schema design for scalable database functionality.',
      'Implemented JWT-based authentication with role-based access control (RBAC).',
      'Demonstrated strong problem-solving through Git-based version control, peer code reviews, and Agile sprint delivery.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}>
        <span className="section-tag">my journey</span>
        <h2 className="section-title">Work Experience</h2>
      </motion.div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            style={{ position: 'relative', paddingBottom: i < experiences.length - 1 ? '2.5rem' : 0 }}
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="timeline-dot" />

            {/* Commit-style header */}
            <div style={{ marginBottom: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.15rem' }}>
                    {exp.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <a
                      href={`https://${exp.companyUrl}`} target="_blank" rel="noreferrer"
                      style={{ color: 'var(--teal)', fontWeight: 600, fontSize: '0.875rem' }}
                    >
                      {exp.company}
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
                    <FiCalendar size={12} />
                    {exp.period}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
                    <FiMapPin size={12} />
                    {exp.location}
                  </div>
                </div>
              </div>
            </div>

            {exp.highlight && (
              <div style={{
                padding: '0.5rem 0.85rem', marginBottom: '0.75rem',
                background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)',
                borderRadius: '0.4rem', fontSize: '0.8rem', color: 'var(--amber)',
              }}>
                {exp.highlight}
              </div>
            )}

            <ul style={{ paddingLeft: 0, marginBottom: '0.85rem' }}>
              {exp.responsibilities.map((r, ri) => (
                <li key={ri} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '0.15rem' }}>▸</span>
                  {r}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {exp.tech.map(t => <span key={t} className="badge">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

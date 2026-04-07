import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const education = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    university: 'University of Kashmir',
    location: 'Srinagar, India',
    year: '2021',
    gpa: '4.0 / 4.0',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    university: 'University of Kashmir',
    location: 'Srinagar, India',
    year: '2018',
    gpa: '4.0 / 4.0',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}>
        <span className="section-tag">my qualification</span>
        <h2 className="section-title">Education</h2>
      </motion.div>

      <div className="edu-grid">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            className="card"
            style={{ padding: '1.5rem' }}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: i * 0.12 }}
          >
            {/* Degree badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.3rem 0.7rem', borderRadius: '0.3rem',
              background: 'rgba(0,201,167,0.08)', border: '1px solid rgba(0,201,167,0.2)',
              marginBottom: '1rem',
            }}>
              <FiAward size={14} style={{ color: 'var(--teal)' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--teal)', fontFamily: 'Fira Code, monospace' }}>
                {edu.short}
              </span>
            </div>

            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.3rem' }}>
              {edu.degree}
            </h3>
            <div style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: 500, marginBottom: '0.3rem' }}>
              {edu.university}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1rem' }}>
              {edu.location} · Class of {edu.year}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingTop: '0.75rem', borderTop: '1px solid var(--border)',
            }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                GPA
              </span>
              <span style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.85rem', fontWeight: 700, color: 'var(--amber)' }}>
                {edu.gpa}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

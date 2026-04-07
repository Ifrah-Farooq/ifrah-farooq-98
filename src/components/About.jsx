import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const metrics = [
  { value: 30, suffix: '%', label: 'UX Improvement', sub: 'front-end architecture' },
  { value: 40, suffix: '%', label: 'Failure Rate Cut', sub: 'BullMQ + Redis automation' },
  { value: 35, suffix: '%', label: 'Engagement Boost', sub: 'notification system' },
];

function AnimatedNumber({ value, suffix, inView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v) + suffix);
  const ref = useRef(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" className="section" ref={ref}>
      <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}>
        <span className="section-tag">my intro</span>
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <div className="about-layout">
        {/* Left — bio */}
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            Full Stack Developer with{' '}
            <span style={{ color: 'var(--white)', fontWeight: 600 }}>3+ years of experience</span>{' '}
            architecting front-end and back-end web applications — taking products from
            conception to deployment with strong attention to detail.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            Proficient in{' '}
            <span style={{ color: 'var(--teal)', fontWeight: 500 }}>React.js, TypeScript, NestJS &amp; Node.js</span>,
            with deep expertise in RESTful APIs, multi-tenant systems, and complex database design
            across MySQL, MongoDB, and PostgreSQL.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            Core engineer on{' '}
            <span style={{ color: 'var(--amber)', fontWeight: 600 }}>Adverti Chat</span>{' '}
            — an AI-powered conversational ad analytics platform launched at{' '}
            <span style={{ color: 'var(--white)', fontWeight: 500 }}>Convergence India 2026, Bharat Mandapam, New Delhi</span>.
          </p>

          {/* Current role card */}
          <div className="card" style={{ padding: '1rem 1.25rem', marginTop: '0.5rem' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
              Currently at
            </div>
            <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '1rem' }}>Advergrow Solutions</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
              Full Stack Developer · Jul 2024 – Present
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#34d399', display: 'inline-block',
                boxShadow: '0 0 6px #34d399',
              }} />
              <span style={{ fontSize: '0.75rem', color: '#34d399' }}>Open to new opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* Right — metrics */}
        <motion.div
          initial={{ x: 20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div className="metrics-grid">
            {metrics.map((m, i) => (
              <div key={m.label} className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <div className="metric-value" style={{ color: i % 2 === 0 ? 'var(--teal)' : 'var(--amber)' }}>
                  <AnimatedNumber value={m.value} suffix={m.suffix} inView={inView} />
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--white)', marginTop: '0.4rem' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.2rem', fontFamily: 'Fira Code, monospace' }}>
                  {m.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Quick facts */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--teal)', fontFamily: 'Fira Code, monospace', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              {'// quick.facts'}
            </div>
            {[
              ['🎓', 'MCA · University of Kashmir · 4.0 GPA'],
              ['📍', 'Srinagar, India'],
              ['🏆', 'Convergence India 2026 · Bharat Mandapam'],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.5rem', fontSize: '0.82rem', color: 'var(--muted)', alignItems: 'center' }}>
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

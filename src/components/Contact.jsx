import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

const contactCards = [
  {
    icon: <FiMail size={20} />,
    title: 'Email',
    value: 'meerifrahunnisa@gmail.com',
    link: 'mailto:meerifrahunnisa@gmail.com',
    cta: 'Write me',
  },
  {
    icon: <FiLinkedin size={20} />,
    title: 'LinkedIn',
    value: 'meer-ifrah-un-nisa',
    link: 'https://linkedin.com/in/meer-ifrah-un-nisa-8137a9212',
    cta: 'Connect',
  },
  {
    icon: <FiMapPin size={20} />,
    title: 'Location',
    value: 'Srinagar, India',
    link: null,
    cta: null,
  },
];

// Replace YOUR_FORM_ID with your Formspree form ID (free at formspree.io)
const FORMSPREE_ID = 'YOUR_FORM_ID';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '5rem' }}>
      <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}>
        <span className="section-tag">get in touch</span>
        <h2 className="section-title">Contact Me</h2>
      </motion.div>

      <div className="contact-layout">
        {/* Info column */}
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--white)', marginBottom: '0.5rem' }}>
            Let's talk
          </h3>
          {contactCards.map((c) => (
            <div key={c.title} className="card" style={{
              padding: '1rem 1.25rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
            }}>
              <div style={{
                width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', flexShrink: 0,
                background: 'var(--surface2)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--teal)',
              }}>
                {c.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.15rem' }}>
                  {c.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--white)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {c.value}
                </div>
              </div>
              {c.link && (
                <a href={c.link} target="_blank" rel="noreferrer"
                  style={{ fontSize: '0.72rem', color: 'var(--teal)', flexShrink: 0, transition: '0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--teal)'}
                >
                  {c.cta} →
                </a>
              )}
            </div>
          ))}
        </motion.div>

        {/* Form column */}
        <motion.div
          initial={{ x: 20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.25rem' }}>
            Send a message
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text" required placeholder="Your name"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email" required placeholder="your@email.com"
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                required placeholder="Tell me about your project..."
                rows={5} value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="form-input"
              />
            </div>

            {status === 'sent' && (
              <p style={{ color: '#34d399', fontSize: '0.82rem', marginBottom: '0.75rem', textAlign: 'center' }}>
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#f87171', fontSize: '0.82rem', marginBottom: '0.75rem', textAlign: 'center' }}>
                Something went wrong. Please email me directly at meerifrahunnisa@gmail.com
              </p>
            )}

            <button
              type="submit"
              className="btn-teal"
              disabled={status === 'sending'}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: status === 'sending' ? 0.7 : 1 }}
            >
              <FiSend size={15} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

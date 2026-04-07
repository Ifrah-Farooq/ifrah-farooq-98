import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiHtml5, SiReact, SiNextdotjs,
  SiNodedotjs, SiNestjs, SiExpress, SiStrapi, SiPostgresql, SiMongodb,
  SiMysql, SiRedis, SiDocker, SiGit, SiLinux, SiPostman, SiOpenai,
} from 'react-icons/si';
import { FaCss3Alt, FaAws } from 'react-icons/fa';

const groups = [
  {
    title: 'Frontend',
    color: 'var(--teal)',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'React.js',   icon: <SiReact />,      color: '#61DAFB' },
      { name: 'Next.js',    icon: <SiNextdotjs />,  color: '#fff' },
      { name: 'HTML5',      icon: <SiHtml5 />,      color: '#E34F26' },
      { name: 'CSS3',       icon: <FaCss3Alt />,    color: '#1572B6' },
    ],
  },
  {
    title: 'Backend',
    color: 'var(--amber)',
    skills: [
      { name: 'Node.js',    icon: <SiNodedotjs />, color: '#339933' },
      { name: 'NestJS',     icon: <SiNestjs />,    color: '#E0234E' },
      { name: 'Express.js', icon: <SiExpress />,   color: '#fff' },
      { name: 'BullMQ',     icon: <span style={{ fontWeight: 800, fontSize: '0.85rem' }}>BQ</span>, color: '#E0234E' },
      { name: 'Strapi',     icon: <SiStrapi />,    color: '#8864E9' },
    ],
  },
  {
    title: 'Databases',
    color: 'var(--teal)',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
      { name: 'MongoDB',    icon: <SiMongodb />,    color: '#47A248' },
      { name: 'MySQL',      icon: <SiMysql />,      color: '#4479A1' },
      { name: 'Redis',      icon: <SiRedis />,      color: '#DC382D' },
    ],
  },
  {
    title: 'AI & Ad Tech',
    color: 'var(--amber)',
    skills: [
      { name: 'OpenAI API',   icon: <SiOpenai />,                                    color: '#fff' },
      { name: 'Meta Ads API', icon: <span style={{ fontWeight: 800, fontSize: '1rem' }}>f</span>, color: '#1877F2' },
      { name: 'Google Ads',   icon: <span style={{ fontWeight: 800, fontSize: '1rem' }}>G</span>, color: '#4285F4' },
      { name: 'Amazon Ads',   icon: <span style={{ fontWeight: 800, fontSize: '1rem' }}>a</span>, color: '#FF9900' },
    ],
  },
  {
    title: 'DevOps & Tools',
    color: 'var(--teal)',
    skills: [
      { name: 'Docker',  icon: <SiDocker />,  color: '#2496ED' },
      { name: 'Git',     icon: <SiGit />,     color: '#F05032' },
      { name: 'AWS',     icon: <FaAws />,     color: '#FF9900' },
      { name: 'Linux',   icon: <SiLinux />,   color: '#FCC624' },
      { name: 'PM2',     icon: <span style={{ fontWeight: 800, fontSize: '0.85rem' }}>PM2</span>, color: '#2B037A' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}>
        <span className="section-tag">my toolkit</span>
        <h2 className="section-title">Tech Stack</h2>
      </motion.div>

      <div className="skills-bento">
        {groups.map((group, gi) => (
          <motion.div
            key={group.title}
            className="card"
            style={{ padding: '1.25rem' }}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: gi * 0.07 }}
          >
            {/* Group header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: '1rem', paddingBottom: '0.75rem',
              borderBottom: `1px solid var(--border)`,
            }}>
              <div style={{ width: '3px', height: '14px', background: group.color, borderRadius: '2px' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: group.color, fontFamily: 'Fira Code, monospace' }}>
                {group.title}
              </span>
            </div>

            {/* Skill badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.3rem 0.65rem', borderRadius: '0.35rem',
                    background: 'var(--surface2)', border: '1px solid var(--border)',
                    transition: '0.2s', cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = group.color; e.currentTarget.style.background = 'var(--surface)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface2)'; }}
                >
                  <span style={{ color: skill.color, fontSize: '1rem', lineHeight: 1, display: 'flex', alignItems: 'center' }}>
                    {skill.icon}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--white)', fontWeight: 500 }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

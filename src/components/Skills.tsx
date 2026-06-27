import { motion } from 'framer-motion'
import {
  SiFigma,
  SiGoogleads,
  SiMeta,
  SiWordpress,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiGit,
} from 'react-icons/si'
import { TbSeo, TbBrandFramer, TbBrush } from 'react-icons/tb'
import './Skills.css'

const skills = [
  { name: 'UI/UX Design', icon: SiFigma, level: 90, color: '#F24E1E' },
  { name: 'Photoshop', icon: TbBrush, level: 85, color: '#31A8FF' },
  { name: 'SEO', icon: TbSeo, level: 88, color: '#8b5cf6' },
  { name: 'Google Ads', icon: SiGoogleads, level: 82, color: '#4285F4' },
  { name: 'Meta Ads', icon: SiMeta, level: 80, color: '#0081FB' },
  { name: 'WordPress', icon: SiWordpress, level: 85, color: '#21759B' },
  { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, level: 92, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, level: 88, color: '#F7DF1E' },
  { name: 'Figma', icon: SiReact, level: 85, color: '#61DAFB' },
  { name: 'Canva', icon: TbBrandFramer, level: 80, color: '#0055FF' },
  { name: 'Git', icon: SiGit, level: 78, color: '#F05032' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Skills</span>
          <h2 className="section-title">What I Do Best</h2>
          <p className="section-subtitle">
            A diverse skill set combining design, marketing, and development expertise
          </p>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skills__card glass"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="skills__card-header">
                <div
                  className="skills__icon-wrapper"
                  style={{ background: `${skill.color}20`, color: skill.color }}
                >
                  <skill.icon />
                </div>
                <span className="skills__name">{skill.name}</span>
              </div>
              <div className="skills__bar">
                <motion.div
                  className="skills__bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                />
              </div>
              <span className="skills__level">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

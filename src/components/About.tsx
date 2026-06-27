import { motion } from 'framer-motion'
import {
  SiGoogleads,
  SiMeta,
  SiWordpress,
  SiFigma,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
} from 'react-icons/si'
import { TbSeo } from 'react-icons/tb'
import './About.css'

const knowledgeItems = [
  { name: 'SEO', icon: TbSeo },
  { name: 'Google Ads', icon: SiGoogleads },
  { name: 'Meta Ads', icon: SiMeta },
  { name: 'WordPress', icon: SiWordpress },
  { name: 'UI/UX', icon: SiFigma },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Google Analytics', icon: SiReact },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            Digital Marketing graduate with knowledge in modern web technologies and creative design
          </p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__content glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="about__heading">My Journey</h3>
            <p className="about__text">
              I&apos;m a passionate Digital Marketing graduate who blends creativity with technical
              skills to deliver exceptional digital experiences. From crafting user-friendly
              interfaces to running successful ad campaigns, I bring a holistic approach to every
              project.
            </p>
            <p className="about__text">
              My expertise spans across SEO optimization, paid advertising on Google and Meta
              platforms, WordPress development, and modern frontend technologies. I believe in
              creating solutions that not only look great but also drive measurable results.
            </p>
            <div className="about__stats">
              {[
                { value: '10+', label: 'Projects' },
                { value: '5+', label: 'Technologies' },
                { value: '100%', label: 'Dedication' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="about__stat"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="about__stat-value gradient-text">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about__knowledge"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="about__knowledge-title">Knowledge In</h3>
            <div className="about__knowledge-grid">
              {knowledgeItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="about__knowledge-item glass"
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <item.icon className="about__knowledge-icon" />
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

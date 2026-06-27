import { motion } from 'framer-motion'
import { HiDownload, HiDocumentText } from 'react-icons/hi'
import './Resume.css'

const highlights = [
  'Digital Marketing Graduate',
  'UI/UX Design Experience',
  'Frontend Development Skills',
  'SEO & Paid Advertising',
  'WordPress Development',
]

function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Resume</span>
          <h2 className="section-title">Download My CV</h2>
          <p className="section-subtitle">
            Get a detailed overview of my skills, experience, and qualifications
          </p>
        </motion.div>

        <motion.div
          className="resume__card glass"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="resume__icon-wrapper"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiDocumentText className="resume__icon" />
          </motion.div>

          <h3 className="resume__title">Manikandan&apos;s Resume</h3>
          <p className="resume__subtitle">
            PDF format · Updated 2025
          </p>

          <ul className="resume__highlights">
            {highlights.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/resume.pdf.pdf"
            download="Manikandan_Resume.pdf.pdf"
            className="btn btn-primary btn-glow resume__download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume

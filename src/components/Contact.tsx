import { motion } from 'framer-motion'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'manikandan.prbm99@gmail.com',
    href: 'mailto:manikandan.prbm99@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/manikandan',
    href: 'https://linkedin.com/in/manikandan',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/manikandan',
    href: 'https://github.com/manikandan',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: '@manikandan',
    href: 'https://instagram.com/manikandan',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+91 63794 42289',
    href: 'tel:+916379442289',
  },
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

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <motion.div
          className="contact__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {contactInfo.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="contact__card glass"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)',
              }}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="contact__icon-wrapper">
                <item.icon className="contact__icon" />
              </div>
              <span className="contact__label">{item.label}</span>
              <span className="contact__value">{item.value}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="contact__cta glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="contact__cta-title">Ready to start a project?</h3>
          <p className="contact__cta-text">
            Let&apos;s create something amazing together. Drop me a message and I&apos;ll get back to you soon.
          </p>
          <motion.a
            href="mailto:manikandan.prbm99@gmail.com"
            className="btn btn-primary btn-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiMail />
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

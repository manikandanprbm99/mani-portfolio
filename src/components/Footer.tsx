import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiMail, HiHeart } from 'react-icons/hi'
import './Footer.css'

const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com/in/manikandan', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/manikandan', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com/manikandan', label: 'Instagram' },
  { icon: HiMail, href: 'mailto:manikandan.prbm99@gmail.com', label: 'Email' },
]

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__glass glass">
        <div className="container footer__inner">
          <motion.div
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="footer__logo">
              <span className="gradient-text">M</span>anikandan
            </a>
            <p className="footer__tagline">
              UI/UX Designer · Digital Marketer · Frontend Developer
            </p>
          </motion.div>

          <motion.nav
            className="footer__nav"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </motion.nav>

          <motion.div
            className="footer__social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="footer__social-link"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="footer__bottom">
          <div className="container">
            <motion.p
              className="footer__copyright"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              © {year} Manikandan. Made with{' '}
              <HiHeart className="footer__heart" /> Manikandan
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

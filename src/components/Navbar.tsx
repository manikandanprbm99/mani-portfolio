import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="navbar__inner container">
        <motion.a
          href="#home"
          className="navbar__logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="gradient-text">M</span>
          <span>anikandan</span>
        </motion.a>

        <ul className="navbar__links">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="btn btn-primary navbar__cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.a>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="navbar__mobile-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={handleNavClick} className="navbar__mobile-link">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={handleNavClick} className="btn btn-primary">
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar

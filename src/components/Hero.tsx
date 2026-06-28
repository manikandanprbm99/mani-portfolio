import { motion } from 'framer-motion'
import { HiDownload, HiArrowDown } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import TypingAnimation from './TypingAnimation'
import profileImg from '../assets/manikandan.svg.jpg'
import './Hero.css'

const roles = ['UI/UX Designer', 'Digital Marketer', ]

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I&apos;m <span className="gradient-text">Manikandan</span>
          </motion.h1>

          <motion.div
            className="hero__role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero__role-label">I&apos;m a </span>
            <TypingAnimation words={roles} />
          </motion.div>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I blend user-centric UI/UX design with high-performance digital marketing to build digital products that scale. From wireframing clean interfaces to launching growth-driven SEO strategies, I create web experiences that captivate and convert.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary btn-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
            <motion.a
              href="/resume.pdf.pdf"
              download="Manikandan_Resume.pdf.pdf"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="hero__social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
              { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link glass"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="hero__image-wrapper glass"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero__image-glow" />
            <img
              src={profileImg}
              alt="Manikandan"
              className="hero__image"
              loading="eager"
            />
          </motion.div>

          <motion.div
            className="hero__badge hero__badge--1 glass"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className="hero__badge-number">DM</span>
            <span className="hero__badge-text">Fresher</span>
          </motion.div>

          <motion.div
            className="hero__badge hero__badge--2 glass"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <span className="hero__badge-number">10+</span>
            <span className="hero__badge-text">Projects Done</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about section"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero

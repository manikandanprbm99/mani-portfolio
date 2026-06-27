import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import restaurantImg from '../assets/food.svg.jpg'
import mahindraImg from '../assets/wd.svg.jpg'
import ecommerceImg from '../assets/ecom.svg.jpg'
import portfolioImg from '../assets/ads.svg.jpg'
import './Projects.css'

interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  liveDemo: string
  github: string
}

const projects: Project[] = [
  {
    title: 'Restaurant Website',
    description:
      'A modern, responsive restaurant website featuring online menu, reservation system, and stunning food photography gallery.',
    image: restaurantImg,
    techStack: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    liveDemo: 'https://heavensrestaurant.shop/',
    github: 'https://github.com/manikandanprbm99/My-website',
  },
  {
    title: 'Mahindra Website',
    description:
      'Corporate website redesign for Mahindra showcasing their automotive portfolio with interactive product showcases.',
    image: mahindraImg,
    techStack: ['Wordpress CMS', 'CSS', 'Google Analytics', 'Google console'],
    liveDemo: 'https://mahindra.fun/',
    github: 'https://github.com/manikandanprbm99/My-website',
  },
  {
    title: 'E-Commerce Website',
    description:
      'Full-featured e-commerce platform with product catalog, shopping cart, and secure checkout experience.',
    image: ecommerceImg,
    techStack: ['Wordpress', 'Plugin', 'Woocommerce', 'Mysql'],
    liveDemo: 'https://dev-maniworld.pantheonsite.io/',
    github: 'https://github.com/manikandanprbm99/My-website',
  },
  {
    title: 'Lead Generation Campaign',
    description:
      'Designed and implemented a targeted digital marketing campaign, resulting in 3 potential customer leads through effective content and promotion strategies.',
    image: portfolioImg,
    techStack: ['Meta ads', 'Campaign', 'SEM', 'SMM'],
    liveDemo: 'https://kommodo.ai/i/AdYldvgTgoz1tzXbcINw',
    github: '#',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work across design, marketing, and development
          </p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="projects__card glass"
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="projects__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects__image"
                  loading="lazy"
                />
                <div className="projects__image-overlay" />
              </div>

              <div className="projects__content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>

                <div className="projects__tech">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="projects__actions">
                  <motion.a
                    href={project.liveDemo}
                    className="projects__btn projects__btn--primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiExternalLink />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="projects__btn projects__btn--outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

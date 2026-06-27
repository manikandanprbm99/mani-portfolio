import { motion } from 'framer-motion'
import './AnimatedBlobs.css'

const blobs = [
  { id: 1, className: 'blob blob-1', duration: 20 },
  { id: 2, className: 'blob blob-2', duration: 25 },
  { id: 3, className: 'blob blob-3', duration: 18 },
]

function AnimatedBlobs() {
  return (
    <div className="animated-blobs" aria-hidden="true">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={blob.className}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -40, 20, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBlobs

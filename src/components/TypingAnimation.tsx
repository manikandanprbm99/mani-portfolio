import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './TypingAnimation.css'

interface TypingAnimationProps {
  words: string[]
}

function TypingAnimation({ words }: TypingAnimationProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, words])

  return (
    <span className="typing-animation">
      <motion.span
        className="typing-text gradient-text"
        key={wordIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayText}
      </motion.span>
      <motion.span
        className="typing-cursor"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      >
        |
      </motion.span>
    </span>
  )
}

export default TypingAnimation

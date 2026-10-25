'use client'

import { useEffect, useState } from 'react'

export function TypewriterTitle() {
  const fullText = 'Software Developer'
  const word1 = 'Software'
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(fullText)
      return
    }

    let timer: NodeJS.Timeout

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1))
        }, 110)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2200)
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1))
        }, 65)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false)
        }, 600)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, mounted, fullText])

  const textToRender = mounted ? displayText : ''
  const line1 = textToRender.slice(0, word1.length)
  const isPastWord1 = textToRender.length > word1.length
  const line2 = isPastWord1 ? textToRender.slice(word1.length + 1) : ''

  return (
    <h1 className="hero-title" aria-label={fullText}>
      <span aria-hidden="true">
        {line1}
        {!isPastWord1 && <span className="typewriter-cursor">|</span>}
        {isPastWord1 && (
          <>
            <br />
            <em>{line2}</em>
            <span className="typewriter-cursor">|</span>
          </>
        )}
      </span>
      <span className="sr-only">{fullText}</span>
    </h1>
  )
}


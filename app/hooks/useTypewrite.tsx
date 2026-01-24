"use client"

import { useState, useEffect } from "react"

const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState<string>("")
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return displayText
}

export default useTypewriter

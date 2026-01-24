"use client"

import { useState, useEffect } from "react"

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number | null = null

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => {
      if (animationFrame !== null) cancelAnimationFrame(animationFrame)
    }
  }, [end, duration])

  return count
}

export default useCounter

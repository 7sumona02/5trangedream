'use client'

import { useEffect, useState } from "react"

const Time = () => {
     const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formattedTime = time.toLocaleTimeString("en-GB", { hour12: false })
  return (
    <div>{formattedTime}</div>
  )
}

export default Time
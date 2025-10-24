"use client"
import { useEffect, useState } from "react"

export default function Page() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formattedTime = time.toLocaleTimeString("en-GB", { hour12: false })
  const hoverStyle = "hover:text-[#2d0d1a] hover:bg-[#b8b890] cursor-pointer"

  const works = [
    { title: "Free Gluten", role: "Freelance Developer", time: "2025" },
    { title: "FuturixAI", role: "Frontend Developer", time: "Oct/25" },
    { title: "CVNT", role: "Tech Intern", time: "Jun/25" },
    { title: "Veridia.io", role: "Designer", time: "Oct/25" },
  ]

  const projects = ["Yoake Studio", "Code Canvas"]
  const socials = ["Github", "Linkedin", "Email", "Resume"]

  return (
    <div className="min-h-screen flex md:justify-start justify-center items-center bg-[#2d0d1a] selection:text-[#2d0d1a] selection:bg-[#b8b890]">
      <div className="flex flex-col justify-center items-start md:p-10 p-5 font-mono text-[#b8b890] font-medium text-sm md:w-lg w-full">
        <header className="flex justify-between md:w-lg w-full items-end">
          <span>Sumona Biswas</span>
          <span className="text-xs">{formattedTime}</span>
        </header>

        <section className="pt-5 space-y-1">
          <p>Design Engineer, Developer + Designer on the web.</p>
          <p>Exploring & observing designs.</p>
          <p>
            Find my UI experiments at{" "}
            <span className={`${hoverStyle} underline`}>lab</span>.
          </p>
        </section>

        <section className="pt-5 md:w-lg w-full">
          <h2>{`{Works}`}</h2>
          <div className="pt-3 space-y-0.5">
            {works.map(({ role, title, time }) => (
              <div key={title} className="flex justify-between">
                <div>
                  ↳ {role} at <span className={`${hoverStyle} underline`}>{title}</span>
                </div>
                <div>~ {time}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-5">
          <h2>{`{Projects}`}</h2>
          <div className="pt-3 space-y-0.5">
            {projects.map((project) => (
              <div key={project}>
                ↳ <span className={`${hoverStyle} underline`}>{project}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-5">
          <h2>{`{Online}`}</h2>
          <div className="pt-3 space-y-0.5">
            {socials.map((name) => (
              <div key={name}>
                ↳ <span className={hoverStyle}>{name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

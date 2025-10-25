"use client"
import { useEffect, useState } from "react"
import DitherTrail from "@/components/Cursor";

export default function Page() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formattedTime = time.toLocaleTimeString("en-GB", { hour12: false })
  const hoverStyle = "hover:text-black hover:bg-[#dddedf] cursor-pointer"

  const works = [
    { title: "Free Gluten", role: "Freelance Developer", time: "2025" },
    { title: "FuturixAI", role: "Frontend Developer", time: "Oct/25" },
    { title: "CVNT", role: "Tech Intern", time: "Jun/25" },
    { title: "Veridia.io", role: "Designer", time: "Oct/25" },
  ]

  const projects = ["Ticker", "Yoake Studio", "Code Canvas"]
  const socials = ["Github", "Linkedin", "Email", "Resume"]

  return (
    <div className="h-screen flex justify-center items-center bg-[#5652f5] selection:text-black selection:bg-[#dddedf] overflow-hidden">
      <DitherTrail
        className="w-screen h-screen fixed inset-0 pointer-events-none"
        trailColor="#dddedf"
        dotSize={15}
        fadeDuration={600}
      />
      <div className="flex flex-col md:p-10 p-5 font-mono text-[#dddedf] font-medium text-sm w-xl">
        <header className="flex justify-between w-full items-end">
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
          <p>
            I also{" "}
            <span className={`${hoverStyle} underline`}>write</span>.
          </p>
        </section>

        <section className="pt-5 w-full">
          <h2>{`{Works}`}</h2>
          <div className="pt-3 space-y-1">
            {works.map(({ role, title, time }) => (
              <div
                key={title}
                className="flex justify-between items-center flex-nowrap text-sm"
              >
                <div className="truncate">
                  ↳ {role} at{" "}
                  <span className={`${hoverStyle} underline`}>{title}</span>
                </div>
                <div className="ml-2 shrink-0 text-right">~ {time}</div>
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
      {/* <Link href='/lab'><div className="md:block hidden relative"><div className="bg-[#b8b890]/30 absolute m-auto inset-0 w-[250px] h-full z-50 hover:opacity-100 opacity-0 duration-250 ease-out transition-all"></div><HorizontalMarquee /></div></Link> */}
    </div>
  )
}

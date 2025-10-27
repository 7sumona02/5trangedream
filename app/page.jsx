"use client"
import { useEffect, useState } from "react"
import DitherTrail from "@/components/Cursor";
import SmoothFadeLayout from "@/components/SmoothFadePageTransition"
import Link from "next/link";

export default function Page() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formattedTime = time.toLocaleTimeString("en-GB", { hour12: false })
  const hoverStyle = "hover:text-black hover:bg-[#dddedf] cursor-pointer"

  const works = [
    { title: "Free Gluten", role: "Freelance Developer", time: "2025", link: "https://www.freegluten2025.com/" },
    { title: "FuturixAI", role: "Frontend Developer", time: "Oct/25", link: "https://www.futurixai.com/" },
    { title: "CVNT", role: "Tech Intern", time: "Jun/25", link: "https://www.linkedin.com/company/wearcvnt/" },
    { title: "Veridia.io", role: "Designer", time: "Oct/25", link: "https://www.linkedin.com/company/veridia-io/posts/?feedView=all" },
  ]

  const projects = [
    { name: "Ticker", link: "https://ticker-next.vercel.app/" },
    { name: "Yoake Studio", link: "https://yoake-studio.vercel.app/" },
    { name: "Code Canvas", link: "https://code-canvas-neon.vercel.app/" },
  ];
  const socials = ["Github", "Linkedin", "Email", "Resume"]

  return (
    <div className="md:h-screen min-h-dvh flex justify-center items-center bg-[#5652f5] selection:text-black selection:bg-[#dddedf] overflow-hidden py-5">
      <DitherTrail
        className="w-screen h-screen fixed inset-0 pointer-events-none"
        trailColor="#dddedf"
        dotSize={15}
        fadeDuration={600}
      />
      <SmoothFadeLayout className="flex justify-center items-center">
        <div className="flex flex-col md:p-10 p-5 font-mono text-[#dddedf] font-medium text-sm md:w-xl">
          <header className="flex justify-between w-full items-end">
            <span>Sumona Biswas</span>
            <span className="text-xs">{formattedTime}</span>
          </header>

          <section className="pt-5 space-y-1">
            <p>Design Engineer, Developer + Designer on the web.</p>
            <p>
              Find my UI experiments at{" "}
              <Link href='/lab' className={`${hoverStyle} underline`}>lab</Link>.
            </p>
            <p>
              I also{" "}
              <Link href='/blog' className={`${hoverStyle} underline`}>write</Link>.
            </p>
          </section>

          <section className="pt-5 w-full">
            <h2>{`{Works}`}</h2>
            <div className="pt-3 space-y-1">
              {works.map(({ role, title, time, link }) => (
                <div
                  key={title}
                  className="flex justify-between items-center flex-nowrap text-sm"
                >
                  <div className="truncate">
                    ↳ {role} at{" "}
                    <Link href={link} target="_blank" className={`${hoverStyle} underline`}>{title}</Link>
                  </div>
                  <div className="ml-2 shrink-0 text-right">~ {time}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-5">
            <h2>{`{Projects}`}</h2>
            <div className="pt-3 space-y-0.5">
              {projects.map(({ name, link }) => (
                <div key={name}>
                  ↳ <Link href={link} className={`${hoverStyle} underline`} target="_blank">
                    {name}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-5 w-full">
            <h2>{`{OpenSource}`}</h2>
            <div className="pt-3 space-y-1">
              <Link href='/blog/lexit'>↳ <span className={`${hoverStyle} underline`}>Lexit</span></Link>
              <div></div>
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
      </SmoothFadeLayout>
      {/* <Link href='/lab'><div className="md:block hidden relative"><div className="bg-[#b8b890]/30 absolute m-auto inset-0 w-[250px] h-full z-50 hover:opacity-100 opacity-0 duration-250 ease-out transition-all"></div><HorizontalMarquee /></div></Link> */}
    </div>
  )
}


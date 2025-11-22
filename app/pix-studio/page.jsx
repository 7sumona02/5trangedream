'use client'
import { ClipboardIcon } from 'lucide-react'
import Link from 'next/link';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { GoGlobe } from 'react-icons/go';
import { toast } from "sonner"
import { useEffect, useState } from 'react';
import Time from '@/components/Time'
import {cn} from '@/lib/utils'
import SmoothFadeLayout from "@/components/SmoothFadePageTransition"

const page = () => {
  const [selected, setSelected] = useState("info");

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("sumonadotwork@gmail.com");
    toast("Email copied!")
  };

  const hoverStyle = "hover:text-black hover:bg-[#dddedf] cursor-pointer"

  return (
     <SmoothFadeLayout>
    <div className='w-screen md:h-screen h-dvh flex md:flex-row flex-col text-[#dddedf] uppercase font-mono text-sm'>

      {/* LEFT SIDE */}
      <div className='flex-1 flex flex-col h-screen justify-between md:border-r border-r-[#dddedf]'>

        {/* Top Bar */}
        <div>
          <div className='w-full flex justify-between items-center border-b border-b-[#dddedf] p-3 px-5'>
            <div className='font-display'>PIX STUDIO</div>
            <div className='flex items-center gap-3'>
              <div
                onClick={() => setSelected("info")}
                className={`${hoverStyle} px-2 ${selected === "info" ? "text-black bg-[#dddedf]" : ""}`}
              >
                Info
              </div>
              <div
                onClick={() => setSelected("contact")}
                className={`${hoverStyle} px-2 ${selected === "contact" ? "text-black bg-[#dddedf]" : ""}`}
              >
                Contact
              </div>
            </div>
          </div>

          {/* CONTENT AREA */}
          <div className="content py-9">

            {/* -------- INFO CONTENT -------- */}
            {selected === "info" && (
              <>
                <div className='md:w-md pb-9 px-5'>
                  Built for artists, musicians, and modern creatives, we are a design studio where digital craft meets visual storytelling.
                  From expressive websites to bold cover art and flyers, our work is rooted in clarity, imagination, and attention to detail.
                  We shape visuals that feel true to you. making sure every piece fits together to elevate your creative world.
                </div>

                <div className='w-full mt-9 pt-5 px-5 border-t border-t-[#dddedf]'>
                  <p>{`{Services}`}</p>
                  <div className='space-y-1 mt-3 w-fit'>
                    <div>
                      ↳ <span className={`${hoverStyle} underline`}>Web Design & Development</span>
                    </div>
                    <div>
                      ↳ <span className={`${hoverStyle} underline`}>Creative Direction</span>
                    </div>
                    <div>
                      ↳ <span className={`${hoverStyle} underline`}>Cover Art & Visual Assets</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* -------- CONTACT FORM -------- */}
            {selected === "contact" && (
              <form className="flex flex-col gap-4 w-full max-w-md px-5">
                <div className='pb-9'>
                  We partner with creatives to craft websites, visuals, and stories that stand out. Tell us what you're building. if we can help shape it, we'll be in touch.
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border border-[#dddedf] placeholder:text-[#dddedf]/70 p-2 uppercase text-[#dddedf] focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border border-[#dddedf] placeholder:text-[#dddedf]/70 p-2 uppercase text-[#dddedf] focus:outline-none" />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="bg-transparent border border-[#dddedf] placeholder:text-[#dddedf]/70 p-2 uppercase text-[#dddedf] focus:outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="py-2 bg-[#dddedf] text-black uppercase"
                >
                  Submit
                </button>
              </form>
            )}

          </div>
        </div>

        {/* Bottom Bar */}
        <div className='w-full flex justify-between items-center border-t border-b border-t-[#dddedf] md:border-b-transparent border-b-[#dddedf] p-3 px-5'>
          <div onClick={handleEmailCopy} className='bg-[#dddedf] border border-black py-1 px-2 flex items-center gap-2 text-sm cursor-pointer group text-black'>
            <span>sumonadotwork@gmail.com</span>
            <ClipboardIcon className='size-[15px] opacity-70 group-hover:opacity-100 transition-all mb-0.5' />
          </div>
          <div className='flex items-center gap-3'>
            <FaXTwitter className='size-4' />
            <FaInstagram className='size-4' />
            <Link href='/home'><GoGlobe className='size-4' /></Link>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className='flex-1 flex flex-col h-screen justify-between'>

        {/* Top Bar */}
        <div>
          <div className='w-full flex justify-between items-center border-b border-b-[#dddedf] p-3 px-5'>
            <div className='font-display'>{`{selected works}`}</div>
            <div><Time /></div>
          </div>

          {/* CONTENT AREA */}
          <div className='p-5 pb-12 h-[94vh] overflow-y-scroll scrollbar-none flex flex-col gap-7'>
            <WorkCard
              href='https://void55.vercel.app/'
              images={[
                "/works/v1.webp",
                "/works/v2.webp",
                "/works/v3.webp",
                "/works/v4.webp",
              ]}
              title="Void"
              category="Web"
              year="'25"
            />

            <WorkCard
              href='https://rawless999.vercel.app/'
              images={[
                "/works/r1.webp",
                "/works/r2.webp",
                "/works/r3.webp"
              ]}
              title="Rawless"
              category="Web"
              year="'25"
            />

            <ArtCard imgUrl='/works/c1.webp' title='cover art' year="'25" className={'pb-8'} />

            <div className='w-full flex justify-end'>
              <ArtCard imgUrl='/works/c2.webp' title='cover art' year="'25" />
            </div>

            <WorkCard
              href='https://lunar-motel.framer.website/'
              images={[
                "/works/h1.webp",
                "/works/h2.webp",
              ]}
              title="Lunar Motel"
              category="Web"
              year="'25"
            />

            <WorkCard
              href='https://beabadoobee-67.framer.website/'
              images={[
                "/works/b1.webp",
                "/works/b2.webp",
                "/works/b3.webp",
              ]}
              title="beabadoobee"
              category="Web"
              year="'25"
            />

            <ArtCard imgUrl='/works/c4.webp' title='cover art' year="'25" className={'pb-8'} />

            <div className='w-full flex justify-end'>
              <ArtCard imgUrl='/works/c3.webp' title='cover art' year="'25" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className='w-full flex justify-between items-center border-t border-t-[#dddedf] p-3 px-5'>
          <div onClick={handleEmailCopy} className='bg-[#dddedf] border border-black py-1 px-2 flex items-center gap-2 cursor-pointer group text-black text-sm'>
            <span>sumonadotwork@gmail.com</span>
            <ClipboardIcon className='size-[15px] opacity-70 group-hover:opacity-100 transition-all mb-0.5' />
          </div>
          <div className='flex items-center gap-3'>
            <FaXTwitter className='size-4' />
            <Link href='/home'><GoGlobe className='size-4' /></Link>
          </div>
        </div> */}

      </div>
    </div>
    </SmoothFadeLayout>
  )
}

export default page

const ArtCard = ({imgUrl, title, year, className}) => {
  return (
    <div className={cn('w-1/2 h-fit', className)}>
      <img src={imgUrl} alt='art' className='w-full h-full object-cover' />
      <div className="flex justify-between items-center mt-3">
        <div>{title}</div>
        <div>{year}</div>
      </div>
    </div>
  )
}

const WorkCard = ({ images = [], href, title, category, year }) => {
  const [hovering, setHovering] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!hovering || images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, [hovering, images.length]);

  return (
    <Link href={href} target='_blank'>
      <div
        className="relative w-full h-[47vh] bg-[#dddedf] overflow-hidden"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          setIndex(0);
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className={`
              absolute inset-0 w-full h-full object-cover transition-all ease-out duration-250
              ${index === i ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-3">
        <div>{title}</div>
        <div>{category}</div>
        <div>{year}</div>
      </div>
    </Link>
  );
};


'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { AiFillApple, AiFillInstagram, AiFillSpotify, AiFillYoutube } from 'react-icons/ai'

const releases = [
  { title: 'Disipación', img: 'https://i.scdn.co/image/ab67616d0000b273b8c5ef65bddf493ceebb7022', link: 'https://open.spotify.com/track/3cf182OaSweBnsRHMdO5ZQ' },
  { title: 'Septiembre', img: 'https://i.scdn.co/image/ab67616d0000b27371ca57b02b4f03a46849679d', link: 'https://open.spotify.com/track/36UpDhGjb0dNAoVoUYPTfm' },
  { title: "There's always another way", img: 'https://i.scdn.co/image/ab67616d0000b273ae8319f6bd4a1634f009462b', link: 'https://open.spotify.com/track/3W0d31xh9DJt8InTctghsD' },
  { title: 'Wound-Kotung', img: 'https://i.scdn.co/image/ab67616d0000b273b6999b9b351bbeab2cfdfbd4', link: 'https://open.spotify.com/track/6an5vZAhKcN0K2X6Vv6wal' },
  { title: 'cascada al hemisferio derecho', img: 'https://i.scdn.co/image/ab67616d0000b2739a45263eaf6daaeadf92b09f', link: 'https://open.spotify.com/track/4ZWvLdEPowjXKlnHKN7a9S' },
]

const icons = [
  { Icon: AiFillSpotify, link: "https://open.spotify.com/intl-es/artist/4lJVzoSN6iGOYpFGfOCato?si=qXBEgrWHQ9adPxcglE7wbA", name: "Spotify" },
  { Icon: AiFillApple, link: "https://music.apple.com/es/artist/rawless/1254989466", name: "Apple Music" },
  { Icon: AiFillInstagram, link: "https://instagram.com/rawless999", name: "Instagram" },
  { Icon: AiFillYoutube, link: "https://youtube.com/@rawless999", name: "YouTube" },
]

const page = () => {
  return (
    <div className='md:min-h-screen min-h-dvh w-screen bg-neutral-50 overflow-hidden'>
      <Nav />
      <Main />
      <Video />
      <Music />
      <Footer />
    </div>
  )
}

export default page

const Footer = () => {
  return (
    <footer className="w-screen py-4 px-5 flex items-center justify-between text-sm text-neutral-600">
      <Text className="text-xs">
        © {new Date().getFullYear()} All rights reserved. <br />
      </Text>
        <Link target='_blank' href='https://www.sumona.me/studio'><Text className="text-xs text-right">
          Made by Pix Studio
        </Text>
        </Link>
    </footer>

  )
}

const Music = () => {
  return (
    <section id='music' className='min-h-screen w-screen flex items-center justify-center md:px-0 px-5'>
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "0px" }}
        src="https://open.spotify.com/embed/artist/4lJVzoSN6iGOYpFGfOCato?utm_source=generator&theme=0"
        width="100%"
        height="600"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        allowFullScreen
        className='md:w-[40%] w-sm'
      ></iframe>
    </section>
  )
}

const Video = () => {
  return (
    <section id='videos' className='min-h-screen w-screen flex flex-col justify-center items-center bg-black'>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/7ZHyEajIZP4?si=lhek_QfqrW6EPbGo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className='md:w-xl h-96 w-xs'
      ></iframe>
      <a
        href='https://www.youtube.com/channel/UCUUihbIWTKYdsxWBqjugl4Q'
        target='_blank'
        rel='noopener noreferrer'>
        <div
          className={cn(
            'md:mt-10 mt-7 bg-black text-white py-2 px-4 flex items-center justify-center cursor-pointer gap-2 border border-white',
          )}
        >
          <FaYoutube />
          <Text className='text-sm'>Watch on Youtube</Text>
        </div>
      </a>
    </section>
  )
}

// const Footer = () => {
//   return (
//     <div className='w-screen grid md:grid-cols-3 grid-cols-1 h-fit fixed bottom-0'>
//       <FooterButton icon={FaSpotify} className='md:border-r md:border-r-neutral-50 border-b border-b-neutral-50'  link='https://open.spotify.com/artist/4lJVzoSN6iGOYpFGfOCato'>
//         Spotify
//       </FooterButton>
//       <FooterButton icon={FaApple} className='md:border-r md:border-r-neutral-50 border-b border-b-neutral-50'  link='https://www.crystalcastles.com/'>
//         Apple Music
//       </FooterButton>
//       <FooterButton icon={FaYoutube} link='https://japanesebreakfast.rocks/'>
//         YouTube Music
//       </FooterButton>
//     </div>
//   )
// }

// const FooterButton = ({ children, className, icon: Icon, link }) => {
//   return (
//     <a 
//       href={link}
//       target='_blank'
//       rel='noopener noreferrer'>
//     <div
//       className={cn(
//         'bg-black text-white py-4 flex items-center justify-center cursor-pointer gap-2',
//         className
//       )}
//     >
//       {Icon && <Icon className='size-4' />}
//       <Text className='text-sm'>Listen on {children}</Text>
//     </div>
//     </a>
//   )
// }

const Main = () => {
  const defaultImg = '/rw.webp'
  const [currentImg, setCurrentImg] = useState(defaultImg)
  return (
    <section className='w-screen md:h-[96vh] h-dvh overflow-hidden flex md:flex-row flex-col md:gap-0 gap-10 px-5 py-10'>
      <div className='md:flex-1 h-screen w-full'>
        <div className='h-[50vh] md:w-[30vw] overflow-hidden bg-black'>
          <img src={currentImg} className='w-full h-full song-img' />
        </div>
      </div>
      <div className='md:flex-1 h-screen w-full flex flex-col'>
        <div>
          <Text className='text-sm text-neutral-400'>Releases</Text>
          <div className='mt-5 w-fit'>
            {releases.map((r, i) => (
              <a
                key={i}
                href={r.link}
                target='_blank'
                rel='noopener noreferrer'
                onMouseEnter={() => setCurrentImg(r.img)}
                onMouseLeave={() => setCurrentImg(defaultImg)}
              >
                <ReleaseLink
                >
                  {r.title}
                </ReleaseLink>
              </a>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 md:mt-[58.5vh] mt-15'>
          <Text className='text-sm text-neutral-400'>Links</Text>
          <div className='flex space-x-3 items-center'>
            {icons.map(({ Icon, link, name }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                className="cursor-pointer"
              >
                <Icon className="size-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Nav = () => {
  return (
    <nav className='w-full flex justify-between items-center px-5 py-3 h-[5vh]'>
      <Text>Rawless</Text>
      <div className='flex gap-5 items-center'>
        <Link href='#videos'><Text>Videos</Text></Link>
        <Link href='#music'><Text>Music</Text></Link>
        <Link href='mailto:bookingrawless@gmail.com'><Text>Contact</Text></Link>
      </div>
    </nav>
  )
}

const Text = ({ children, className }) => {
  return (
    <div className={cn('uppercase font-semibold tracking-tight font-sans', className)}>{children}</div>
  )
}

const ReleaseLink = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn('w-fit uppercase font-semibold tracking-tight font-sans text-xl text-neutral-400 hover:text-black transition-all duration-200 cursor-pointer', className)}>{children}</div>
  )
}
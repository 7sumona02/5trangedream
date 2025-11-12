'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { FaApple, FaSpotify, FaYoutube } from 'react-icons/fa'

const releases = [
    { title: 'Disipación', img: 'https://i.scdn.co/image/ab67616d0000b273b8c5ef65bddf493ceebb7022', link: 'https://open.spotify.com/track/3cf182OaSweBnsRHMdO5ZQ' },
    { title: 'Septiembre', img: 'https://i.scdn.co/image/ab67616d0000b27371ca57b02b4f03a46849679d', link: 'https://open.spotify.com/track/36UpDhGjb0dNAoVoUYPTfm' },
    { title: "There's always another way", img: 'https://i.scdn.co/image/ab67616d0000b273ae8319f6bd4a1634f009462b', link: 'https://open.spotify.com/track/3W0d31xh9DJt8InTctghsD' },
    { title: 'Wound-Kotung', img: 'https://i.scdn.co/image/ab67616d0000b273b6999b9b351bbeab2cfdfbd4', link: 'https://open.spotify.com/track/6an5vZAhKcN0K2X6Vv6wal' },
    { title: 'cascada al hemisferio derecho', img: 'https://i.scdn.co/image/ab67616d0000b2739a45263eaf6daaeadf92b09f', link: 'https://open.spotify.com/track/4ZWvLdEPowjXKlnHKN7a9S' },
]

const page = () => {
    return (
        <div className='md:min-h-screen min-h-dvh w-screen bg-neutral-50 overflow-hidden'>
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default page

const Footer = () => {
  return (
    <div className='w-screen grid md:grid-cols-3 grid-cols-1 h-fit'>
      <FooterButton icon={FaSpotify} className='md:border-r md:border-r-neutral-50 border-b border-b-neutral-50'  link='https://open.spotify.com/artist/4lJVzoSN6iGOYpFGfOCato'>
        Spotify
      </FooterButton>
      <FooterButton icon={FaApple} className='md:border-r md:border-r-neutral-50 border-b border-b-neutral-50'  link='https://www.crystalcastles.com/'>
        Apple Music
      </FooterButton>
      <FooterButton icon={FaYoutube} link='https://japanesebreakfast.rocks/'>
        YouTube Music
      </FooterButton>
    </div>
  )
}

const FooterButton = ({ children, className, icon: Icon, link }) => {
  return (
    <a 
      href={link}
      target='_blank'
      rel='noopener noreferrer'>
    <div
      className={cn(
        'bg-black text-white py-4 flex items-center justify-center cursor-pointer gap-2',
        className
      )}
    >
      {Icon && <Icon className='size-4' />}
      <Text className='text-sm'>Listen on {children}</Text>
    </div>
    </a>
  )
}

const Main = () => {
    const defaultImg = '/rw.webp'
    const [currentImg, setCurrentImg] = useState(defaultImg)
    return (
        <div className='w-screen md:h-[80vh] min-h-dvh overflow-hidden flex md:flex-row flex-col px-5 py-10'>
            <div className='flex-1 h-screen w-full'>
                <div className='h-[50vh] md:w-[30vw] overflow-hidden bg-black'>
                    <img src={currentImg} className='w-full h-full song-img' />
                </div>
            </div>
            <div className='flex-1 md:h-screen h-fit w-full'>
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
        </div>
    )
}

const Nav = () => {
    return (
        <div className='w-full flex justify-between items-center px-5 py-3 h-[5vh]'>
            <Text>Rawless</Text>
            <div className='flex gap-5 items-center'>
                <Text>Music</Text>
                <Text>Contact</Text>
            </div>
        </div>
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
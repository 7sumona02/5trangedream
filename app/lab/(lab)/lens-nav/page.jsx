'use client'
import { Book, ChevronDown, Hammer, Headphones } from 'lucide-react'
import { AnimatePresence, easeOut, motion } from 'motion/react'
import Link from 'next/link'
import { useRef, useState } from 'react'

const page = () => {
    return (
        <div className='min-h-screen w-screen bg-white flex justify-center'>
            <Nav />
        </div>
    )
}

export default page

const developerMenu = [
    {
        id: "dashboard",
        title: "Developer Dashboard",
        description: "Start Building",
        icon: Hammer,
        href: "/developers/dashboard",
    },
    {
        id: "docs",
        title: "Documentation",
        description: "Clear & comprehensive docs",
        icon: Book,
        href: "/docs",
    },
]

const Nav = () => {
    const [dialog, setDialog] = useState(false)
    const [hovered, setHovered] = useState(developerMenu[0].id)
    const closeTimer = useRef(null)

    const openMenu = () => {
        if (closeTimer.current) window.clearTimeout(closeTimer.current)
        setDialog(true)
    }

    const closeMenu = () => {
        closeTimer.current = window.setTimeout(() => {
            setDialog(false)
        }, 50) 
    }

    return (
        <div className='w-screen h-fit flex justify-between py-7 border-b border-b-neutral-100'>
            <div className='w-[80vw] mx-auto flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <div>
                        <Logo />
                    </div>
                    <div className='flex gap-5 text-sm text-neutral-500 font-medium items-center ml-10'>
                        <div className='cursor-pointer hover:text-black transition-all ease-out'>News</div>
                        <div className='cursor-pointer hover:text-black transition-all ease-out'>FAQs</div>
                    </div>
                    <div className='relative ml-2'>
                        <motion.div onMouseEnter={openMenu}
                            onMouseLeave={closeMenu} className='text-neutral-500 text-sm font-medium cursor-pointer hover:text-black hover:bg-neutral-100/50 p-2 px-3 rounded-full transition-all ease-out flex items-center gap-1.5'>Developers <ChevronDown className='size-3' /></motion.div>
                        <AnimatePresence initial={false}>
                            {dialog && (
                                <motion.div
                                    initial={{ opacity: 0.5, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.15, ease: easeOut }}
                                    style={{ originX: 0, originY: 0 }}
                                    className='absolute top-full left-0
                                            bg-white px-2 py-2 border rounded-2xl border-neutral-200 
                                            mt-2 w-[20vw] h-fit select-none z-50'
                                    onMouseEnter={openMenu}
                                    onMouseLeave={closeMenu}
                                >
                                    {developerMenu.map((item) => {
                                        const Icon = item.icon

                                        return (
                                            <Link
                                                onMouseEnter={() => setHovered(item.id)}
                                                onMouseLeave={() => setHovered(item.id)}
                                                key={item.id}
                                                href={item.href}
                                                className='text-sm px-2 py-2 flex gap-2 relative'
                                            >
                                                {hovered === item.id && (<motion.div layoutId='hover' transition={{ duration: 0.15, ease: easeOut }} className='absolute inset-0 w-full h-full bg-neutral-100 rounded-lg'></motion.div>)}
                                                <span className='flex gap-2 relative z-10'>
                                                    <div className='bg-white rounded-md h-10 w-10 flex items-center justify-center border border-neutral-200'>
                                                        <Icon className='size-4 text-neutral-500' />
                                                    </div>
                                                    <div>
                                                        <div className='font-medium flex items-center gap-1'>
                                                            {item.title}
                                                        </div>
                                                        <div className='text-neutral-500'>
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </span>
                                            </Link>
                                        )
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='text-sm text-neutral-500 font-medium cursor-pointer hover:text-black hover:bg-neutral-100/50 p-2 px-3 rounded-full transition-all ease-out flex items-center gap-2'><Headphones className='size-3' />Bridge</div>
                    <div className='bg-[#00caa0] hover:bg-[#00caa0]/80 px-4 py-2 text-white rounded-full font-medium text-sm cursor-pointer'>Create Account</div>
                </div>
            </div>
        </div>
    )
}

const Logo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 20" width="80" height="20"><path fill="#2C2D30" d="M24.89 4.18c-1.44 0-2.74.57-3.73 1.48l-.1-.05A5.74 5.74 0 0 0 15.35.25a5.74 5.74 0 0 0-5.72 5.36l-.1.05A5.46 5.46 0 0 0 5.8 4.18 5.8 5.8 0 0 0 0 10c0 2.78 2.75 5.16 3.43 5.7a19.1 19.1 0 0 0 11.92 4.06c4.51 0 8.7-1.5 11.9-4.06.7-.54 3.44-2.92 3.44-5.7a5.8 5.8 0 0 0-5.8-5.8ZM74.53 16.91c3.19 0 5.47-1.3 5.47-3.91 0-1.88-1.18-3.2-3.75-4.16l-.66-.25c-1.02-.38-1.63-.73-1.63-1.38 0-1.47 3.27-.9 4.98-.5l.9-2.77c-1.06-.32-2.2-.57-3.84-.57-3.26 0-5.38 1.63-5.38 3.92 0 1.71 1.2 2.8 2.85 3.5l1.15.5c1.47.63 2.2.9 2.2 1.54 0 .58-.82 1.07-2.2 1.07-1.06 0-2.2-.17-3.43-.41l-.4 2.93c.89.25 2.11.5 3.74.5Zm-15.82-.16h3.26V8.92c0-1.71.9-2.7 2.37-2.7 1.47 0 2.28 1.07 2.28 2.78v7.75h3.26v-8c0-3.26-1.79-5.54-5.54-5.54-3.35 0-5.63 2.28-5.63 5.55v8Zm-14.36.16c1.14 0 2.04-.16 2.86-.49l-.33-3.01c-2.29.49-4.98.57-4.98-2.13v-7.5h-3.26v7.83c0 3.5 2.04 5.3 5.71 5.3Zm2.37-6.93c0 5.28 3.74 7 7.1 7 1.33 0 2.7-.27 3.73-.7l-.4-2.88c-1.08.31-2.2.42-3.23.42-2.09 0-4.01-.7-4.01-3.54v-.55c0-2.23 1.1-3.42 2.74-3.42 1.08 0 1.98.62 1.98 1.8 0 1.42-1.9 2.06-5.3 1.95l.16 1.88c4.29 1.22 8.32-.1 8.32-3.92 0-2.7-2.06-4.57-5.03-4.57-3.58 0-6.06 2.55-6.06 6.53Z"></path></svg>
    )
}
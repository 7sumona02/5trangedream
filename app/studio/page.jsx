import SmoothFadeLayout from "@/components/SmoothFadePageTransition"
import Container from '@/components/Container'
import Link from 'next/link'

const hoverStyle = "hover:text-black hover:bg-[#dddedf] cursor-pointer"

const page = () => {
    return (
        <SmoothFadeLayout>
            <Container className='font-mono text-[#dddedf] md:px-0 px-5'>
                <div className='flex md:flex-row flex-col justify-between items-start'>
                    <div>
                        <Link href='/' className='text-lg cursor-pointer'>Sumona Biswas</Link>
                        <div className='text-sm max-w-lg'>
                            <div>[Web Designer & Developer for Creatives]</div>
                            <div className='mt-5'>Crafting digital spaces for artists, musicians, and creative thinkers.
                                My work sits at the intersection of design, technology, and storytelling.
                                I believe every creative deserves a home on the internet that reflects their vision.
                            </div>
                            <div className='mt-3'>Inspired by internet culture, indie aesthetics, and the beauty of simplicity.</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <LinkComp link='' text='X' />
                        <LinkComp link='' text='Email' />
                    </div>
                </div>
                <CTA />
                <div className="mt-5">
                    <Project link='https://hotelpool.vercel.app/' title='Hotel Pool' type='Artist Portfolio' />
                    <Project link='https://hotelpool.vercel.app/' title='Clim Studio' type='Design Studio' />
                    <Project link='https://lunar-motel.framer.website/' title='Lunar Motel' type='Artist Portfolio' />
                    <Project link='https://anna-tsuchiya.framer.website/' title='Anna Tsuchiya' type='Artist Portfolio' />
                    <Project link='https://beabadoobee-67.framer.website/' title='Beabadoobee' type='Artist Portfolio' />
                    <Project link='https://angel-666.framer.website/' title='Angel' type='Artist Portfolio' />
                    <Project link='https://plucky-room-489165.framer.app/' title='CAS' type='Artist Portfolio' />
                </div>
                <div>
                    <Contact />
                </div>
            </Container>
        </SmoothFadeLayout>
    )
}

export default page

const LinkComp = ({ link, text }) => {
    return (
        <Link href={link} className={`flex items-center gap-1 text-sm ${hoverStyle} underline`}>
            {text}
        </Link>
    )
}

const CTA = () => {
    return (
        <button className='w-full text-sm bg-black px-5 py-2 mt-10 cursor-pointer border border-[#dddedf]'>Works</button>
    )
}

const Project = ({ title, type, link }) => {
    return (
        <Link href={link} target="_blank" className="w-full flex justify-between items-center border-b border-b-[#dddedf] py-2.5">
            <div className="text-sm">{title}</div>
            <div className="text-xs">{type}</div>
        </Link>
    )
}

const Contact = () => {
    return (
        <div className="w-full h-100 mt-20">
            <div className="bg-[#dddedf] w-40 h-10 text-sm flex justify-center items-center md:ml-15 ml-10 relative rounded-t-xl text-black">
                <div className="bg-[#dddedf] h-2 w-50 absolute -bottom-1 z-10"></div>
                <div className="absolute size-10 bg-[#5652f5] rounded-full bottom-0 -left-10 z-10"></div>
                <div className="absolute size-10 bg-[#5652f5] rounded-full bottom-0 -right-10 z-10"></div>
                <div className="absolute w-5 h-5 bg-[#dddedf] bottom-0 -left-4.5"></div>
                <div className="absolute w-5 h-5 bg-[#dddedf] bottom-0 -right-4.5"></div>
                Contact
            </div>
            <div className="h-90 w-full bg-[#dddedf] rounded-sm border border-[#dddedf] flex flex-col justify-center">
               <div className="max-w-lg mx-auto md:px-0 px-5">
                 <p className="text-black text-sm">If you're an artist, designer, or brand building something beautiful. I'd love to help you shape your online presence.
                    Let's create something timeless, together.
                </p>
                <div className="text-sm py-2 border-y border-y-black text-black mt-10 flex md:flex-row flex-col md:items-center md:gap-5">
                <div>Get in touch: </div><Link href='/'>@sumonadotwork@gmail.com</Link>
                </div>
               </div>
            </div>
        </div>
    )
}
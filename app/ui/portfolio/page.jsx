import { cn } from '@/lib/utils'
import { InstagramIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import { FaBehance, FaLinkedin } from 'react-icons/fa'

const page = () => {
    return (
        <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-white'>
            <Hero />
            <Philosphy />
            <Beyond />
            <Gratitude />
            <CTA />
            <Footer />
        </div>
    )
}

export default page

const Hero = () => {
    return (
        <div className='w-screen flex md:flex-row flex-col-reverse items-center justify-center md:px-30 px-5 md:py-0 py-20 md:gap-0 gap-10'>
            <div className='flex-1 flex h-screen items- justify-center flex-col gap-6'>
                <Title>Hi there! I'm Sumona, product designer, <br />occasional illustrator, and neon enthusiast.</Title>
                <Content>I'm a multidisciplinary designer who loves blending intuition with structure. My work explores the balance between clarity and emotion - creating digital experiences that feel both effortless and intentional.</Content>
                <Content>Over the past few years, I've worked with startups and creative teams like <LinkText link='/'>Lumos Labs</LinkText>, <LinkText link='/'>ByteSpace</LinkText>, and <LinkText link='/'>NovaWorks</LinkText>, helping them shape intuitive interfaces and brand identities.
                    Currently running Pix Studios, where I collaborate with artists and founders to build design systems, websites, and digital identities that feel both functional and human.</Content>
            </div>
            <div className='flex-1 flex h-screen items-center justify-center'>
                <img src='https://cdn.cosmos.so/6dde63db-ecce-474c-ad9b-c05b35c7c9bc?format=jpeg' className='md:w-[31vw] w-full' />
            </div>
        </div>
    )
}

const Title = ({ children, className }) => {
    return (
        <h1 className={cn('font-display text-3xl font-semibold italic tracking-tight text-black', className)}>
            {children}
        </h1>
    );
};

const Title2 = ({ children, className }) => {
    return (
        <h1 className={cn('font-display text-xl font-semibold italic tracking-tight text-black', className)}>
            {children}
        </h1>
    );
};

const Content = ({ children, className }) => {
    return (
        <p className={cn('text-left text-neutral-400 font-sans md:max-w-lg max-w-sm text-sm font-medium', className)}>
            {children}
        </p>
    );
};

const LinkText = ({ children, className, link }) => {
    return (
        <Link href={link} className={cn('font-medium text-black underline underline-offset-2 transition-all cursor-pointer', className)}>
            {children}
        </Link>
    );
};

const Container = ({ children }) => {
    return (<div className='md:w-5xl w-full mx-auto relative z-50'>{children}</div>)
}

const Philosphy = () => {
    return (
        <div className='h-[60vh] w-screen bg-blue-100/50 flex justify-center items-center relative overflow-hidden md:px-0 px-5'>
            <div className='size-150 bg-yellow-400/50 blur-[10rem] rounded-full absolute -top-[50vh] left-[10vw] z-10'></div>
            <div className='size-200 bg-red-300/40 blur-[10rem] rounded-full absolute -top-[70vh] right-0 z-0'></div>
            <Container>
                <Title className='border-b-2 border-b-neutral-200 pb-5'>I believe that design is...</Title>
                <div className='flex flex-col gap-5 mt-5'>
                    <div className='w-full flex md:flex-row flex-col justify-between md:items-center'>
                        <Title2>a friend</Title2>
                        <Content>Design listens before it speaks.
                            It understands your intent without judgment.
                            It makes the complex feel familiar and kind..</Content>
                    </div>
                    <div className='w-full flex md:flex-row flex-col justify-between md:items-center'>
                        <Title2>a bridge</Title2>
                        <Content>Design connects thoughts to emotions.
                            It links logic with imagination.
                            It brings people closer through shared understanding.</Content>
                    </div>
                    <div className='w-full flex md:flex-row flex-col justify-between md:items-center'>
                        <Title2>a superpower</Title2>
                        <Content>Design turns limitations into possibilities.
                            It simplifies chaos into clarity.
                            It makes the invisible, visible.</Content>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const Beyond = () => {
    return (
        <div className='h-[60vh] w-screen flex justify-center items-center relative overflow-hidden md:px-0 px-5'>
            <Container>
                <Title className='border-b-2 border-b-neutral-200 pb-5'>Beyond design</Title>
                <div className='flex flex-col gap-5 mt-5'>
                    <div className='w-full flex md:flex-row flex-col justify-between md:items-center'>
                        <Title2>Where I'm from</Title2>
                        <Content>I grew up surrounded by color, chaos, and curiosity.
                            Spent my childhood sketching on walls and taking things apart just to see how they worked.
                            Those early moments shaped how I see — design as both play and discovery.</Content>
                    </div>
                    <div className='w-full flex md:flex-row flex-col justify-between md:items-center'>
                        <Title2>What I do</Title2>
                        <Content>I design experiences that make technology feel human.
                            Bridging clarity with curiosity, I craft interfaces that tell stories with intention.
                            My work blends logic, emotion, and rhythm — making ideas tangible and intuitive.</Content>
                    </div>
                    <div className='w-full flex md:flex-row flex-col justify-between md:items-center'>
                        <Title2>Fun fact</Title2>
                        <Content>I collect neon signs and vintage notebooks.
                            I find inspiration in quiet cafés and rainy evenings.
                            And I believe the best ideas come when you stop trying too hard to find them.</Content>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const Gratitude = () => {
    return (
        <div className='h-fit w-screen flex justify-center items-center relative overflow-hidden md:px-0 px-5 pb-20'>
            <Container>
                <Title className='border-b-2 border-b-neutral-200 pb-5'>Gratitude</Title>
                <div className='flex flex-col gap-5 mt-7'>
                    <div className='w-full flex justify-between items-start gap-10'>
                        <Content className={'w-1/2'}>I owe a lot to the people who've supported me througout my journey - thank you!</Content>
                        <div className='w-1/2 flex justify-start md:gap-20 gap-10'>
                            <div className='flex flex-col gap-3'>
                                <LinkText link='/' className='font-sans text-sm'>Spence</LinkText>
                                <LinkText link='/' className='font-sans text-sm'>Stephen</LinkText>
                                <LinkText link='/' className='font-sans text-sm'>Noah</LinkText>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <LinkText link='/' className='font-sans text-sm'>Matthew</LinkText>
                                <LinkText link='/' className='font-sans text-sm'>Andrew</LinkText>
                                <LinkText link='/' className='font-sans text-sm'>James</LinkText>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const CTA = () => {
    return (
        <div className='pt-10 pb-20'>
            <div className='bg-black w-[90vw] h-fit md:py-20 py-10 flex flex-col justify-center items-center'>
                <div className='md:w-6xl flex md:flex-row flex-col justify-center md:gap-40 gap-10 items-start md:px-0 px-5'>
                    <div>
                        <Title className={'text-white'}>I'd love to meet you!</Title>
                        <Content className={'text-neutral-400 mt-5'}>Whether your're a founder looking for a design ace, designer looking for a collaborator, or just a regular human looking for some conversation, I'd love to connect over some virtual coffee.</Content>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Button link='/'>Dm me on twitter</Button>
                        <Button link='/'>Email me</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Button = ({ children, link }) => {
    return (
        <Link href={link} className='bg-neutral-700 uppercase text-white font-sans w-fit font-medium text-sm py-4 px-8 cursor-pointer'>{children}</Link>
    )
}

const Footer = () => {
    return (
        <div className='w-screen h-fit bg-lime-300 py-10 md:px-0 px-5'>
            <div className='md:w-6xl mx-auto flex justify-between items-start'>
                <div className='w-1/2'>
                    <div>
                        <Title>Let's build something together.</Title>
                    </div>
                    <div className='flex items-center gap-3 mt-5'>
                        <div className='bg-black p-2 rounded-full w-fit flex items-center justify-center'><TwitterIcon className='size-4' fill='oklch(89.7% 0.196 126.665)' /></div>
                        <div className='bg-black p-2 rounded-full w-fit flex items-center justify-center'><InstagramIcon className='size-4' fill='oklch(89.7% 0.196 126.665)' /></div>
                        <div className='bg-black p-2 rounded-full w-fit flex items-center justify-center'><FaLinkedin className='size-4' fill='oklch(89.7% 0.196 126.665)' /></div>
                        <div className='bg-black p-2 rounded-full w-fit flex items-center justify-center'><FaBehance className='size-4' fill='oklch(89.7% 0.196 126.665)' /></div>
                    </div>
                </div>
                <div className='w-1/2 flex justify-end md:gap-20 gap-10'>
                    <div className='flex flex-col gap-3'>
                        <LinkText link='/' className='font-sans text-sm'>Design</LinkText>
                        <LinkText link='/' className='font-sans text-sm'>Illustration</LinkText>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <LinkText link='/' className='font-sans text-sm'>About</LinkText>
                        <LinkText link='/' className='font-sans text-sm'>Resume</LinkText>
                    </div>
                </div>
            </div>
        </div>
    )
}
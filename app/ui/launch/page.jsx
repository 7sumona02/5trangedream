import { cn } from '@/lib/utils'
import Background from './Background'
import { IconBiohazard, IconBrain, IconFlame, IconUsers } from '@tabler/icons-react'
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/components/ui/input-group.tsx'

const page = () => {
    return (
        <div>
            <Background>
                <ContentWrapper>
                    <Logo className='p-4.5'><IconBiohazard className='size-5' /></Logo>
                    <div className='flex justify-start items-center flex-col gap-4'>
                        <Badge />
                        <Heading>Early Access to <br /> Future of AI Growth</Heading>
                        <Text>Automate tasks, unlock insights, and scale your team's productivity — all in one place</Text>
                        <Waitlist />
                        <Join />
                        <div className='mt-20 pb-50 flex md:flex-row flex-col items-center md:gap-5 gap-12'>
                            <InsightCard
                                cardIcon={
                                    <Logo>
                                        <IconBrain className='size-4' />
                                    </Logo>
                                }
                                title='Smart Automation'
                                description='Automate everyday work fast'
                            />
                            <InsightCard
                                cardIcon={
                                    <Logo>
                                        <IconFlame className='size-4' />
                                    </Logo>
                                }
                                title='AI Insights'
                                description='Unlock data-driven sharp clarity'
                            />
                            <InsightCard
                                cardIcon={
                                    <Logo>
                                        <IconUsers className='size-4' />
                                    </Logo>
                                }
                                title='Team Collaboration'
                                description='Boost smart workflows with AI'
                            />
                        </div>
                    </div>
                </ContentWrapper>
            </Background>
        </div>
    )
}

export default page

const ProfileIcon = ({ imgUrl }) => {
    return (
        <div className='size-8 rounded-full overflow-hidden'>
            <img src={imgUrl} className='w-full h-full object-contain' />
        </div>
    )
}

const ContentWrapper = ({ children }) => {
    return (
        <div className='absolute inset-0 flex flex-col items-center justify-start pt-20 font-sans text-neutral-900 overflow-y-auto scrollbar-none scroll-smooth'>{children}</div>
    )
}

const Logo = ({ children, className }) => {
    return (
        <div className={cn('bg-black rounded-full p-4 flex items-center justify-center shadow-smooth mb-10 text-white', className)}>
            {children}
        </div>
    )
}

const InsightCard = ({ cardIcon, title, description }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 bg-white/30 backdrop-blur-lg rounded-3xl px-15 py-10 relative md:w-fit w-xs'>
            <div className='absolute -top-6'>{cardIcon}</div>
            <div className='text-lg font-medium tracking-tight'>{title}</div>
            <Text className='text-sm w-30'>{description}</Text>
        </div>
    )
}

const Badge = () => {
    return (
        <div className='w-fit flex items-center gap-3 bg-neutral-200/50 backdrop-blur-lg py-1 px-3 rounded-full'>
            <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
            </span>
            <div className='text-sm tracking-tight font-medium'>Beta goes live soon</div>
        </div>
    )
}

const Heading = ({ children }) => {
    return (
        <div className='md:text-5xl text-4xl font-medium tracking-tight leading-tight text-center'>{children}</div>
    )
}

const Text = ({ children, className }) => {
    return (
        <div className={cn('text-neutral-600 md:max-w-sm max-w-96 text-center tracking-tight md:text-base text-lg', className)}>{children}</div>
    )
}

const Waitlist = () => {
    return (
        <div>
            <InputGroup className='bg-neutral-100 rounded-full md:w-md w-xs mt-7 border border-neutral-100 hover:border-neutral-400 transition-all duration-200'>
                <InputGroupInput placeholder='Your Email' className='placeholder:text-base ml-2 tracking-tight' />
                <InputGroupAddon align='inline-end'>
                    <div className='-mr-1'>
                        <button className='text-white bg-neutral-900 py-2 px-6 rounded-full text-base font-medium shadow-smooth h-12'>Join Waitlist</button>
                    </div>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

const Join = () => {
    return (
        <div className='mt-5 flex items-center gap-3'>
            <div className='flex -space-x-3'>
                <ProfileIcon imgUrl={'https://randomuser.me/api/portraits/men/24.jpg'} />
                <ProfileIcon imgUrl={'https://randomuser.me/api/portraits/women/8.jpg'} />
                <ProfileIcon imgUrl={'https://randomuser.me/api/portraits/men/47.jpg'} />
            </div>
            <Text>Join 8,458+ SaaS & AI founders</Text>
        </div>
    )
}

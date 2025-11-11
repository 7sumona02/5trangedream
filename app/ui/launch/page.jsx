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
                        <div className='mt-20 flex md:flex-row flex-col items-center md:gap-5 gap-12'>
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
                        <div className='h-fit py-40 flex items-center justify-center'>
                            <div className='w-lg bg-neutral-100 rounded-xl p-12 outline-8 outline-white/50 backdrop-blur-lg flex flex-col items-start justify-start relative'>
                                <div className='absolute -top-8 right-6'><Logo className='p-5'><IconBiohazard className='size-5' /></Logo></div>
                                <div className='w-fit flex items-center gap-3 bg-neutral-200/50 backdrop-blur-lg py-1 px-3 rounded-full'>
                                    <div className='text-sm tracking-tight'>Mission</div>
                                </div>
                                <div className='mt-9'>
                                    <Heading2 className='text-left'>The New Era of AI-Powered SaaS</Heading2>
                                    <Text className='text-left max-w-5xl mt-5'>Our platform puts AI at the center of your workflow — helping teams automate repetitive tasks, generate instant insights, and collaborate smarter.</Text>
                                    <Text className='text-left max-w-5xl mt-5'>With faster decisions and seamless integration, you scale your SaaS product without limits.</Text>
                                    <div className='mt-5'>
                                        <Key label='Launch Date:' desc='November 2025' />
                                        <Key label='Key Benefit:' desc='Save 10+ hours weekly' />
                                        <Key label='Built For:' desc='SaaS & AI founders' />
                                    </div>
                                </div>
                                <div className='mt-9 flex gap-3 items-center'>
                                    <div><ProfileIcon imgUrl={'https://randomuser.me/api/portraits/men/24.jpg'} className='shadow-smooth size-9' /></div>
                                    <div className='space-y-0.5'>
                                        <div className='text-black text-xs font-medium'>Daniel Hayes</div>
                                        <div className='text-neutral-600 text-xs'>Founder of EarlyBird</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </Background>
        </div>
    )
}

export default page

const ProfileIcon = ({ imgUrl, className }) => {
    return (
        <div className={cn('size-8 rounded-full overflow-hidden', className)}>
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
            <div className='text-sm tracking-tight'>Beta goes live soon</div>
        </div>
    )
}

const Heading = ({ children }) => {
    return (
        <div className='md:text-5xl text-4xl font-medium tracking-tight leading-tight text-center'>{children}</div>
    )
}

const Heading2 = ({ children, className }) => {
    return (
        <div className={cn('md:text-[1.9vw] text-xl font-medium tracking-tight leading-tight text-center', className)}>{children}</div>
    )
}

const Text = ({ children, className }) => {
    return (
        <div className={cn('text-neutral-600 md:max-w-sm max-w-96 text-center tracking-tight md:text-base text-lg', className)}>{children}</div>
    )
}

const Key = ({ label, desc }) => {
    return (
        <div className='flex gap-2 items-center'>
            <span className='text-black font-medium md:max-w-sm max-w-96 tracking-tight md:text-base text-lg'>{label}</span>
            <span className='text-neutral-600 md:max-w-sm max-w-96 tracking-tight md:text-base text-lg'>{desc}</span>
        </div>
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

'use client'
import { cn } from '@/lib/utils'
import Background from './Background'
import { IconBiohazard, IconFlame, IconUsers } from '@tabler/icons-react'
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/components/ui/input-group.tsx'
import { BrainIcon, MinusIcon, PlusIcon } from 'lucide-react'
import { useState } from "react"
import { motion } from "framer-motion"

const page = () => {
    return (
        <div className='select-none'>
            <Background>
                <ContentWrapper>
                    <Logo className='p-4.5'><IconBiohazard className='size-5' /></Logo>
                    <div className='flex justify-start items-center flex-col gap-4'>
                        <Badge />
                        <Heading>Early Access to <br /> Future of AI Growth</Heading>
                        <Text>Automate tasks, unlock insights, and scale your team's productivity — all in one place</Text>
                        <Waitlist />
                        <Join />
                        <Benefits />
                        <Mission />
                        <FAQ />
                        <div className='text-center border-t border-t-neutral-300 md:w-2xl w-full py-5 text-sm text-neutral-600 tracking-tight md:px-0 px-10'>
                            <div className='w-full flex justify-between'>
                                <div className='hover:underline cursor-pointer'>Career</div>
                                <div className='hover:underline cursor-pointer'>About us</div>
                                <div className='hover:underline cursor-pointer'>Contact</div>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </Background>
        </div>
    )
}

export default page

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    return (
        <div className='h-fit w-screen flex flex-col items-center md:py-40 pt-25 pb-15 gap-5'>
            <div className='w-fit flex items-center gap-3 bg-neutral-200/50 backdrop-blur-lg py-1 px-3 rounded-full overflow-hidden'>
                <div className='text-sm tracking-tight'>FAQ</div>
            </div>
            <Heading>Frequently Asked <br /> Questions</Heading>
            <div className='flex md:flex-row flex-col gap-3 mt-5 bg-neutral-50 py-2 px-2 backdrop-blur-lg rounded-xl'>
                <div className='flex flex-col gap-3'>
                    <FAQItem
                        question="What's included in the beta?"
                        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, optio."
                        isOpen={activeIndex === 0}
                        onClick={() => handleToggle(0)}
                    />
                    <FAQItem
                        question="How can I get early access?"
                        answer="You can join the waitlist and we'll notify you as soon as beta invites open."
                        isOpen={activeIndex === 1}
                        onClick={() => handleToggle(1)}
                    />
                    <FAQItem
                        question="Is it free to join?"
                        answer="Yes, joining the beta is completely free during early access."
                        isOpen={activeIndex === 2}
                        onClick={() => handleToggle(2)}
                    />
                </div>

                <div className='flex flex-col gap-3'>
                    <FAQItem
                        question="Can I invite my team?"
                        answer="Absolutely! You can add multiple teammates during the beta testing phase."
                        isOpen={activeIndex === 3}
                        onClick={() => handleToggle(3)}
                    />
                    <FAQItem
                        question="What platforms are supported?"
                        answer="Currently, we support web browsers, with mobile coming soon."
                        isOpen={activeIndex === 4}
                        onClick={() => handleToggle(4)}
                    />
                    <FAQItem
                        question="How do I share feedback?"
                        answer="Inside the beta dashboard, there's a built-in feedback option for all users."
                        isOpen={activeIndex === 5}
                        onClick={() => handleToggle(5)}
                    />
                </div>
            </div>
            <div className='space-x-1 mt-3'>
                <span className='text-neutral-600 md:max-w-sm max-w-96 tracking-tight text-sm'>Contact us:</span>
                <span className='text-black md:max-w-sm max-w-96 tracking-tight text-sm hover:underline cursor-pointer'>hello@earlybird.ai</span>
            </div>
        </div>
    )
}

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <motion.div
            layout
            className="bg-neutral-100 p-5 rounded-xl md:w-[24vw] w-xs cursor-pointer overflow-hidden"
            onClick={onClick}
            style={{
                borderRadius: isOpen ? "1rem" : "0.75rem",
            }}
        >
            <motion.div layout className="flex justify-between items-center">
                <div className="text-black font-medium tracking-tight text-lg">{question}</div>
                {isOpen ? (
                    <div className='bg-neutral-900 rounded-full size-7 flex justify-center items-center shadow-smooth'><MinusIcon className="size-4 text-neutral-100" /></div>
                ) : (
                    <div className='bg-neutral-900 rounded-full size-7 flex justify-center items-center shadow-smooth'><PlusIcon className="size-4 font-bold text-neutral-100" /></div>
                )}
            </motion.div>

            {isOpen && (
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 10, borderRadius: 100 }}
                    animate={{ opacity: 1, y: 0, borderRadius: 100 }}
                    exit={{ opacity: 0, y: -10, borderRadius: 100 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="mt-3 text-neutral-600 md:w-[24vw] w-[70vw] tracking-tight text-base"
                >
                    {answer}
                </motion.div>
            )}
        </motion.div>
    )
}

const Mission = () => {
    return (
        <div className='h-fit md:pt-40 pt-30 flex items-center justify-center md:px-0 px-5'>
            <div className='md:w-lg w-xs bg-neutral-100 rounded-xl p-12 outline-8 outline-white/50 backdrop-blur-lg flex flex-col items-start justify-start relative'>
                <div className='absolute -top-8 right-6'><Logo className='p-5'><BrainIcon className='size-5' /></Logo></div>
                <div className='w-fit flex items-center gap-3 bg-neutral-200/50 backdrop-blur-lg py-1 px-3 rounded-full'>
                    <div className='text-sm tracking-tight'>Mission</div>
                </div>
                <div className='mt-9'>
                    <Heading2 className='text-left'>The New Era of AI-Powered SaaS</Heading2>
                    <Text className='text-left md:max-w-5xl mt-5'>Our platform puts AI at the center of your workflow — helping teams automate repetitive tasks, generate instant insights, and collaborate smarter.</Text>
                    <Text className='text-left md:max-w-5xl mt-5'>With faster decisions and seamless integration, you scale your SaaS product without limits.</Text>
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
    )
}

const Benefits = () => {
    return (
        <div className='mt-20 flex md:flex-row flex-col items-center md:gap-5 gap-12'>
            <InsightCard
                cardIcon={
                    <Logo>
                        <BrainIcon className='size-4' />
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
    )
}

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
        <div className={cn('text-neutral-600 md:max-w-sm max-w-96 text-center tracking-tight md:text-base', className)}>{children}</div>
    )
}

const Key = ({ label, desc }) => {
    return (
        <div className='space-x-2'>
            <span className='text-black font-medium md:max-w-sm max-w-96 tracking-tight text-base'>{label}</span>
            <span className='text-neutral-600 md:max-w-sm max-w-96 tracking-tight text-base'>{desc}</span>
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

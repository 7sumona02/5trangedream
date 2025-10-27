"use client"
import SmoothFadeLayout from "@/components/SmoothFadePageTransition"
import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const hoverStyle = "hover:text-black hover:bg-[#dddedf] cursor-pointer"

const page = () => {
    return (
        <div className="md:h-full min-h-dvh flex justify-center items-center bg-[#5652f5] selection:text-black selection:bg-[#dddedf] overflow-hidden">
            <SmoothFadeLayout className="flex justify-center items-start pt-10 pb-20">
                <div className="flex flex-col md:p-10 p-5 font-mono text-[#dddedf] font-medium text-sm md:w-xl">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/blog">blog</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>clarity</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="space-y-5 pt-10">
                        <div className="text-xl font-medium tracking-tight">Clarity speaks louder than noise</div>
                    </div>
                    <div className="space-y-5">
                        <div className="pt-10 text-sm leading-relaxed">
                           Today I spent some time exploring websites, not with the goal of finding features or comparing them, but just noticing how they made me feel. I realized how much the first thing you see, the hero section, can shape the entire experience.</div>
                        <div>Some sites greet you quietly. They show the product, a small demo, or a simple visual of what it does. You immediately understand the value and feel a kind of trust. It is as if the product itself is speaking to you, saying this is why I exist and this is how I can help. That first impression is subtle but powerful.</div>
                        <div>When the hero section is clear, it feels like a friend guiding you. You do not have to guess what to do next. You see the value, and you know where to go.</div>
                        <div>I noticed this particularly on sites like Apple and Linear. They do not try to overwhelm or impress. They present what matters and let it breathe. The moment you land on their pages, your attention is naturally drawn to the right place. You do not need to hunt for information or decide between ten options. The experience is calm, confident, and direct.</div>
                        <div><Link href='https://letterclub.org/' target="_blank" className={`${hoverStyle} underline`}>Letter Club</Link> surprised me in a different way. Their hero section was minimal, yet it had a playful energy. The CTA caught my eye immediately, simple and creative, and it sparked curiosity. I found myself signing up just to see what would happen next. The colors, the typography, the layout, everything felt intentional. It felt alive without being loud.</div>
                        <div className="w-full h-full rounded-md overflow-hidden mb-10">
                                    <img
                                        src="/c1.png"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                        <div>Then there are sites that feel heavy. Lingscars.com was one of them. There was so much happening at once that I did not know where to look first. My eyes wandered, my mind wandered, and it took effort to figure out what to do. I realized then how important clarity is. It is not about removing personality or creativity. It is about guiding attention and showing value without confusion.</div>
                        <div><Link href='https://rysa.app/' target="_blank" className={`${hoverStyle} underline`}>Rysa</Link> caught my attention too. They are digitizing wardrobes, and they show it beautifully. A small demo of a wardrobe in action, even rendered with playful visuals, made me understand instantly what the product offered. It was engaging and unique, not generic. It reminded me that visuals and videos work best when they tell a story about the product rather than just decorate the page.</div>
                        <div className="w-full h-full rounded-md overflow-hidden mb-10">
                                    <img
                                        src="/c2.png"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                        <div>What I took away from this day of discovery is that simplicity is not about doing less. It is about being intentional. It is about designing a path for the user without forcing them to guess. It is about showing value in a way that feels effortless and trustworthy.</div>
                        <div>I am learning to appreciate these quiet lessons in design. They do not shout. They do not demand. They invite, they guide, and they reflect care. Clarity is a form of respect, and when it is done well, it feels like someone truly thought about you even before you arrived on the page.</div>
                    </div>
                </div>
            </SmoothFadeLayout>
        </div>
    )
}

export default page
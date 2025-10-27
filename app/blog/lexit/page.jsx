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
            <SmoothFadeLayout className="flex justify-center items-start pb-20">
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
                                <BreadcrumbPage>lexit</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="space-y-5 pt-10">
                        <div className="text-xl font-medium tracking-tight">Opensource contributions to Lexit</div>
                    </div>
                    <div className="space-y-5">
                        <div className="pt-10 text-sm leading-relaxed">
                            I've been contributing to Lexit, an open-source personal vocabulary vault — a neat little app that helps you collect and revisit new words you come across.                        </div>
                        <div>My work mainly focused on improving the overall experience. I implemented a smoother dark mode toggle using the View Transition API, fixed reload state issues, and added page transitions to make the app feel more polished and fluid.</div>
                        <div>It's been a fun learning experience working with browser-native transitions and animations in a real open-source setup. Getting to contribute to something that others actively use felt genuinely rewarding.</div>
                        <div className="flex items-center gap-1">↳ <Link href='https://github.com/puang59/lexit' target="_blank" className={`${hoverStyle} underline flex items-center gap-1 w-fit`}>View Repository</Link></div>
                    </div>
                    <div className="pt-10 space-y-5">
                        <div className="text-base">{`{Contributions}`}</div>
                        <div className="space-y-5">
                            <div className="space-y-5">
                                <div>~ Implemented a theme toggle using the View Transition API for a smooth circle with blur effect, and animated the toggle button with <Link href='https://motion.dev/' target="_blank" className={`${hoverStyle} underline`}>motion</Link>, making navigation feel fluid and visually pleasant.</div>
                                <div className="w-full h-full overflow-hidden">
                                    <video
                                        src="/v1.mp4"
                                        className="h-full w-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                </div>
                            </div>
                            <div>
                                <div>~ Worked on smooth page transitions with fade and blur effects using motion, making navigation feel fluid and visually pleasant.</div>
                            </div>
                            <div>
                                <div>~ Added button to quickly regenerate AI responses, making the app a bit more convenient to use.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SmoothFadeLayout>
        </div>
    )
}

export default page
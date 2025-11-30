import SmoothFadeLayout from "@/components/SmoothFadePageTransition"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

const posts = [
    {
        title: "Pending wallet transactions",
        tag: "LAB",
        href: "/lab/pending-wallet-transactions",
        img: "/l1.webp"
    },
    {
        title: "Theme Toggle",
        tag: "LAB",
        href: "/lab/theme-toggle",
        img: "/l2.gif"
    },
    {
        title: "Minimal Blog Cards",
        tag: "LAB",
        href: "/lab/blog-card",
        img: "/l3.webp"
    },
    {
        title: "Create new button",
        tag: "LAB",
        href: "/lab/create-new-button",
        video: "/l4.mp4"
    },
    {
        title: "Sliding button",
        tag: "LAB",
        href: "/lab/sliding-button",
        video: "/l5.mp4"
    },
    {
        title: "avatar dock menu",
        tag: "LAB",
        href: "/lab/avatar-dock-menu",
        img: "/l6.webp"
    },
    {
        title: "Cursor trail",
        tag: "LAB",
        href: "/lab/cursor-trail",
        video: "/l7.mp4"
    },
    {
        title: "inline overflow",
        tag: "LAB",
        href: "/lab/inline-overflow",
        img: "/l8.webp"
    },
    {
        title: "low battery notification",
        tag: "LAB",
        href: "/lab/low-battery-notification",
        video: "/l9.mp4"
    },
    {
        title: "menu toggle",
        tag: "LAB",
        href: "/lab/menu-toggle",
        video: "/l10.mp4"
    },
    {
        title: "tabs",
        tag: "LAB",
        href: "/lab/tabs",
        img: "/l11.webp"
    },
    {
        title: "layout tabs",
        tag: "LAB",
        href: "/lab/layout-tabs",
        img: "/l12.webp"
    },
    {
        title: "step rotatey",
        tag: "LAB",
        href: "/lab/step-rotatey",
        video: "/girl.mp4"
    },
    {
        title: "dropdown",
        tag: "LAB",
        href: "/lab/dropdown",
        img: "/dd.webp"
    },
    {
        title: "actions menu",
        tag: "LAB",
        href: "/lab/actions-menu",
        img: "/actions.webp"
    },
]

const Page = () => {
    return (
        <div className="md:h-full min-h-dvh flex justify-center items-center bg-[#5652f5] selection:text-black selection:bg-[#dddedf] overflow-hidden">
            <SmoothFadeLayout className="flex justify-center items-start pb-20 w-full">
                <div className="flex flex-col w-full max-w-xl md:p-10 p-5 font-mono text-[#dddedf] font-medium text-sm">

                    {/* Breadcrumb */}
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>lab</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    {/* UI Cards Mapped from List */}
                    <div className="pt-10 ui-cards flex flex-col gap-10">
                        {posts.map((post, index) => (
                            <Link key={index} href={post.href} className="border border-[#dddedf]">
                                <div className="w-full group cursor-pointer">
                                    <div className="p-1.5 w-full bg-[#dddedf] uppercase text-black flex justify-between items-center">
                                        <div>{post.title}</div>
                                        <div><PlusIcon size={15} /></div>
                                    </div>
                                    <div className="w-full h-full overflow-hidden">
                    {post.video ? (
                      <video
                        src={post.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={post.img}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </SmoothFadeLayout>
        </div>
    )
}

export default Page

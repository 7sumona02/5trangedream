"use client"

import SmoothFadeLayout from "@/components/SmoothFadePageTransition"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

const posts = [
  { title: "Lexit opensource", tag: "TECH", href: "/blog/lexit" },
  { title: "Clarity speaks louder than noise", tag: "THOUGHTS", href: "/blog/clarity" },
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
                <BreadcrumbPage href="/">blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Description */}
          <div className="pt-10">some description</div>

          {/* Blog Links */}
          <div className="pt-10 space-y-3">
            {posts.map(({ title, tag, href }) => (
              <Link
                key={title}
                href={href}
                className="w-full flex justify-between items-end border-b border-b-[#dddedf] pb-3 cursor-pointer"
              >
                <div className="truncate max-w-[70%] md:max-w-[80%]">{title}</div>
                <div className="uppercase text-xs flex-shrink-0">{`~ ${tag}`}</div>
              </Link>
            ))}
          </div>

        </div>
      </SmoothFadeLayout>
    </div>
  )
}

export default Page

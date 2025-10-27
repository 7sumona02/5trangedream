import { cn } from "@/lib/utils"
import { Inconsolata } from "next/font/google"
import Link from "next/link"

const inconsolata = Inconsolata({
    weight: '400',
    subsets: ['latin'],
})

const page = () => {
    return (
        <div className='md:min-h-screen min-h-dvh w-screen flex justify-center items-center bg-neutral-900'>
            <Link href='https://nazhamid.com/journal/' className={`${inconsolata.className} text-neutral-600 uppercase fixed mx-auto bottom-[10vh]`}>inspired from hamid's journal</Link>
            <div className='flex flex-col space-y-8 justify-start w-2xl'>
                {blogData.map((blog, index) => (
                    <BlogCard
                        key={index}
                        title={blog.title}
                        date={blog.date}
                        description={blog.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default page

const blogData = [
    { title: "The New Design", date: "May 20 2013", description: "What those new to the field should know, and how we can help." },
    { title: "Letter Club", date: "Aug 14 2025", description: "An ode to the slow web." },
    { title: "Have the Coffee", date: "Sep 19 2025", description: "Carve space out for oppurtunity." },
]

const BlogCard = ({ title, date, description }) => {
    return (
        <div className='text-white w-full h-20 p-4 space-y-1 blog-card group hover:cursor-pointer'>
            <div className='flex justify-center gap-1 items-end relative'>
                <div className="text-2xl font-serif whitespace-nowrap text-neutral-100 group-hover:text-[#ce624c] transition-all duration-500 ease-out">{title}</div>
                <span className="w-full border-b-[0.5px] border-dashed border-neutral-600 group-hover:border-[#ce624c] mb-[6px]"></span>
                <div className={cn(' text-neutral-400 whitespace-nowrap uppercase group-hover:text-[#ce624c]', `${inconsolata.className}`)}>{date}</div>
            </div>
            <div className="text-neutral-400 text-lg group-hover:text-[#ce624c]">{description}</div>
        </div>
    )
}
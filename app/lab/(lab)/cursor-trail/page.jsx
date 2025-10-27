"use client"
import CursorTrail from '@/components/CursorTrail'
import { ArrowDown } from 'lucide-react'
import { Inconsolata, Playfair_Display } from 'next/font/google'

const pd = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const inconsolata = Inconsolata({
  weight: '400',
  subsets: ['latin'],
})

const page = () => {
  return (
    <div className='bg-neutral-50'>
        <CursorTrail className="" />
        <Content />
    </div>
  )
}

export default page

const Content = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-12 relative z-50'>
        <Nav />
        <div className={`flex flex-col justify-center items-center ${pd.className} text-8xl leading-tighter tracking-[-0.5rem]`}>
            <div>Small studio.</div>
            <div>Big work.</div>
        </div>
        <div className={`flex flex-col justify-center items-center ${inconsolata.className}`}>
            <div className='max-w-lg text-center leading-tight text-sm'>HAS is an independent creative studio based in Sweden, we explore the space where storytelling, design and new technology meet.</div>
        </div>
        <div className='bg-black rounded-full px-4 py-2'><ArrowDown className='text-white' strokeWidth={1} size={20} /></div>
    </div>
  )
}

const Nav = () => {
    return (
        <div className='w-screen fixed top-0 flex justify-between items-center p-5'>
           <div className='flex items-center gap-5'>
             <div className={`text-4xl font-bold tracking-tighter ${pd.className}`}>HAS</div>
             <div className={`text-xs ${inconsolata.className}`}>HAS.WORKS is operated by Henrik & Sofia AB,<br />  VAT SE559030001701, Registered in Sweden (EU).</div>
           </div>
           <div className={`text-xs ${inconsolata.className} flex flex-col`}>
            <div>M-F 10-17</div>
            <div>17:29:56</div>
           </div>
        </div>
    )
}